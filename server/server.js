import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';

const PORT = process.env.PORT || 4000;
const app = express();

const startServer = async () => {
    try {
        await connectDB();  // Ensures DB is connected before starting server
        console.log("Connected to MongoDB");

        app.use(express.json());
        app.use(cors());

        app.get('/', (req, res) => {
            res.send("API working");
        });

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1); // Exit process on failure
    }
};

startServer();
