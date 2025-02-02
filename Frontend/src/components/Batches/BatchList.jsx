import { Link } from "react-router-dom"


const BatchList = () => {
  return (
    <div className=" p-5">
      <div className=" text-center">
        <h3 className=" text-2xl font-bold">Manage Batches</h3>
      </div>
      <div className=" flex justify-between items-center">
        <input type="text" placeholder="Search...." className=" px-4 py-0.5 border" />
        <Link to="/admin-dashboard/add-new-batch" className=" px-4 py-1 bg-orange-500 rounded text-white">Add New Batch</Link>
      </div>
    </div>
  )
}

export default BatchList