import axios from "axios";

// eslint-disable-next-line react/prop-types
const BatchButton = ({ batchId, onBatchDeleted }) => {
    const handleDelete = async () => {
        try {
          const response = await axios.delete(`http://localhost:5000/api/batch/${batchId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
      
          if (response.data.success) {
            onBatchDeleted(batchId); // Notify the parent component
            alert("Batch deleted successfully");
          } else {
            alert("Error deleting batch: " + response.data.message);
          }
        } catch (error) {
          alert("Error deleting batch: " + error.message);
        }
      };
      

  return (
    <div className="flex space-x-2">
      <button
        onClick={handleDelete}
        className="px-2 py-1 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default BatchButton;
