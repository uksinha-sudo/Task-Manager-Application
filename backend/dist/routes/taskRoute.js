import { Router } from 'express';
import { taskModel } from '../db.js';
import { middleware } from '../auth/userAuth.js';
export const taskRouter = Router();
taskRouter.post("/create", middleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const dueDate = req.body.dueDate;
    await taskModel.create({
        title,
        description,
        status,
        dueDate,
        userId
    });
    res.send({
        message: "Task Added"
    });
});
taskRouter.get("/tasks", middleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    try {
        const response = await taskModel.find({
            userId
        });
        res.send({
            response
        });
    }
    catch (e) {
        console.log(e);
        res.send({
            message: "Internal server error"
        });
    }
});
taskRouter.get("/tasks/:id", middleware, async (req, res) => {
    const taskId = req.params.id;
    //@ts-ignore
    const userId = req.userId;
    try {
        const response = await taskModel.findOne({
            _id: taskId,
            userId
        });
        res.send({
            response
        });
    }
    catch (e) {
        console.log(e);
        res.send({
            message: "Internal server error"
        });
    }
});
taskRouter.put("/tasks/:id", middleware, async (req, res) => {
    const taskId = req.params.id;
    //@ts-ignore
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const dueDate = req.body.dueDate;
    try {
        const updatedTask = await taskModel.findOneAndUpdate({ _id: taskId, userId }, // 🔹 filter
        { title, description, status, dueDate }, // 🔹 update
        { new: true } // 🔹 return updated document
        );
        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }
        res.status(200).send(updatedTask);
    }
    catch (e) {
        console.log(e);
        res.send({
            message: "Internal server error"
        });
    }
});
taskRouter.delete("/tasks/:id", middleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const taskId = req.params.id;
    try {
        const deletedTask = await taskModel.findOneAndDelete({ _id: taskId, userId });
        if (!deletedTask) {
            res.status(404).json({
                message: "Task not found"
            });
            return;
        }
        res.send({
            message: "Task deleted"
        });
    }
    catch (e) {
        console.log(e);
    }
});
//# sourceMappingURL=taskRoute.js.map