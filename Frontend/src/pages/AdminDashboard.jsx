import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"


const AdminDashboard = () => {
  const {user,loading} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return (
      <div>loading .....</div>
    )
  }
  if(!user){
    navigate('/login')
  }
  return (
    <div>AdminDashboard {user && user.name}</div>
  )
}

export default AdminDashboard