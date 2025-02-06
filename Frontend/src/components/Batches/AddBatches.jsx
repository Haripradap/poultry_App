import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBatches = () => {
  const navigate = useNavigate();
  const [batch, setBatch] = useState({
    batch_name: "",
    batch_number: "",
    start_date: "",
    initial_stock: "",
    initial_feed: "",
  });
  const [billFile, setBillFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatch({ ...batch, [name]: value });
  };

  const handleFileChange = (e) => {
    setBillFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Please log in first.");
      return;
    }

    const formData = new FormData();
    Object.keys(batch).forEach((key) => {
      formData.append(key, batch[key]);
    });
    if (billFile) {
      formData.append("bill", billFile);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/batch/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        navigate("/admin-dashboard/batches");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add New Batches</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="batch_name" className="text-sm font-medium text-gray-700">Batch Name</label>
          <input type="text" name="batch_name" onChange={handleChange} placeholder="Enter batch name" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div>
          <label htmlFor="batch_number" className="text-sm font-medium text-gray-700">Batch Number</label>
          <input type="number" name="batch_number" onChange={handleChange} placeholder="Enter batch number" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="mt-3">
          <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Start Date</label>
          <input type="date" name="start_date" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="mt-3">
          <label htmlFor="initial_stock" className="block text-sm font-medium text-gray-700">Initial Stock</label>
          <input type="number" name="initial_stock" onChange={handleChange} placeholder="Enter initial stock" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="mt-3">
          <label htmlFor="initial_feed" className="block text-sm font-medium text-gray-700">Initial Feed</label>
          <input type="number" name="initial_feed" onChange={handleChange} placeholder="Enter initial feed" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="mt-3">
        <label htmlFor="bill" className="block text-sm font-medium text-gray-700 mt-3">
          Upload Bill (PDF/Image)
        </label>
        <input type="file" name="bill" accept=".pdf, .jpg, .jpeg, .png" onChange={handleFileChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <button type="submit" className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Add Batch
        </button>
      </form>
    </div>
  );
};

export default AddBatches;
