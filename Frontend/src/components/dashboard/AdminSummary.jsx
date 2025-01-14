import { MdOutlineDynamicFeed } from "react-icons/md"; 
import { GiFoodTruck } from "react-icons/gi"; 
import { GiChicken } from "react-icons/gi"; 
import { FaFileAlt } from "react-icons/fa"; 
import { FaBuilding } from "react-icons/fa"; 
import { FaUserSecret } from "react-icons/fa"; 
import { FaUsers } from "react-icons/fa"; 
import SummaryCard from "./SummaryCard"


const AdminSummary = () => {
  return (
    <div className=" p-6">
        <h3 className=" text-2xl font-bold">DashBoard Overview</h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <SummaryCard icon={<FaUserSecret />} text="Total Users" number={13} color=" bg-orange-600" />
            <SummaryCard icon={<FaUsers />} text="Total customers" number={23} color=" bg-yellow-600"/>
            <SummaryCard icon={<FaBuilding />} text="Total poultry" number={2} color=" bg-red-600"/>
        </div>

        <div className=" mt-12">
            <h4 className=" text-center text-2xl font-bold">Batch Details</h4>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <SummaryCard icon={<FaFileAlt />} text= "Number Of Batches" number= {6} color="bg-orange-600"  />
                <SummaryCard icon={<GiChicken />} text= "Chick Count" number= {2} color=" bg-yellow-600"  />
                <SummaryCard icon={<GiFoodTruck />} text= "Feed Count" number= {2} color=" bg-red-600"  />
                <SummaryCard icon={<MdOutlineDynamicFeed />} text= "Available Feed" number= {2} color=" bg-red-600"  />
            </div>
        </div>
    </div>
  )
}

export default AdminSummary