import express from 'express';
import verifyUser from '../middleware/authMiddleware.js';
import { addBatch } from '../controllers/batchController.js';

const router = express.Router();

router.post('/add', verifyUser,addBatch)

export default router