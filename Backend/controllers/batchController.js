import Batch from "../models/batch.model.js";

export const addBatch = async (req, res) => {
    try {
        const {batch_name,description} = req.body;
        const newBatch = new Batch({
            
        })
    } catch (error) {
        return res.status(500).json({success: false, error: "Server error in AddBatch"})
    }
}