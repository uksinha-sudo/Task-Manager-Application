import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/userRoute.js';
import { taskRouter } from './routes/taskRoute.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);
connectDB();
async function connectDB() {
    const mongoUrl = process.env.MONGO_URI;
    const port = process.env.PORT;
    try {
        if (!mongoUrl) {
            throw new Error("Couldn't Find database url");
        }
        await mongoose.connect(`${mongoUrl}`);
        app.listen(port, () => {
            console.log("Connected to DB, server is now listening to port " + port);
        });
    }
    catch (e) {
        console.log(e);
    }
}
//# sourceMappingURL=index.js.map