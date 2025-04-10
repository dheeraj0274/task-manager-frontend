import React from 'react'
import { useState , useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import bg from '../../assets/image.png';
import {Line as ProgressLine} from 'rc-progress';
import { BarChart } from '@mui/x-charts/BarChart';
import { GrStatusCritical } from "react-icons/gr";




const Project = ({data}) => {

    const [chartWidth, setChartWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth < 680 ? 230 : 500);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);
       

  return (
    <div className='flex flex-col w-full bg-zinc-300 h-full '>
     
        <div className='flex w-full justify-center items-center h-fit pt-8 '>
        <div className=' relative w-[130px] md:w-[200px] '>            <input className='w-[150px] h-[35px] bg-gray-200 rounded-2xl indent-3 outline-none' placeholder='Search'/>
            <IoMdSearch className='absolute top-[5px] right-[-10px] md:right-2 cursor-pointer' size={25} color='grey'/>
        </div>
        </div>

        
        <div className='bg-[#F5F5F0] w-[80%] h-auto m-auto mt-15 rounded-2xl shadow-2xl flex justify-between items-center flex-col md:flex-row   shadow-amber-900 '>
            <div  className='p-8'>
                <h1 className='font-bold text-[15px] md:text-xl font-serif'>Today Task</h1>
                <p className='text-[15px] pt-2 font-serif'>Check your daily task and schedules</p>
                <div className='mt-5 ml-2'><Link className='rounded-2xl justify-center  p-2 flex  bg-purple-400 text-white hover:bg-purple-500'>Today's Scedule</Link></div>
                
            </div>
            <div className=''><img src={bg} width='200px' /></div>
        </div>
        <div className='flex justify-center flex-col items-center mt-19  '>
            <div className='w-full md:pl-[10rem] md:p-5 p-10'>
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
               Recent Projects
                </h1>
             </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8' >
                {data.map((projects) => {
                    return(
                <div className='bg-[#F5F5F0]  h-[200px] w-[250px]  rounded-2xl ' key={projects.id}>
                    <div className='flex flex-col'>
                    <p className='text-[20px]  ml-3'>{projects.name}</p>
                    <div className='ml-5 w-[85%]'>
                    <p className='text-2xl font-serif flex text-blue-500 mt-2'>{projects.title}</p>
                    <p className='mt-2 h-[100px]'>{projects.description}</p>
                    <div className=''><ProgressLine percent={projects.progress} strokeWidth={3} strokeColor='#90ee90'/></div>
                    <div className='flex justify-between w-full mt-4'><p>Progress</p>
                    <p >{projects.progress}%</p>
                    </div>
                    </div>
                    </div>
                </div>
                )})}
            </div>
        </div>
       
        <div className='mt-20 pl-10 flex justify-center'>
            <div className='w-fit max-w-lg'>
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={chartWidth}
      height={300}
      
    />

    <div id='work' className='mt-7 h-[300px]'>
        <div><p className='text-xl md:text-2xl border-l-4 text-gray-900 border-orange-500 pl-3'>Team Status</p></div>
        <div className='bg-[#f5f5f0] w-fit flex flex-col h-[150px] rounded-xl mt-3' >
            <div className='p-3 gap-2 flex flex-col relative'>
             <p className='font-extralight text-[16px] text-gray-500'>Select Team</p>
             <select
        className="p-2 border rounded-md w-full flex text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        
      >
        <option value="">-- Choose Team --</option>
        <option value="teamA">Team A</option>
        <option value="teamB">Team B</option>
        <option value="teamC">Team C</option>
      </select>
            
            </div>
            <div className='flex justify-center items-center w-full mt-5 gap-2'> <span><GrStatusCritical color='red'/></span>No Status found</div>
        </div>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Project