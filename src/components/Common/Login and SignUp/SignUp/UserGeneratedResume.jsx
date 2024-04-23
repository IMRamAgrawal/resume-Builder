import React from 'react'

const UserGeneratedResume = () => {
  return (
    <div className=' relative bg-gray-100 justify-center items-center text-center p-10 space-y-10 h-full '>
        <img 
        className='absolute top-0 left-0 w-[1600px] xl:w-[100vw] h-full z-0'
        src="\Images/backgroundImg.png" 
        alt="background" />
        <div className='relative z-10'>
      <div className=' flex flex-col lg:w-[450px] space-y-5 shadow-2xl p-10 rounded-2xl bg-white mx-auto '>
      <div className=' text-[#003d4d] text-2xl sm:text-3xl font-bold mx-auto pb-2'>
            Congratulations
        </div>
        <h1 className=' text-gray-700 pb-2 '>Your QR Based Resume Is Generated Apply for Jobs And Get Hired</h1>
            
            <div>
                <img src="\Images\verified2.png" alt="" 
                className='mx-auto pb-5'/>
            </div>
            <button className='text-xl sm:text-2xl lg:w-[300px] bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full mx-auto  '>Apply For Job</button>
            <button className='text-xl sm:text-2xl text-[#003d4d]/80 font-semibold rounded-full  py-2'>Skip For Now</button>
        </div>
        </div>
        
    </div>
  )
}

export default UserGeneratedResume