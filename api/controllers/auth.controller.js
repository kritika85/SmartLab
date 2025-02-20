import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, "User already exists"));
        }

        
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Signup Error:", error);  
        next(errorHandler(500, "Internal Server Error"));
    }
};
