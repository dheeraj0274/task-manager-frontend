import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext';


function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [username,setUsername]=useState('');
 
 
 useEffect(  () => {
   const user =  localStorage.getItem("username");
  setUsername(user || '')
  
}, [isLoggedIn]);
 
 
  const navigate = useNavigate();

  
  const handleLogout= ()=>{
  
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername(''); 
    navigate('/login');
   
  }
  return (
    <nav className="bg-gray-800 fixed  w-full flex  z-999 h-[60px] text-white p-4 justify-between items-center">
      <h1 className="text-[15px] md:text-2xl font-bold">Task Manager</h1>
      <div className='flex justify-center items-center gap-1'>
        <Link className="md:mx-2 mx-1 text-[14px] md:text-xl " to="/">Home</Link>
        <Link className="md:mx-2 mx-1  text-[14px] md:text-xl" to="/dashboard">Dashboard</Link>
        <div className='md:mx-2 mx-1  text-[14px] flex md:text-xl' >{isLoggedIn ? <button onClick={handleLogout}>
          Logout
        </button> : <Link className="md:mx-2" to="/login">Login</Link>} </div>
        {isLoggedIn ? '' :<Link className="md:mx-2 mx-1  text-[14px] md:text-xl" to="/register">Register</Link>}
       {isLoggedIn ? <div className='mx-2 rounded-[50%] bg-orange-400 w-[40px] h-[40px] flex justify-center items-center'>
        <Link className='text-2xl font-bold'>{username.slice(0,2)}</Link></div> : ''}
      </div> 
    </nav>
  );
}
export default Navbar;