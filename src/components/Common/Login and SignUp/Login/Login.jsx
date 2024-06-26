import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import { useUserLoginMutation } from "../../../../redux/api/login";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../redux/slices/userSlice";



export default function Login({user}) {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, {data,isLoading,isSuccess}] = useUserLoginMutation();
  const [passwordVisibilityFlag, setpasswordVisibilityFlag] = useState(false);
  const initialInput = {
    userName: "",
    password: ""
  }
  const [input, setInput] = useState(initialInput);
  console.log(isLoading)
  console.log(data)

  useEffect(()=>{
    if(isSuccess){
      dispatch(addUser({id:data.user._id,userName:data.user.userName}));
      console.log(data.token);
      localStorage.setItem("token",data.token)
      navigate("/user");
    }
  },[login,data])

  const handleChange = (e) => {
    const nameOfInput = e.target.name;
    setInput({ ...input, [nameOfInput]: e.target.value })
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    login(input);
    console.log(data);
    setInput(initialInput);
  }


  function handlePasswordVisibility(e) {
    e.preventDefault();
    setpasswordVisibilityFlag(!passwordVisibilityFlag);
  }

 // GOOGLE LOGIN
  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };



  return (
    <div className="w-screen h-[calc(100vh-80px)] flex items-center justify-center object-cover overflow-clip overflow-y-scroll md:overflow-y-clip">
      {/* Background Image */}
      <img
        className="absolute left-0 top-0 w-full h-full -z-50 "
        src="images/backgroundImg.png"
        alt="background"
      />
      <div className="flex flex-col md:justify-center mx-auto w-[800px]">
        {/* <div className="relative object-contain text-center">
          <img
            className="mx-auto h-18"
            src="images/LOGO.png"
            alt="/"
            width={180}

          />
        </div> */}
        {/* Actual form */}
        <div className="rounded-2xl shadow-md shadow-gray-500 bg-gradient-to-t from-white to-[#dae3e6] relative">
          <p className="text-xl md:text-2xl text-center md:my-4 px-10">Welcome Back Mate! Your Profile Is doing Great.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-fit sm:max-w-[900px] ">
            {/* Left side */}
            <div className="w-full  flex items-center justify-center rounded-2xl object-contain">
              <img
                className="flex rounded-2xl h-[100px] sm:h-[200px] md:h-[360px]"
                src="images/loginImg.png"
                alt="/"
              />
            </div>
            {/* Right side */}
            <div className="md:p-2 flex flex-col gap-7 opacity-100 rounded-r-2xl mt-10">
              <form>
                <Link to="../">
                  <RxCross1 className="absolute right-5 top-5" />
                </Link>
                <div className="flex flex-col font-jakarta text-center">
                  <input placeholder="UserName/Email" className="p-2 pl-8 mx-4 rounded-xl outline-none w-[95%]" type="text" autoComplete="on" name="userName" value={input.userName} onChange={handleChange} required={true} />
                </div>
                <div className="flex flex-col py-2">
                  <div className="flex-row items-center justify-center relative">
                    <input autoComplete="on" className=" p-2 pl-8 mx-4 rounded-xl outline-none w-[95%]" type={passwordVisibilityFlag ? "text" : "password"} placeholder="Password" name="password" value={input.password} onChange={handleChange} required={true} />
                    <button className="cursor-pointer absolute right-[30px] top-2 bg-white border-none active:border-none focus:border-none h-4" onClick={handlePasswordVisibility}><VisibilityIcon className="" /></button>
                  </div>
                  <p className="flex items-center justify-center mt-2">
                    <input className="mr-2 cursor-pointer" type="checkbox" /> Remember Me
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className=" cursor-pointer border w-1/3  my-3 py-2 rounded-3xl bg-gradient-to-br from-[#003d4d] to-[#57a7b3] hover:opacity-80 text-white " onClick={handleSubmit} type="submit">
                    Sign In
                  </button>
                </div>
                <div className="">
                  <Link to="/forgotPassword">
                    <p className=" hover:cursor-pointer text-blue-600 text-sm hover:text-red-600 flex justify-center items-center">
                      Forgot password?
                    </p>
                  </Link>
                </div>
              </form>
              {isLoading?<p>Loading...</p>:null}
              <div className="flex justify-center items-center mt-0">
                <hr className="w-[120px]" /><p className="mx-2">OR</p><hr className="w-[120px]" /></div>
              <div className="flex justify-center items-center gap-10">
                <GoogleIcon className="cursor-pointer" onClick={google} />
                <GoogleIcon className="cursor-pointer" onClick={google}/>
                <GoogleIcon className="cursor-pointer" onClick={google}/>
              </div>
              <div className="flex justify-center items-center gap-2 mb-4">
                <p className="font-light">Don't have an Account?</p>
                <Link to="/registeration/phoneNumber">
                  <p className="text-blue-600 hover:text-red-600 ">Sign Up</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
