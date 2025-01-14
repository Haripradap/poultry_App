import { useAuth } from "../../context/authContext"


const Navbar = () => {
    const {user} = useAuth()
  return (
    <div className=" flex items-center text-white justify-between h-12 bg-orange-500 px-5">
        <p >Welcome {user.name}</p>
        <button className=" px-4 py-1 bg-orange-600 hover:bg-orange-700 rounded">Logout</button>
    </div>
  )
}

export default Navbar