import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
});

const taskSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: String,
    status: Boolean,
    dueDate: Date,
    createdAt: Date,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

export const userModel = mongoose.model("User", userSchema);
export const taskModel = mongoose.model("Task", taskSchema);