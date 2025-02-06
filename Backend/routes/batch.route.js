import express from 'express';
import verifyUser from '../middleware/authMiddleware.js';
import { addBatch, deleteBatch, getBatch, upload } from '../controllers/batchController.js';

const router = express.Router();

// Attach 'upload' middleware before 'addBatch'
router.post('/add', verifyUser, upload, addBatch);
router.get('/', verifyUser, getBatch);
router.delete('/:id', verifyUser, deleteBatch);


export default router;
