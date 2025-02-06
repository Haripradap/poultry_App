import express from 'express';
import multer from 'multer';
import verifyUser from '../middleware/authMiddleware.js';
import { addEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Use upload.single for image uploads
router.post('/add', verifyUser, upload.single('image'), addEmployee);
router.get('/',verifyUser,getEmployees)

export default router;
