import axios from "axios";
import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../authContext";


function Login({setUserData}) {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);
   
    const handleSubmit = async(e)=>{
      e.preventDefault();
      
  
      try {
        const res= await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/login` , {email , password})             
        localStorage.setItem('token' , res.data.token);
        localStorage.setItem('username',res.data.user.username);
        setIsLoggedIn(true)
        setEmail('')
        setPassword('')
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }

    }
   
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg md:w-96 w-[300px] ">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
  }
  export default Login;