import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import RoleBaedRoute from './utils/RoleBaedRoute';
import AdminSummary from './components/dashboard/AdminSummary';
import BatchList from './components/Batches/BatchList';
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to = "/admin-dashboard"/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/admin-dashboard' element={
            <PrivateRoutes>
            <RoleBaedRoute requiredRole={['admin']}>
               <AdminDashboard />
            </RoleBaedRoute>
            </PrivateRoutes>
          } >
            <Route index element={<AdminSummary />} ></Route>
            <Route path='/admin-dashboard/batches' element={<BatchList />} ></Route>
          </Route>
          <Route path='/employee-dashboard' element={< EmployeeDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
