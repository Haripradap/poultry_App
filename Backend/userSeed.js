import connectToDB from "./db/db.js";
import User from "./models/user.model.js";
import bcrypt from "bcrypt";

export const userRegister = async () => {
   await connectToDB();
    try {
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,  // Fixed here
            role: "admin"
        });
        await newUser.save();
        console.log("Admin user created successfully.");
    } catch (error) {
        console.log(error);
    }
};


