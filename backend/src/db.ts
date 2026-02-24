import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    status: {type: Boolean, default: false},
    dueDate: Date,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
}, {timestamps: true});

export const userModel = mongoose.model("User", userSchema);
export const taskModel = mongoose.model("Task", taskSchema);