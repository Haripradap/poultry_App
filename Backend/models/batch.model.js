import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  batch_name: {
    type: String,
    required: true,
  },
  batch_number: {
    type: Number,
    required: true,
    unique: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  initial_stock: {
    type: Number,
    required: true,
  },
  initial_feed: {
    type: Number,
    required: true,
  },
  bill: {
  type: String,   // ✅ Store file path or URL as a string.
  required: true,
},
}, { timestamps: true });

const Batch = mongoose.model("Batch", batchSchema);

export default Batch;
