import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from 'axios';

const MainProject = ({data , setData}) => {
  




  return (
   <div className='pt-[60px]'>
   <div className='m-7'>
    <p className='text-center  font-serif text-xl tracking-widest shadow-xl rounded-2xl shadow-[#24404b] ' style={{wordSpacing:'3px'}}>Your Projects</p>
   </div>
   <div className='w-fit flex ml-10 md:ml-20  mt-20'>
   <div className='grid grid-cols-2 md:flex flex-wrap gap-7'>
      {
         data.map((project , index)=>{
            return(  <div key={index} className='md:w-[200px] w-[140px] md:h-[250px] h-[180px] bg-gray-100 shadow-xl shadow-[#24404b] rounded-xl '>
               <div className=' md:pl-2 '>
              
               
                    <div  className='text-pink-700 flex items-center justify-center font-bold   mt-4 w-full text-[15px] md:text-[20px] '>{project.name}</div>
                 
                <div className='flex w-full md:h-[120px] pl-2 font-serif text-[13px] md:text-[16px] mt-2'>{project.description} </div>
             
                <div className='flex justify-around gap-5  md:pt-12 pt-6'>
                 
                    <div className='flex gap-[4px] '>
                    
                     {project.collaborators.map((name , idx)=>{
                        return(
                          <div className='w-[20px] h-[20px] rounded-[50%] text-white flex justify-center items-center bg-yellow-700  ' key={idx}>
                           <div className=''>
                           {name.charAt(0)}
                           </div>
                           </div>
                        )
                     })}
                     </div>
                    <div className='flex justify-center items-center'><button className='cursor-pointer'>
                    <FaExternalLinkAlt color='green'/>
                    </button> </div>
                    </div>
              </div>
           </div>
          )


          



         })
  
      
      }
       </div>
       </div>
       </div>
  )
}

export default MainProject;