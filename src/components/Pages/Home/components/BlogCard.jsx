import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = () => {
    const navigate = useNavigate();
    function goToBlogView() {
        navigate("/BlogView");
      }
      
    
    return (

        <div className="shadow-lg w-fit gap-2 md:gap-5 p-3 rounded-xl flex flex-col items-center">
            <div className='flex justify-end w-11/12'>
                5 Min Read
            </div>
            <div className='flex justify-center'>
                <img className="w-11/12 " src="images/AboutUs/person.png" alt="person" />
            </div>
        
            <p className="text-lg md:text-xl w-80 text-clip font-bold">How to engage employees in performance management through intrinsic motivation</p>
            <button onClick={goToBlogView} className="w-[84px] h-[30px] bg-white rounded-[300px] shadow-inner border border-[#003D4D] font-bold">Read </button>
            <div className='flex w-11/12 justify-between'>
                <p>January 19, 2023</p>
                <p>By Paulo</p>
            </div>
        </div>
    )
}

export default BlogCard