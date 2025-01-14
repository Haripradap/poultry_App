import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './db/db.js';
import authRouter from './routes/auth.routes.js';
import batchRouter from './routes/batch.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/api/batch',batchRouter)

app.listen(PORT, async() => {
    console.log(`server listening on ${PORT}`);
    await connectToDB();
    
})
