import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();
 connectDB();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
            res.send("API working");
        });

app.use('/api/user',userRouter)

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    