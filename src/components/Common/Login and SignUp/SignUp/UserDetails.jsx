import React, { useState, useEffect } from 'react';
import { useUserDetailsMutation} from '../../../../redux/api/signup';
import { useSelector } from 'react-redux';
import validator from 'validator';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
   
   
    //User fill their Details
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[userName, setUserName] = useState("")
    const[gender,setGender] = useState("");
    const[date, setDate] = useState("")
    const[email, setEmail] = useState("")
    const [errors, setErrors] = useState({ firstName: false, lastName: false, userName : false, gender :false, date : false, email : false});
    const [userDetails,{data,isLoading,isError,error,isSuccess}]= useUserDetailsMutation();



 // save the details of user in our database  
    const handleSubmit = (e)=>{
    e.preventDefault();
    if (!firstName || !lastName || !userName || !gender || !date || !email) {
        setErrors({ firstName: !firstName, lastName: !lastName, userName : !userName, gender :! gender, date : !date, email : !email });
        toast.error("All fields are required");
        return;
      }
      if (!validator.isEmail(email)) {
        // Handle invalid email format
        toast.error("Invalid Email");
        return;
      }
    userDetails({id : id, firstName : firstName, lastName : lastName, userName : userName, gender : gender, date : date, email : email});
    navigate(`/usergenerateresume/${id}`);
    }
   
       

    return (
        <div className='relative bg-gray-100 h-full justify-center items-center text-left p-10 font-semibold '>
           <img 
            className='absolute top-0 left-0 w-[1600px] xl:w-[100vw] h-full z-0'
            src="/Images/backgroundImg.png" 
            alt="background" />
            <h1 className=' relative text-4xl text-[#003d4d] font-bold mx-auto p-10 text-center'>
                Fill Your Details
            </h1>
            <form className=' relative flex flex-col lg:w-[800px]  rounded-2xl border-2 mx-auto bg-white shadow-2xl p-10 space-y-5'>
                <div className='flex lg:flex-row  flex-col lg:space-x-2 lg:space-y-0 space-y-5 '>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className='text-left flex'>
                            <h1>First Name</h1>
                            <h1 className='text-red-700'>*</h1>
                            </label>
                     <input
      type='text'
      placeholder='Enter First Name'
      required
      className='border px-5 py-2 font-normal text-black rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
     
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className='text-left flex'>
                        <h1>Last Name</h1>
                            <h1 className='text-red-700'>*</h1>
                        </label>
                        <input type='text' placeholder='Enter Last Name'
                        required
                        value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                        className=' border px-5 py-2 text-black rounded-lg  font-normal text-[#003d4d]/70 border-[#003d4d]/40'/>
                    </div>
                
                </div>
                <div className='flex flex-col space-y-1 '>
                    <label className='text-left flex'>
                    <h1>User Name</h1>
                            <h1 className='text-red-700'>*</h1>
                        </label>
                        <input type='text'
                        placeholder='Enter User Name'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className='border px-5 py-2 font-normal text-black rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
                </div>
                <div >
                   {/* Code For Gender Implementation */}
                    <div className='flex lg:flex-row flex-col lg:space-x-2 lg:space-y-0 space-y-5'>

                    <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-left flex'>
                    <h1>Gender</h1>
                    <h1 className='text-red-700'>*</h1>
                    </label>
                   
                    <select name="Gender"
                    placeholder='Select'
                    defaultValue={"Select"}
                    onChange={(e)=>{setGender(e.target.value)}}
                    className='font-normal text-black border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white'
                    required
                    >
                        <option value="Select" disabled>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        
                    </select>
             
                    </div>
    
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className='text-left flex'>
                        <h1>Date of Birth</h1>
                            <h1 className='text-red-700'>*</h1>
                    </label>
                        <input 
                        type="date"
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                        placeholder='Select'
                        className='border px-5 py-2  h-[40px] font-normal text-black rounded-lg border-[#003d4d]/40 text-[#003d4d]/70' 
                        required
                        />
                        
                    </div>
                    </div>
                    <div className='flex flex-col space-y-1 mb-10 mt-4'>
                    <label className='text-left flex'>
                    <h1>E-mail</h1>
                            <h1 className='text-red-700'>*</h1>
                        </label>
                        <input 
                        type='email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder='Enter User Email'
                        required
                        className=' border px-5 py-2 font-normal text-black rounded-lg text-[#003d4d]/70 border-[#003d4d]/40'/>
                        
                </div>
                                 
                    
                </div>
    
                <button onClick={handleSubmit} className='text-2xl w-[150px] sm:w-[200px]  bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-3 sm:px-10 rounded-full'> Next     →</button>
                    
            </form>
            {isLoading?<p>Loading...</p>:null}
              {isError && <span>Oops something went wrong</span>}
        </div>
      )
    }
    
    export default UserDetails
