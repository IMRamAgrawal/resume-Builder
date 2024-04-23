import React, { useEffect } from "react";
import { useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSetUserPasswordMutation, useGetSingleUserDetailsQuery} from "../../../../redux/api/signup";

const UserSetPassword = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [passwordVisibilityFlag, setpasswordVisibilityFlag] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [SetUserPassword, { data, isError, isLoading, isSuccess, error }] =
    useSetUserPasswordMutation();

  // fetch the data of user by phoneNumber
  const {
    data: userDetailsData,
    isLoading: userDetailsLoading,
    isError: userDetailsError,
  } = useGetSingleUserDetailsQuery(`${state.phoneNumber}`);

  console.log(userDetailsData);

  function handlePasswordVisibility(e) {
    e.preventDefault();
    setpasswordVisibilityFlag(!passwordVisibilityFlag);
  }
  const savePassword = (e) => {
    e.preventDefault();
    if( password === ""){
      toast.error("password are not match");
        return
      }
    if( password !== confirmPassword){
    toast.error("password are not match");
      return
    }
    if (state.phoneNumber) {
      SetUserPassword({ phoneNumber: state.phoneNumber, password });
    } else if (state.email) {
      SetUserPassword({ email: state.email, password });
    }
  };


  useEffect(() => {
    if (state?.phoneNumber || state?.email) {
      if (isSuccess) {
        console.log(data);
        localStorage.setItem("token", data.accessToken);
        navigate(`/userdetails/${userDetailsData._id}`);
        console.log("registeration success");
      } else if (isError) {
        console.log(error);
      }
    } else {
      navigate(-1);
      alert("Enter Your Credentials");
    }
  }, [error, isError, isSuccess, navigate, state?.phoneNumber]);

  return (
    <div>
      <div className="w-screen h-[calc(98vh-80px)] flex flex-col items-center justify-center overflow-x-clip overflow-y-clip">
        <img
          className="absolute left-0 top-0 w-full h-full -z-50 "
          src="./images/backgroundImg.png"
          alt="/"
        />
        {/* Actual form */}
        <div className=" flex flex-col justify-center h-[550px] w-[900px] bg-gradient-to-t from-white to-[#dae3e6] rounded-xl shadow shadow-gray-500">
          <div className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl">
            <p>New Beginnings brings New Opportunities!!!</p>
          </div>
          {/* Right side */}
          <div className="flex justify-center items-center">
            <ToastContainer />
            <div className="p-4 flex flex-col justify-around rounded-l-2xl text-center w-1/2">
              <form className="">
                <h1 className="mb-4 font-bold text-center  py-4 rounded-xl tracking-wider text-xl">
                  Set Up Your Password
                </h1>
                <div className="flex flex-col text-left relative">
                  <label htmlFor="password" className="ml-5">
                    {" "}
                    Password{" "}
                  </label>
                  <input
                    className=" p-1 my-2  mx-4 text-center rounded-md outline-none"
                    id="password"
                    type="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="************"
                    required={true}
                  />
                </div>
                <div className="flex flex-col text-left relative">
                  <label htmlFor="confirmPassword" className="ml-5">
                    Confirm Password
                  </label>
                  <input
                    className={` p-1 my-2  mx-4 text-center rounded-md outline-none border-b-2 ${
                      password === confirmPassword
                        ? `border-b-black`
                        : `border-b-red-600`
                    }`}
                    id="confirmPassword"
                    type={passwordVisibilityFlag ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    placeholder="************"
                    required={true}
                  />
                  <button
                    className="cursor-pointer absolute right-[30px] top-8 bg-white border-none active:border-none focus:border-none h-4"
                    onClick={handlePasswordVisibility}
                  >
                    <VisibilityIcon className="" />
                  </button>
                </div>
                <p className="flex items-center  mx-4 mt-2">
                  <input className="mr-2 cursor-pointer" type="checkbox" />{" "}
                  Remember Me
                </p>
                {/* for captcha */}

                <div className="flex justify-center">
                  <button
                    onClick={savePassword}
                    className="border  my-5 py-2 px-5 rounded-2xl bg-[#003d4d] hover:bg-[#003d4dcc] text-white cursor-pointer"
                  >
                    Let's Go
                  </button>
                </div>
              </form>
              {isLoading ? <p>Loading...</p> : null}
              {isError && <span>Oops something went wrong</span>}
            </div>
            {/* Left side */}
            <div className="lg:flex w-1/2">
              <img
                className="rounded-2xl w-[400px]"
                src="../images/loginImg.png"
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetPassword;
