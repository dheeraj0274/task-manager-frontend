import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useFetcher } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Project from "./components/Project";
import { AlertTriangle } from "lucide-react";





function Dashboard({userData,setUserData , data ,isLoggedIn, setData}) {
  const [isClosed, setIsClosed] = useState(false);
 
  
  useEffect(()=>{
    const fetchProject = async()=>{
       try{
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/fetchprojects`)
         setData(res.data);
     
       
         
         
       }
       catch(err){
          console.error('error' , err)
       }
    }
    fetchProject()
  }, []);

  useEffect(()=>{
         console.log('data' , data)
  },[data])
 



  useEffect(()=>{
    const fetchUser = async()=>{
      try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/profile`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    
     
      
      setUserData(response.data);
    
      
      }
      catch(err){
        console.log('Error occured' , err)
      }
    }
    fetchUser()
    
  }  , [setUserData]);

  
  
  return (
    <div className=" pt-[60px] h-[100vh]   ">
      { isLoggedIn ? 
      <div >
      {/* sidebar */}
      <div className={`${isClosed ? 'w-[80px]' : 'w-[200px]' }   transition-all duration-300   bg-white  fixed`}>
        <div
          className="absolute top-9 right-[-.6rem] "
          onClick={() => setIsClosed(!isClosed)}
        >
          {isClosed ? (
            <FaArrowAltCircleRight size={25} color="purple" />
          ) : (
            <FaArrowAltCircleLeft size={25} color="purple" />
          )}
        </div>

        
          <div>
          <div className=' h-[200px]  flex flex-col justify-center items-center gap-2'>
            <div className={`${isClosed ? 'hidden' : 'visible flex flex-col items-center'}`}>
            <div className="rounded-[50%] h-20 w-20 bg-pink-300">
              <img />
            </div>
            <p className="font-bold text-xl ">{userData.username}</p>
            <div className="flex justify-center items-center">
              <p>Status:</p>
              <span className="p-2 flex justify-center items-center text-[20px] ">
                Online <TiTick color="green" size={30} />
              </span>
            </div>
            </div>
          </div>
        
        <div className=" flex flex-col mt-13  ">
          <div className={`${isClosed ? 'w-[80px]' : 'w-[200px]'}`}>
            <Link to='/createProject' className="pl-8  h-[50px] flex items-center gap-5 hover:bg-zinc-600 hover:text-white">
              <span>
                <IoIosAddCircleOutline size={30} />
              </span>
              {isClosed ? '' : 'New Task'}
            </Link>
            <Link className="pl-8  h-[50px] flex items-center gap-5 hover:bg-zinc-600 hover:text-white">
              <span>
                <IoTimeOutline size={30} />
              </span>
              {isClosed ? '' : 'Schedule'}
            </Link>
            <Link to='/mainprojects' className=" pl-9 h-[50px] flex items-center gap-5  hover:bg-zinc-600 hover:text-white">
              <GrProjects size={25} />
              <span>{isClosed ? '' : 'Projects'}</span>
            </Link>
            <Link className=" pl-8 h-[50px] flex items-center gap-5  hover:bg-zinc-600 hover:text-white">
              <IoSettingsOutline size={30} />
              <span>{isClosed ? '' : 'Setting'}</span>
            </Link>
          </div>
        </div>
        </div> 
        
        
      </div>

  
     
      <div
        className={`transition-all duration-300  overflow-auto ${isClosed ? 'ml-[80px]' : 'ml-[200px]'}`}
        
      >
        <Project data={data} />
      </div>

      

      
  
      </div> :
      
        <div className="h-[100vh]">
        <div className="flex items-center justify-center  bg-gradient-to-br h-full from-gray-100 to-gray-300">
         <div className="bg-white rounded-xl shadow-md p-8 text-center w-[90%]  max-w-md">
       
          
            <div className="flex flex-col items-center mb-4">
              <AlertTriangle className="text-yellow-500 w-10 h-10 mb-2" />
              <h1 className="text-2xl font-semibold text-zinc-800">
                Please Login to Continue
              </h1>
            </div>
            <Link
              to="/login"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Login
            </Link>
          
          </div>
            </div>
            </div>
      }
    </div>
  );
}

export default Dashboard;