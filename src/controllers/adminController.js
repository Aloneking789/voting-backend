import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma.js';
import { generateToken } from '../utils/token.js';
import { uploadToCloudinary } from '../utils/upload.js';

/**
 * Admin Login
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const admin = await prisma.admin.findUnique({
      where: { email }
    });

    if (!admin || !admin.isActive) {
      return res.status(401).json({ error: 'Invalid credentials or account deactivated.' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = generateToken({
      id: admin.id,
      email: admin.email,
      role: admin.role
    });

    return res.status(200).json({
      message: 'Logged in successfully.',
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({ error: 'Server error during admin login.' });
  }
}

/**
 * Register a new admin (Super admin only, or auto-bootstrap if no admin exists)
 */
export async function register(req, res) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    const adminCount = await prisma.admin.count();

    // If there is already at least one admin, verify current request is from a super admin
    if (adminCount > 0) {
      if (!req.admin || req.admin.role !== 'SUPER_ADMIN') {
        return res.status(403).json({ error: 'Access denied. Only Super Admins can register new admins.' });
      }
    }

    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    });

    if (existingAdmin) {
      return res.status(400).json({ error: 'An admin with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Default first admin to SUPER_ADMIN, otherwise use provided role or default to ADMIN
    const finalRole = adminCount === 0 ? 'SUPER_ADMIN' : (role === 'SUPER_ADMIN' ? 'SUPER_ADMIN' : 'ADMIN');

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: finalRole,
        isActive: true
      }
    });

    return res.status(201).json({
      message: 'Admin registered successfully.',
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin registration error:', error);
    return res.status(500).json({ error: 'Server error during admin registration.' });
  }
}

/**
 * CRUD Elections
 */
export async function createElection(req, res) {
  try {
    const { title, description, startAt, endAt, isCurrent } = req.body;

    if (!title || !startAt || !endAt) {
      return res.status(400).json({ error: 'Title, start date (startAt), and end date (endAt) are required.' });
    }

    const startDate = new Date(startAt);
    const endDate = new Date(endAt);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({ error: 'Invalid date formats.' });
    }

    // If marked as current, untag all other elections first
    if (isCurrent) {
      await prisma.election.updateMany({
        data: { isCurrent: false }
      });
    }

    const election = await prisma.election.create({
      data: {
        title,
        description,
        startAt: startDate,
        endAt: endDate,
        isCurrent: !!isCurrent,
        status: 'DRAFT'
      }
    });

    return res.status(201).json(election);
  } catch (error) {
    console.error('Error creating election:', error);
    return res.status(500).json({ error: 'Server error creating election.' });
  }
}

export async function getElections(req, res) {
  try {
    const elections = await prisma.election.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(elections);
  } catch (error) {
    console.error('Error fetching elections:', error);
    return res.status(500).json({ error: 'Server error fetching elections.' });
  }
}

export async function updateElection(req, res) {
  try {
    const { id } = req.params;
    const { title, description, startAt, endAt, isCurrent, status } = req.body;

    const existingElection = await prisma.election.findUnique({
      where: { id }
    });

    if (!existingElection) {
      return res.status(404).json({ error: 'Election not found.' });
    }

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (startAt !== undefined) updateData.startAt = new Date(startAt);
    if (endAt !== undefined) updateData.endAt = new Date(endAt);
    if (status !== undefined) updateData.status = status;

    if (isCurrent) {
      await prisma.election.updateMany({
        data: { isCurrent: false }
      });
      updateData.isCurrent = true;
    } else if (isCurrent === false) {
      updateData.isCurrent = false;
    }

    const updatedElection = await prisma.election.update({
      where: { id },
      data: updateData
    });

    // If status transitions to CLOSED or RESULT_DECLARED, we can automatically seed/declare results
    if (status === 'CLOSED' || status === 'RESULT_DECLARED') {
      await autoCalculateWinners(id);
    }

    return res.status(200).json(updatedElection);
  } catch (error) {
    console.error('Error updating election:', error);
    return res.status(500).json({ error: 'Server error updating election.' });
  }
}

export async function deleteElection(req, res) {
  try {
    const { id } = req.params;
    await prisma.election.delete({
      where: { id }
    });
    return res.status(200).json({ message: 'Election deleted successfully.' });
  } catch (error) {
    console.error('Error deleting election:', error);
    return res.status(500).json({ error: 'Server error deleting election.' });
  }
}

/**
 * CRUD Positions
 */
export async function createPosition(req, res) {
  try {
    const { electionId, name, description, maxVotes, displayOrder } = req.body;

    if (!electionId || !name) {
      return res.status(400).json({ error: 'electionId and name are required.' });
    }

    const election = await prisma.election.findUnique({
      where: { id: electionId }
    });

    if (!election) {
      return res.status(404).json({ error: 'Election not found.' });
    }

    const position = await prisma.position.create({
      data: {
        electionId,
        name,
        description,
        maxVotes: maxVotes ? parseInt(maxVotes, 10) : 1,
        displayOrder: displayOrder ? parseInt(displayOrder, 10) : 0
      }
    });

    return res.status(201).json(position);
  } catch (error) {
    console.error('Error creating position:', error);
    return res.status(500).json({ error: 'Server error creating position.' });
  }
}

export async function getPositions(req, res) {
  try {
    const { electionId } = req.params;
    const positions = await prisma.position.findMany({
      where: { electionId },
      orderBy: { displayOrder: 'asc' }
    });
    return res.status(200).json(positions);
  } catch (error) {
    console.error('Error fetching positions:', error);
    return res.status(500).json({ error: 'Server error fetching positions.' });
  }
}

export async function updatePosition(req, res) {
  try {
    const { id } = req.params;
    const { name, description, maxVotes, displayOrder } = req.body;

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (maxVotes !== undefined) updateData.maxVotes = parseInt(maxVotes, 10);
    if (displayOrder !== undefined) updateData.displayOrder = parseInt(displayOrder, 10);

    const position = await prisma.position.update({
      where: { id },
      data: updateData
    });

    return res.status(200).json(position);
  } catch (error) {
    console.error('Error updating position:', error);
    return res.status(500).json({ error: 'Server error updating position.' });
  }
}

export async function deletePosition(req, res) {
  try {
    const { id } = req.params;
    await prisma.position.delete({
      where: { id }
    });
    return res.status(200).json({ message: 'Position deleted successfully.' });
  } catch (error) {
    console.error('Error deleting position:', error);
    return res.status(500).json({ error: 'Server error deleting position.' });
  }
}

/**
 * CRUD Candidates (Nomination with Image)
 */
export async function nominateCandidate(req, res) {
  try {
    const {
      electionId,
      positionId,
      studentId,
      admissionId,
      firstName,
      middleName,
      lastName,
      slogan,
      manifesto,
      symbol
    } = req.body;

    if (!electionId || !positionId || !studentId || !firstName) {
      return res.status(400).json({ error: 'electionId, positionId, studentId, and firstName are required.' });
    }

    // Verify election and position
    const position = await prisma.position.findFirst({
      where: { id: positionId, electionId: electionId }
    });

    if (!position) {
      return res.status(404).json({ error: 'Position not found in the selected election.' });
    }

    // Verify student is not already nominated for this position
    const existingCandidate = await prisma.candidate.findFirst({
      where: { electionId, positionId, studentId }
    });

    if (existingCandidate) {
      return res.status(400).json({ error: 'Student is already nominated for this position.' });
    }

    let imagePath = null;
    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file.buffer);
      imagePath = uploadResult.secure_url;
    }

    const fullName = `${firstName} ${middleName || ''} ${lastName || ''}`.replace(/\s+/g, ' ').trim();

    const candidate = await prisma.candidate.create({
      data: {
        electionId,
        positionId,
        studentId,
        admissionId: admissionId || null,
        firstName,
        middleName: middleName || null,
        lastName: lastName || null,
        fullName,
        image: imagePath,
        slogan: slogan || null,
        manifesto: manifesto || null,
        symbol: symbol || null,
        voteCount: 0,
        isActive: true
      }
    });

    return res.status(201).json(candidate);
  } catch (error) {
    console.error('Error nominating candidate:', error);
    return res.status(500).json({ error: 'Server error during candidate nomination.' });
  }
}

export async function getCandidates(req, res) {
  try {
    const { positionId } = req.params;
    const candidates = await prisma.candidate.findMany({
      where: { positionId },
      orderBy: { fullName: 'asc' }
    });
    return res.status(200).json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return res.status(500).json({ error: 'Server error fetching candidates.' });
  }
}

export async function updateCandidate(req, res) {
  try {
    const { id } = req.params;
    const {
      firstName,
      middleName,
      lastName,
      slogan,
      manifesto,
      symbol,
      isActive
    } = req.body;

    const existingCandidate = await prisma.candidate.findUnique({
      where: { id }
    });

    if (!existingCandidate) {
      return res.status(404).json({ error: 'Candidate not found.' });
    }

    const updateData = {};
    if (firstName !== undefined) updateData.firstName = firstName;
    if (middleName !== undefined) updateData.middleName = middleName;
    if (lastName !== undefined) updateData.lastName = lastName;
    
    if (firstName !== undefined || middleName !== undefined || lastName !== undefined) {
      const fn = firstName || existingCandidate.firstName;
      const mn = middleName !== undefined ? middleName : existingCandidate.middleName;
      const ln = lastName !== undefined ? lastName : existingCandidate.lastName;
      updateData.fullName = `${fn} ${mn || ''} ${ln || ''}`.replace(/\s+/g, ' ').trim();
    }

    if (slogan !== undefined) updateData.slogan = slogan;
    if (manifesto !== undefined) updateData.manifesto = manifesto;
    if (symbol !== undefined) updateData.symbol = symbol;
    if (isActive !== undefined) updateData.isActive = isActive === 'true' || isActive === true;

    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file.buffer);
      updateData.image = uploadResult.secure_url;
    }

    const updatedCandidate = await prisma.candidate.update({
      where: { id },
      data: updateData
    });

    return res.status(200).json(updatedCandidate);
  } catch (error) {
    console.error('Error updating candidate:', error);
    return res.status(500).json({ error: 'Server error updating candidate.' });
  }
}

export async function deleteCandidate(req, res) {
  try {
    const { id } = req.params;
    const candidate = await prisma.candidate.findUnique({
      where: { id }
    });

    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found.' });
    }

    await prisma.candidate.delete({
      where: { id }
    });

    return res.status(200).json({ message: 'Candidate deleted successfully.' });
  } catch (error) {
    console.error('Error deleting candidate:', error);
    return res.status(500).json({ error: 'Server error deleting candidate.' });
  }
}

/**
 * Declare Winners explicitly
 */
export async function declareResults(req, res) {
  try {
    const { electionId } = req.params;

    const election = await prisma.election.findUnique({
      where: { id: electionId }
    });

    if (!election) {
      return res.status(404).json({ error: 'Election not found.' });
    }

    // 1. Mark election status as RESULT_DECLARED
    await prisma.election.update({
      where: { id: electionId },
      data: { status: 'RESULT_DECLARED' }
    });

    // 2. Perform calculation
    const results = await autoCalculateWinners(electionId);

    return res.status(200).json({
      message: 'Results calculated and declared successfully.',
      results
    });
  } catch (error) {
    console.error('Error declaring election results:', error);
    return res.status(500).json({ error: 'Server error declaring election results.' });
  }
}

/**
 * Helper to auto calculate winners per position
 */
async function autoCalculateWinners(electionId) {
  const positions = await prisma.position.findMany({
    where: { electionId },
    include: {
      candidates: {
        where: { isActive: true },
        orderBy: { voteCount: 'desc' }
      }
    }
  });

  const createdResults = [];

  for (const position of positions) {
    const candidates = position.candidates;
    if (candidates.length === 0) continue;

    // Pick top candidate
    const winner = candidates[0];

    // Mark winner in Candidate table
    await prisma.candidate.update({
      where: { id: winner.id },
      data: { isWinner: true }
    });

    // Untag other candidates as winners
    const lossCandidateIds = candidates.slice(1).map(c => c.id);
    if (lossCandidateIds.length > 0) {
      await prisma.candidate.updateMany({
        where: { id: { in: lossCandidateIds } },
        data: { isWinner: false }
      });
    }

    // Upsert into ElectionResult table
    const result = await prisma.electionResult.upsert({
      where: { positionId: position.id },
      update: {
        winnerId: winner.id,
        totalVotes: winner.voteCount,
        declaredAt: new Date()
      },
      create: {
        electionId,
        positionId: position.id,
        winnerId: winner.id,
        totalVotes: winner.voteCount
      },
      include: {
        position: true,
        winner: {
          select: { fullName: true, voteCount: true }
        }
      }
    });

    createdResults.push(result);
  }

  return createdResults;
}

/**
 * Dashboard & Stats
 */
export async function getDashboardStats(req, res) {
  try {
    const { electionId } = req.params;

    const election = await prisma.election.findUnique({
      where: { id: electionId },
      include: {
        positions: {
          orderBy: { displayOrder: 'asc' },
          include: {
            candidates: {
              orderBy: { voteCount: 'desc' },
              select: {
                id: true,
                fullName: true,
                voteCount: true,
                isWinner: true,
                image: true
              }
            }
          }
        }
      }
    });

    if (!election) {
      return res.status(404).json({ error: 'Election not found.' });
    }

    const totalStudents = await prisma.user.count();
    const totalVotes = await prisma.vote.count({
      where: { electionId }
    });

    // Calculate turnout percentage
    const turnoutPercent = totalStudents > 0 ? ((totalVotes / totalStudents) * 100).toFixed(2) : 0;

    return res.status(200).json({
      electionTitle: election.title,
      electionStatus: election.status,
      totalRegisteredVoters: totalStudents,
      totalVotesCast: totalVotes,
      turnoutPercentage: parseFloat(turnoutPercent),
      positionsBreakdown: election.positions
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return res.status(500).json({ error: 'Server error retrieving dashboard statistics.' });
  }
}
