import { Router } from 'express';
import { taskModel, userModel } from '../db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { middleware } from '../auth/userAuth.js';
dotenv.config();
export const userRouter = Router();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

const JWT_SECRET = process.env.JWT_SECRET;


userRouter.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {

        const existingUser = await userModel.findOne({
            email
        });
        if (existingUser) {
            res.status(403).send({
                message: "Email already Linked with Another account"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            username,
            email,
            password: hashedPassword
        });
        res.send({
            message: "Account created"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Failed to create account, Internal Server error"
        })
    }
});

userRouter.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {

        const existingUser = await userModel.findOne({
            email
        });
        if (!existingUser || !existingUser.password) {
            res.status(403).send({
                message: "User doesn't exist"
            })
            return;
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            res.status(401).send({
                message: "Invalid Credentials"
            })
        } else {
            const token = jwt.sign({
                id: existingUser._id.toString()
            }, JWT_SECRET);

            res.send({
                message: "User logged in",
                token
            })
        }
    } catch (e) {
        console.log(e);
        res.send({
            message: "Internal server error, Failed to login"
        })
    }
});


