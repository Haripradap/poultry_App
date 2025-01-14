import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to = " /admin-dashboard"/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/employee-dashboard' element={< EmployeeDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
