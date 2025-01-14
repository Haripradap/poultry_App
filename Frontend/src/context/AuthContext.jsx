import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const userContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
 const [loading,setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if(token){
          
          const res = await axios.get('http://localhost:5000/api/auth/verify',{
            headers: {
              "Authorization" : `Bearer ${token}`
            }
          })
          if(res.data.success) {
            setUser(res.data.user);
          }
        }
        else{
          setUser(null);
        }
      } catch (error) {
        if(error.res && !error.res.data.error){
          setUser(null);
        }
        
      } finally{
        setLoading(false);
      }
    }
    verifyUser();
  },[])

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <userContext.Provider value={{ user, login, logout ,loading}}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => useContext(userContext);

export default AuthContext;
