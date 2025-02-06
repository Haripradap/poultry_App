import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './db/db.js';
import authRouter from './routes/auth.routes.js';
import batchRouter from './routes/batch.route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import employeeRouter from './routes/employee.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/batch', batchRouter);
app.use('/api/employee',employeeRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    await connectToDB();
});
