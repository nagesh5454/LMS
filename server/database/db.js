import mongoose from "mongoose";

let isConnectedBefore = false;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
        });
        isConnectedBefore = true;
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        if (!isConnectedBefore) {
            setTimeout(connectDB, 5000); // Retry if the initial connection failed
        }
    }
};

// Event listeners for reconnection attempts
mongoose.connection.on("disconnected", () => {
    console.error("MongoDB disconnected!");
    if (isConnectedBefore) {
        setTimeout(connectDB, 5000); // Retry after 5 seconds if previously connected
    }
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB reconnected!");
});

// Handling `ECONNRESET` errors specifically for more insightful retries
mongoose.connection.on('error', (error) => {
    if (error.code === 'ECONNRESET') {
        console.error('MongoDB connection was reset. Retrying...');
        if (isConnectedBefore) {
            setTimeout(connectDB, 5000); // Retry after 5 seconds
        }
    } else {
        console.error('MongoDB connection error:', error);
    }
});

export default connectDB;
