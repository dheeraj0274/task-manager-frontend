import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./pages/components/Navbar.jsx";
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import CreateProject from "./pages/components/CreateProject.jsx";
import './index.css';
import { AuthProvider } from "./authContext.jsx";
import MainProject from "./pages/components/MainProject.jsx";

import { ToastContainer } from 'react-toastify';




function App() {
   const [data , setData] = useState([])
  const [userData , setUserData]=useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("username"); // Initialize based on localStorage
  });


  
  return (
    <AuthProvider isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
    <Router>
      
       <Navbar/>
      
      <Routes>
      
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/dashboard"  element={<Dashboard  isLoggedIn={isLoggedIn}  data={data} setData={setData} userData={userData} setUserData={setUserData} />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createProject" element={<CreateProject  />} />
        <Route path="/mainprojects" element={<MainProject  data={data} setData={setData}  />} />
      </Routes>
      <ToastContainer  position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme="light"/>
      
    </Router>
    </AuthProvider>
  );
}
export default App;