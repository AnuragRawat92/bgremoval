import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("Database connection error:", err);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
