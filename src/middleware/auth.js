import { verifyToken } from '../utils/token.js';
import { prisma } from '../config/prisma.js';

/**
 * Authentication middleware for students (voters)
 */
export async function authenticateStudent(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (decoded.role !== 'STUDENT') {
      return res.status(403).json({ error: 'Access denied. Invalid role.' });
    }

    const student = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!student) {
      return res.status(401).json({ error: 'Student user not found in local system.' });
    }

    req.student = student;
    next();
  } catch (error) {
    console.error('Student authentication error:', error);
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

/**
 * Authentication middleware for admins
 */
export async function authenticateAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (decoded.role !== 'ADMIN' && decoded.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Access denied. Invalid admin role.' });
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id }
    });

    if (!admin || !admin.isActive) {
      return res.status(401).json({ error: 'Admin not found or inactive.' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error('Admin authentication error:', error);
    return res.status(401).json({ error: 'Invalid or expired admin token.' });
  }
}

/**
 * Middleware to restrict action to Super Admin only
 */
export function requireSuperAdmin(req, res, next) {
  if (req.admin && req.admin.role === 'SUPER_ADMIN') {
    next();
  } else {
    return res.status(403).json({ error: 'Access denied. Super Admin role required.' });
  }
}
