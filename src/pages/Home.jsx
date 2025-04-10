import React from "react";
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="flex items-center  justify-center h-[100vh] bg-zinc-400">
      <div className=" flex flex-col rounded-2xl shadow-2xl shadow-amber-700  bg-white w-[70%] h-[300px]">
        <h1 className="text-xl md:3xl text-center mt-4    font-bold">Welcome to Task Manager</h1>

        <div className=" flex items-start justify-center ml-7 mt-7 ">
            <p className="font-semibold font-sans">  Here You can manage your task more efficiently and this will help you to reach your goal</p>
        </div>
        <div className="flex w-full justify-center gap-10   items-center mt-7 sm:mt-9 ">
            <Link to="/login" className="w-[80px] flex items-center justify-center h-[35px] bg-red-400 text-white rounded-2xl p-2 cursor-pointer">Login</Link>
            <Link to="/register" className="w-[80px] flex items-center justify-center h-[35px] bg-green-600 text-white rounded-2xl p-2 cursor-pointer">Sign-Up</Link>
        </div>
      </div>
      </div>
    );
  }
  export default Home;