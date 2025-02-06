import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BatchButton from "../../utils/BatchButton";
import DataTable from 'react-data-table-component';

const BatchList = () => {
  const [batches, setBatches] = useState([]);

  // Define the handleBatchDeleted function first
  const handleBatchDeleted = (deletedBatchId) => {
    setBatches(batches.filter(batch => batch._id !== deletedBatchId));
  };

  // Define columns after handleBatchDeleted is available
  const columns = [
    {
      name: "S no",
      selector: (row) => row.sno,
    },
    {
      name: "Batch Name",
      selector: (row) => row.batch_name,
    },
    {
      name: "Batch Number",
      selector: (row) => row.batch_number,
    },
    {
      name: "Start Date",
      selector: (row) => row.start_date,
    },
    {
      name: "Initial Stock",
      selector: (row) => row.initial_stock,
    },
    {
      name: "Initial Feed",
      selector: (row) => row.initial_feed,
    },
    {
      name: "Bill",
      selector: (row) => row.bill ? <a href={`http://localhost:5000/${row.bill}`} target="_blank" rel="noopener noreferrer">View Bill</a> : 'No Bill',
    },
    {
      name: "Action",
      cell: (row) => <BatchButton batchId={row._id} onBatchDeleted={handleBatchDeleted} />, // Now it's passed correctly
    },
  ];

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/batch', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.data.success) {
          let sno = 1;
          const data = response.data.batches.map((batch) => ({
            _id: batch._id,
            sno: sno++,
            batch_name: batch.batch_name,
            batch_number: batch.batch_number,
            start_date: batch.start_date,
            initial_stock: batch.initial_stock,
            initial_feed: batch.initial_feed,
            bill: batch.bill,
            action: <BatchButton batchId={batch._id} onBatchDeleted={handleBatchDeleted} />,
          }));
          setBatches(data);
        } else {
          alert("Error: Could not fetch batches");
        }
      } catch (error) {
        alert("Error fetching batches: " + error.message);
      }
    };

    fetchBatches();
  }, []);

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Batches</h3>
      </div>
      <div className="flex justify-between items-center my-4">
        <input type="text" placeholder="Search..." className="px-4 py-0.5 border" />
        <Link to="/admin-dashboard/add-new-batch" className="px-4 py-1 bg-orange-500 rounded text-white">
          Add New Batch
        </Link>
      </div>
      <div>
        <DataTable
          columns={columns} // Use the updated columns array
          data={batches}
          pagination
        />
      </div>
    </div>
  );
};

export default BatchList;
