
import './App.css';
import{Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Pagenotfound from "./pages/PagenotFound";
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routers/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routers/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="user" element={<Dashboard/>}/>
          <Route path="user/profile" element={<Profile/>}/>
          <Route path="user/orders" element={<Orders/>}/>
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
             <Route path="admin" element={<AdminDashboard/>}/> 
             <Route path="admin/create-category"element={<CreateCategory/>}/>
             <Route path="admin/create-product"element={<CreateProduct/>}/>
             <Route path="admin/users"element={<Users/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='*' element={<Pagenotfound/>}/>


      </Routes>
    </>
  );
}

export default App;
