
import Employee from "../models/employee.model.js";

export const addEmployee = async (req, res) => {
    try {
        const { name, email, phone, role, password } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!name || !email || !phone || !role || !password) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(409).json({ success: false, error: "Employee with this email already exists" });
        }

        const newEmployee = new Employee({ name, email, phone, role, password, image });
        await newEmployee.save();

        return res.status(201).json({ success: true, message: "Employee added successfully" });
    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ success: false, error: "Server error, please try again later" });
    }
};


export const getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();  // Fetch all employee records
      res.status(200).json({ success: true, data: employees });
    } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ success: false, error: "Failed to fetch employees" });
    }
  };
  