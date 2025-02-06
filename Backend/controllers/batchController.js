import Batch from "../models/batch.model.js";
import multer from "multer";
import path from "path";

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/bills/"); // Folder to store uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // unique filename
  },
});

// File filter for bill uploads
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|jpg|jpeg|png/;
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, JPG, and PNG files are allowed!"));
  }
};

// Multer middleware
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter,
}).single("bill");

// Add Batch Controller
export const addBatch = async (req, res) => {
  try {
    const { batch_name, batch_number, start_date, initial_stock, initial_feed } = req.body;
    
    // Check if batch number already exists
    const existingBatch = await Batch.findOne({ batch_number });
    if (existingBatch) {
      return res.status(400).json({ success: false, error: "Batch number already exists" });
    }

    // Save file path if uploaded
    const billPath = req.file ? req.file.path : null;

    // Create a new batch
    const newBatch = new Batch({
      batch_name,
      batch_number,
      start_date,
      initial_stock,
      initial_feed,
      bill: billPath, // Save file path in DB
    });

    await newBatch.save();

    return res.status(201).json({ success: true, batch: newBatch });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error in AddBatch" });
  }
};


export const getBatch = async (req, res) => {
  try {
    const batches = await Batch.find();
    return res.status(200).json({ success: true, batches });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error in getBatch" });
  }
};


// Delete Batch Controller
export const deleteBatch = async (req, res) => {
  try {
    const batchId = req.params.id;
    // Find and delete the batch from the database
    const batch = await Batch.findByIdAndDelete(batchId);
    
    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }
    
    res.status(200).json({ message: "Batch deleted successfully" });
  } catch (error) {
    console.error("Error deleting batch:", error); // Log error for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
};
