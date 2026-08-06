import express from 'express';
import cors from 'cors';
import path from 'path';
import studentRoutes from './routes/studentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Enable CORS for frontend clients
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Serve static candidate images from the local uploads folder
app.use('/uploads', express.static('public/uploads'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Voting system backend is healthy and active.' });
});

// Register routers
app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Voting server running on port ${PORT}`);
});