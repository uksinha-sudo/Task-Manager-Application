import {} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env");
}
const JWT_SECRET = process.env.JWT_SECRET;
export function middleware(req, res, next) {
    const authHeader = req.headers["authorization"];
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not logged in"
        });
    }
}
// TODO
//override the types of the express request object
//# sourceMappingURL=userAuth.js.map