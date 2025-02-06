import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    required: true,
  },
  image: {
    type: String, // File path or URL for the uploaded image
    required: false,
  },
}, { timestamps: true });

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
