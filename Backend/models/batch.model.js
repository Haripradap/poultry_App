import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batch_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
},{ timestamps: true})

const Batch = mongoose.model("Batch",batchSchema);

export default Batch;