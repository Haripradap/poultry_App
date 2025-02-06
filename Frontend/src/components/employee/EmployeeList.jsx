import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Fetch Employee Data
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employee", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.success) {
          let sno = 1;
          const data = response.data.data.map((employee) => ({
            _id: employee._id,
            sno: sno++,
            name: employee.name,
            email: employee.email,
            phone: employee.phone,
            role: employee.role,
          }));
          setEmployees(data);
        } else {
          alert("Error: Could not fetch employee data");
        }
      } catch (error) {
        alert("Error fetching employees: " + error.message);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
return(
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