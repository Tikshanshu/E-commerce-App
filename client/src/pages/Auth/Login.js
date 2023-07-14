import React, { useState } from "react";
import Layout from "./../../components/layouts/Layout";
import "../../styles/AuthStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
   
    const navigate=useNavigate();
    
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
        try {
          const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
          console.log(res);
          if(res.data.success)
          {
              toast.success(res.data.message);  
              navigate("/"); 
          }
          else{
              
              toast.error(res.data.message);
              
          }
        } catch (error) {
          console.log(error)
          toast.error("something went wrong");
        }
    };
  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container " style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">Login FORM</h4>
       
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default Login;
