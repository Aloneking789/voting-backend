import express from 'express';
import {
  authSync,
  getCurrentElection,
  vote,
  getMyVotes,
  getElectionResults
} from '../controllers/studentController.js';
import { authenticateStudent } from '../middleware/auth.js';

const router = express.Router();

// Synchronize student data from external login system
router.post('/auth/sync', authSync);

// Protected student routes
router.get('/election/current', authenticateStudent, getCurrentElection);
router.post('/vote', authenticateStudent, vote);
router.get('/votes/my', authenticateStudent, getMyVotes);
router.get('/election/results', authenticateStudent, getElectionResults);

export default router;
