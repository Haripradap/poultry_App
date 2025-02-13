import { CiSettings } from "react-icons/ci";
import { FaBuilding, FaUsers, FaTachometerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-orange-500 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacific">Vinayaga Poultry</h3>
      </div>
      <div className="px-4">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `${isActive ? "bg-orange-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`
            
          }
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
            `${isActive ? "bg-orange-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`
            
          }
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/batches"
          className={({ isActive }) =>
            `${isActive ? "bg-orange-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`
          }
          end
        >
          <FaBuilding />
          <span>Batches</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          className=" flex items-center space-x-4 block py-2.5 px-4 rounded"
          
        >
          <CiSettings />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
