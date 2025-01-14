import axios from "axios";
import { useState } from "react"
import { useAuth } from "../context/authContext";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const {login} = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login",{
                email,password
            });
            if(res.data.success) {
                login(res.data.user)
                localStorage.setItem("token", res.data.token)
                if(res.data.user.role === "admin") {
                        navigate('/admin-dashboard');
                } else{
                        navigate('/employee-dashboard');
                }
            }
        } catch (error) {
            if(error.res && !error.res.data.success){
                    setError(error.res.data.error);
            }
            else{
                console.log("Server error");
                
            }
        }
    };

  return (
    <div className=" flex flex-col items-center h-screen justify-center bg-gradient-to-b from-orange-400 from-50% to-gray-100 to-50% space-y-6">
        <h2 className=" font-pacific text-3xl text-white">Vinayaga Farm</h2>
        <div className=" border shadow p-6 w-80 bg-white">
            <h2 className=" text-2xl font-bold mb-4">Login</h2>
            {error && <p className=" text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
            <div className=" mb-4">
                <label htmlFor="email" className=" block text-gray-700">Email</label>
                <input type="email" placeholder="Enter Email.." className=" w-full px-3 py-2 border" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className=" mb-4">
                <label htmlFor="Password" className=" block text-gray-700">Password</label>
                <input type="password" placeholder="*******" className=" w-full px-3 py-2 border"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className=" mb-4 flex items-center justify-between">
                <label className=" inline-flex items-center">
                    <input type="checkbox" className=" form-checkbox"/>
                    <span className=" ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" className=" text-orange-400">
                    Forgot password?
                </a>
            </div>
           <div className=" mb-4">
           <button type="submit" className=" w-full bg-orange-400 text-white py-2">Login</button>
           </div>
        </form>
        </div>
    </div>
  )
}

export default Login