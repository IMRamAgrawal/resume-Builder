import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const UserGenerateResume = () => {
  const { id } = useParams();
  return (
    <div className=' relative bg-gray-100 justify-center items-center text-center p-10 space-y-10 h-[calc(100vh-80px)]  '>
        <img 
        className='absolute top-0 left-0 w-[1600px] xl:w-[100vw] h-screen z-0'
        src="/Images/backgroundImg.png" 
        alt="background" />
        <div className='relative z-10 overflow-h-hidden'>
        <div className=' text-[#003d4d] text-2xl sm:text-5xl font-bold mx-auto pb-10'>
            Generate Your Advanced Resume
        </div>
        <div className='flex flex-col justify-center items-center p-2 lg:w-[470px] lg:h-[500px] space-y-5 shadow-2xl relative  rounded-2xl bg-white mx-auto '>
        <div className='h-[38px] absolute top-[5px] right-[5px]'>
                <img src="\Images\cross-symbol.png" alt="" 
                className='h-[38px]'/>
            </div>
            <div className='pt-5'>
                <img src="\Images\Candidateupdatecv.png" alt="" 
                className='mx-auto pb-1'/>
            </div>
            <h1 className=' text-gray-700 pb-3 lg:w-[380px]'>Fill the Details for Resume and Generate QR  Resume that will make easy to reach your dream company as soon as possible.</h1>
            <Link to={`/user/resume/details/${id}`}><button className='text-2xl lg:w-[180px] bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full mx-auto'>Go for it</button></Link>
            <Link to={"/skillsPosting"}><button className='font-semibold  rounded-full  py-2'>Skip for now</button></Link>
        </div>
        </div>
        
    </div>
  )
}

export default UserGenerateResume