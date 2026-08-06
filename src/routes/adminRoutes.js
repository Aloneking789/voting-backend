import express from 'express';
import {
  login,
  register,
  createElection,
  getElections,
  updateElection,
  deleteElection,
  createPosition,
  getPositions,
  updatePosition,
  deletePosition,
  nominateCandidate,
  getCandidates,
  updateCandidate,
  deleteCandidate,
  declareResults,
  getDashboardStats
} from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/auth.js';
import { upload } from '../utils/upload.js';

const router = express.Router();

// Admin Authentication Routes
router.post('/auth/login', login);
// Allows initial admin registration, then locks down to super admins only
router.post('/auth/register', authenticateAdmin, register);
// Optional route for initial bootstrapper without token if database is empty
router.post('/auth/bootstrap', register);

// Election Management Routes
router.get('/elections', authenticateAdmin, getElections);
router.post('/elections', authenticateAdmin, createElection);
router.put('/elections/:id', authenticateAdmin, updateElection);
router.delete('/elections/:id', authenticateAdmin, deleteElection);

// Position Management Routes
router.get('/elections/:electionId/positions', authenticateAdmin, getPositions);
router.post('/positions', authenticateAdmin, createPosition);
router.put('/positions/:id', authenticateAdmin, updatePosition);
router.delete('/positions/:id', authenticateAdmin, deletePosition);

// Candidate Nomination Routes
router.get('/positions/:positionId/candidates', authenticateAdmin, getCandidates);
router.post('/candidates', authenticateAdmin, upload.single('image'), nominateCandidate);
router.put('/candidates/:id', authenticateAdmin, upload.single('image'), updateCandidate);
router.delete('/candidates/:id', authenticateAdmin, deleteCandidate);

// Election Results and Dashboard Stats
router.post('/elections/:electionId/declare-results', authenticateAdmin, declareResults);
router.get('/elections/:electionId/stats', authenticateAdmin, getDashboardStats);

export default router;
