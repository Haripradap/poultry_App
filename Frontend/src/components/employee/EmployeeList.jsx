import { Link } from "react-router-dom"

const EmployeeList = () => {
  return (
    <div className=" p-6">
        <div className=" text-center">
        <h3 className=" text-2xl font-bold">Manage Farmers</h3>
        </div>
        <div className=" flex justify-between items-center">
        <input
        type="text"
        placeholder="Search by Farmer name ..."
        className=" px-4 py-0.5 border"
         />
         <Link to="/admin-dashboard/add-employee" className=" px-4 py-1 bg-orange-500 rounded text-white">Add New Farmer</Link>
        </div>
    </div>
  )
}

export default EmployeeList