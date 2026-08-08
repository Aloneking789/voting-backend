import { prisma } from '../config/prisma.js';
import { generateToken } from '../utils/token.js';

/**
 * Synchronize student data from the external authentication system and return JWT.
 */
export async function authSync(req, res) {
  try {
    const studentData = req.body;

    // Validate request body is provided and has identifying fields
    if (!studentData || (!studentData.stdid && !studentData.studentId)) {
      return res.status(400).json({ error: 'Invalid student data. stdid is required.' });
    }

    const studentId = studentData.stdid || studentData.studentId;
    const admissionId = studentData.AdmissionId ? String(studentData.AdmissionId) : null;

    // Parse date of birth safely
    let dob = null;
    if (studentData.DOB) {
      const parsedDate = new Date(studentData.DOB);
      if (!isNaN(parsedDate.getTime())) {
        dob = parsedDate;
      }
    }

    // Map keys to match our Prisma schema
    const mappedData = {
      admissionId: admissionId,
      firstName: studentData.FirstName || '',
      middleName: studentData.MidName || '',
      lastName: studentData.LastName || '',
      fatherName: studentData.father || '',
      motherName: studentData.mother || '',
      mobile: studentData.Mobile || '',
      fatherMobile: studentData.fcontact || '',
      motherMobile: studentData.mcontact || '',
      email: studentData.Email || '',
      gender: studentData.Gender || '',
      dob: dob,
      className: studentData.cls || '',
      section: studentData.section || '',
      batchId: studentData.BatchId || '',
      courseId: studentData.courseid || '',
      sessionId: studentData.SessionId || '',
      address: studentData.AddressLine1 || '',
      city: studentData.City || '',
      state: studentData.State || '',
      country: studentData.Country || '',
      pincode: studentData.PinCode || '',
      bloodGroup: studentData.BloodGroup || '',
      religion: studentData.Religion || '',
      nationality: studentData.Nationality || '',
      lastLoginAt: new Date(),
    };

    // Upsert student into local Database
    const user = await prisma.user.upsert({
      where: { studentId: studentId },
      update: {
        ...mappedData,
        loginCount: { increment: 1 }
      },
      create: {
        studentId: studentId,
        ...mappedData,
        loginCount: 1
      }
    });

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      studentId: user.studentId,
      role: 'STUDENT'
    });

    return res.status(200).json({
      message: 'Student session synchronized successfully.',
      token,
      user
    });
  } catch (error) {
    console.error('Error synchronizing student:', error);
    return res.status(500).json({ error: 'Server error during student synchronization.' });
  }
}

/**
 * Login student using Admission Number (Adm No) only.
 */
export async function studentLogin(req, res) {
  try {
    const admissionId = String(req.body.admissionId || req.body.admNo || req.body['Adm No'] || '').trim();

    if (!admissionId) {
      return res.status(400).json({ error: 'Admission Number is required.' });
    }

    // Find the user by admissionId
    const user = await prisma.user.findUnique({
      where: { admissionId }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid Admission Number.' });
    }

    // Update login count and last login timestamp
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        loginCount: { increment: 1 },
        lastLoginAt: new Date()
      }
    });

    // Generate JWT token
    const token = generateToken({
      id: updatedUser.id,
      studentId: updatedUser.studentId,
      role: 'STUDENT'
    });

    return res.status(200).json({
      message: 'Student logged in successfully.',
      token,
      user: updatedUser
    });
  } catch (error) {
    console.error('Error during student login:', error);
    return res.status(500).json({ error: 'Server error during student login.' });
  }
}

/**
 * Get active election including all positions and nominated candidates.
 */
export async function getCurrentElection(req, res) {
  try {
    const election = await prisma.election.findFirst({
      where: { status: 'ACTIVE' },
      include: {
        positions: {
          orderBy: { displayOrder: 'asc' },
          include: {
            candidates: {
              where: { isActive: true },
              select: {
                id: true,
                studentId: true,
                fullName: true,
                className: true,
                section: true,
                image: true,
                slogan: true,
                manifesto: true,
                symbol: true,
              }
            }
          }
        }
      }
    });

    if (!election) {
      return res.status(200).json({ message: 'No active election found at this moment.' });
    }

    return res.status(200).json(election);
  } catch (error) {
    console.error('Error fetching active election:', error);
    return res.status(500).json({ error: 'Server error fetching election details.' });
  }
}

/**
 * Vote for a candidate in a specific position.
 */
export async function vote(req, res) {
  try {
    const { electionId, positionId, candidateId } = req.body;

    if (!electionId || !positionId || !candidateId) {
      return res.status(400).json({ error: 'electionId, positionId, and candidateId are required.' });
    }

    const voterId = req.student.id;

    // 1. Verify election exists and is active
    const election = await prisma.election.findUnique({
      where: { id: electionId }
    });

    if (!election) {
      return res.status(404).json({ error: 'Election not found.' });
    }

    if (election.status !== 'ACTIVE') {
      return res.status(400).json({ error: 'Voting is not currently active for this election.' });
    }

    // 2. Verify position belongs to this election
    const position = await prisma.position.findFirst({
      where: { id: positionId, electionId: electionId }
    });

    if (!position) {
      return res.status(404).json({ error: 'Position not found in this election.' });
    }

    // 3. Verify candidate belongs to this position and is active
    const candidate = await prisma.candidate.findFirst({
      where: { id: candidateId, positionId: positionId, electionId: electionId, isActive: true }
    });

    if (!candidate) {
      return res.status(404).json({ error: 'Active candidate not found for this position.' });
    }

    // 4. Check if the user has already voted for this position
    const existingVote = await prisma.vote.findUnique({
      where: {
        voterId_positionId: {
          voterId: voterId,
          positionId: positionId
        }
      }
    });

    if (existingVote) {
      return res.status(400).json({ error: 'You have already voted for this position.' });
    }

    // 5. Save the vote and update candidate's vote count within a transaction
    await prisma.$transaction([
      prisma.vote.create({
        data: {
          voterId: voterId,
          electionId: electionId,
          positionId: positionId,
          candidateId: candidateId
        }
      }),
      prisma.candidate.update({
        where: { id: candidateId },
        data: { voteCount: { increment: 1 } }
      })
    ]);

    return res.status(200).json({ message: 'Vote registered successfully.' });
  } catch (error) {
    console.error('Error registering vote:', error);
    return res.status(500).json({ error: 'Server error occurred during voting.' });
  }
}

/**
 * Get all votes cast by the logged-in student.
 */
export async function getMyVotes(req, res) {
  try {
    const votes = await prisma.vote.findMany({
      where: { voterId: req.student.id },
      include: {
        election: {
          select: { title: true }
        },
        position: {
          select: { name: true }
        },
        candidate: {
          select: { fullName: true, image: true, symbol: true }
        }
      }
    });

    return res.status(200).json(votes);
  } catch (error) {
    console.error('Error fetching student votes:', error);
    return res.status(500).json({ error: 'Server error retrieving your votes.' });
  }
}

/**
 * Get election winners for CLOSED or declared elections.
 */
export async function getElectionResults(req, res) {
  try {
    const election = await prisma.election.findFirst({
      where: {
        status: { in: ['CLOSED', 'RESULT_DECLARED'] }
      },
      include: {
        results: {
          include: {
            position: true,
            winner: {
              select: {
                id: true,
                fullName: true,
                className: true,
                section: true,
                image: true,
                voteCount: true,
                slogan: true
              }
            }
          }
        }
      }
    });

    if (!election) {
      return res.status(404).json({ message: 'No closed or declared election results found.' });
    }

    return res.status(200).json(election);
  } catch (error) {
    console.error('Error fetching election results:', error);
    return res.status(500).json({ error: 'Server error fetching election results.' });
  }
}
