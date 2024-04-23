import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useCreateReferralCodeMutation, 
  useGetReferralCodeByUserQuery, useSearchReferralCodeQuery, useUpdateReferralPointsMutation ,
} from "../../redux/api/referral";
import Swal from "sweetalert2";
// import shortid from 'shortid';

const ReferralUsers = () => {
  const [referralCode, setReferralCode] = useState("");
  const [enterReferralCode, setEnterReferralCode] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);
  const [refferedUsers, setRefferedUsers] = useState([]);
  const [claimAlert, setClaimAlert] = useState(false);
  const [generateCodeButtonHidden, setGenerateCodeButtonHidden] = useState(false);
  const [inputCodeButtonHidden, setInputCodeButtonHidden] = useState(false);
 
  const [isSearching, setIsSearching] = useState(false);

  const userName = useSelector((state) => state.user.userName);
  console.log(userName);

  // Query for fetching the data from mongodb
  const { data: referralCodeData, refetch } = useGetReferralCodeByUserQuery(userName);
  const  { data :useReferralCodeData,  isSuccess, refetch: refetchSearchReferralCode } = useSearchReferralCodeQuery(enterReferralCode);
  console.log(useReferralCodeData)
  const [updateReferralPoints, {data :ReferralPointData, isSuccess: updatePointSuccess , isError} ] = useUpdateReferralPointsMutation();
            console.log(ReferralPointData)
  console.log(referralCodeData);
  const [createReferralCode, {data}]= useCreateReferralCodeMutation();
 

  //generate a random code
  const generateReferralCode = () => {
    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let referralCode = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referralCode += characters[randomIndex];
    }

    return referralCode;
  };
  console.log(referralCodeData);

  // when generate code button is click the function is called
  const handleGenerateCode = async () => {
    setGenerateCodeButtonHidden(true);
    Swal.fire("You Can generate code only one time");
    if (referralCodeData && referralCodeData.code) {
      setReferralCode(referralCodeData.code);

      return;
    }

    const code = generateReferralCode();
    setReferralCode(code);
    createReferralCode({ userName: userName, code: code });
  };

useEffect(()=>{
 
  if(referralCodeData && referralCodeData.rewardPoints){
    setRewardPoints(referralCodeData.rewardPoints)
  }
  if(referralCodeData && referralCodeData.redeemedCode){
    setInputCodeButtonHidden(true);
    
  }
  // if(updatePointSuccess){
  //   setInputCodeButtonHidden(true);
   
    // setRewardPoints((prevPoints) => prevPoints + 1);
  // }
   

  if(referralCodeData && referralCodeData.refferedUsers){
    setRefferedUsers(referralCodeData.refferedUsers.length);
  }
},[referralCodeData, inputCodeButtonHidden,refetch, setIsSearching, isSuccess])

// useEffect(()=>{
//   refetchSearchReferralCode();
//   if (isSuccess){
//     handleSearch();
//   }
// },[isSearching])
// const handleClickSearch = async() => {
//   setIsSearching(true);
// }
const handleSearch = async() => {
  
  if(enterReferralCode == ""){
    Swal.fire('Invalid referral code');
    return
  }

  try {
    refetchSearchReferralCode()
    // const response =  await refetchSearchReferralCode();
    const referringUser = useReferralCodeData.referringUser;
    const enteredUser = userName;
    const redeemedCode = enterReferralCode;
    if (referringUser && enteredUser) {
      console.log(redeemedCode)
      // Update referral points for the entered user (+1 point) and the referring user (+3 points)
      await updateReferralPoints({
        enteredUser: enteredUser,
        referringUser: referringUser,
        rewardUser: referringUser,
        redeemedCode: enterReferralCode,
        enteredUserPoints: 1,
        referringUserPoints: 3,
      });
      console.log('Referral points updated successfully.');
  
    } 
    else {
      console.log('Referral code not found or missing user information.');
    }
  } catch (error) {
    console.error('Error updating referral points:', error);
    // Handle the error appropriately
  } 
  finally {
   setIsSearching(false);
    refetch()
  }
 

};



  //Alert shows when Reward points is less than 15
  const handleClaimAlert = () => {
    if (rewardPoints < 15) {
      setClaimAlert(true);
      setTimeout(() => {
        setClaimAlert(false);
      }, 4000);
    }
  };

  //function for copy the code
  const handleCopy = (event) => {
    const value = event.target.getAttribute("value");
    navigator.clipboard.writeText(value);
  };

  // set pop up
  const [popUp, setPopUp] = useState("");
  const handleClick = (e) => {
    setPopUp("Share");
  };
  const handleCancel = () => {
    setPopUp("");
  };

  return (
    <div className=" relative bg-gray-100 h-full justify-center items-center text-left p-1 sm:p-10 font-semibold ">
      <img
        className="absolute top-0 left-0 w-[1600px] xl:w-[100vw] h-full z-0"
        src="/Images/backgroundImg.png"
        alt="background"
      />
      <div className="relative z-20">
        <div className="m-2 lg:m-10 bg-gray-100 shadow-2xl p-3 sm:p-10 rounded-2xl flex flex-col space-y-20">
          <h1 className="text-black text-4xl font-semibold text-center mb-10">
            Hi Referral Champ! Glad to see you here
          </h1>
          <div className=" relative flex mx-0 sm:mx-40">
            <div className="mx-auto flex flex-col space-y-10">
              <div className="flex items-center">
                <h1 className="text-[#003d4d] text-xl font-bold p-3  ml-1 lg:ml-[120px] bg-[#003d4d]/30 rounded-lg">
                  1 Referral = 3 Zeal Points
                </h1>
                <h5 className="flex text-blue-900 font-inter cursor-pointer mx-5">
                  Share link
                  <img
                    value="Share"
                    onClick={handleClick}
                    className="w-[30px] h-[30px] mx-2"
                    src="/Images/Share.png"
                    alt="Share"
                  />
                </h5>

                {/* popup to share */}
                <div
                  className={`${
                    popUp === "Share"
                      ? `absolute top-0 left-0 right-0 w-[300px] lg:w-[500px]  bg-white p-1 sm:p-10 pb-20 space-y-2 mx-auto shadow-2xl rounded-2xl z-30`
                      : `hidden`
                  }`}
                >
                  <div>
                    <div className="flex justify-between space-x-1 sm:space-x-4 ">
                      <div className="flex flex-col justify-center">
                        <a href="https://wa.me">
                          <img
                            src="\Images\whatsapp.png"
                            alt=""
                            className="w-12 h-12"
                          />
                        </a>
                        <p className="font-normal">Whatsapp</p>
                      </div>
                      <div className="flex flex-col justify-center">
                        <a href="instagram://">
                          <img
                            src="\Images\instagram.png"
                            alt=""
                            className="w-12 h-12"
                          />
                        </a>
                        <p className="font-normal">Instagram</p>
                      </div>
                      <div className="flex flex-col">
                        <a href="sms:">
                          <img
                            src="\Images\messages.png"
                            alt=""
                            className="w-12 h-12"
                          />
                        </a>
                        <p className="font-normal">Message</p>
                      </div>
                      <div className="flex flex-col">
                        <a href="mailto:">
                          <img
                            src="\Images\Mail.png"
                            alt=""
                            className="w-12 h-12"
                          />
                        </a>
                        <p className="font-normal">Mail</p>
                      </div>
                      <div className="flex flex-col">
                        <img
                          src="\Images\cancel.png"
                          alt=""
                          onClick={handleCancel}
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                    <div class="w-[270px] sm:w-[343px] h-[30px] mt-10 flex mx-auto rounded-[15px] border border-black/70">
                      <div class="flex items-center justify-center p-0.5 sm:p-2 font-inter text-5 sm:text-18 font-normal sm:font-semibold border-r  border-black/70 ">
                        Copylink
                      </div>
                      <input class="rounded-[15px] text-blue-900 font-inter pl-2 sm:pl-11 flex items-center text-5 sm:text-20 font-normal border-l-0"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-2xl justify-evenly">
                <div className="text-center">
                  <h1>REFERRALS</h1>
                  <h1>{referralCodeData && referralCodeData.refferedUsers ? refferedUsers : "0"}</h1>
                </div>
                <div className="text-center">
                  <h1>REWARD</h1>
                  <h1> {referralCodeData && referralCodeData.rewardPoints ? rewardPoints : "0"} </h1>
                </div>
              </div>

              {!generateCodeButtonHidden ? (
                <button
                  onClick={handleGenerateCode}
                  className="h-[55px] flex mx-auto rounded-[15px] border border-black/70 bg-gradient-to-b from-blue-300 via-blue-400 to-transparent text-sky-900  w-[150px] flex items-center justify-center font-inter text-18 font-semibold  border-black/70 hover:bg-sky-500"
                >
                  Generate Code
                </button>
              ) : (
                ""
              )}

              <div class="w-[270px] sm:w-[343px] h-[55px] flex mx-auto rounded-[15px] border border-black/70 bg-gradient-to-b from-blue-300 via-blue-100 to-transparent relative">
                <div class="text-blue-900  w-[150px] flex items-center justify-center font-inter text-18 font-semibold border-r  border-black/70 ">
                  Referral code
                </div>
                {referralCodeData && referralCodeData.code ? (
                  <div class="text-blue-900 font-inter pl-2 sm:pl-11 flex items-center text-20 font-normal">
                    {/* {referralCode?referralCode:"- - - - - -"} */}
                    {referralCodeData && referralCodeData.code
                      ? referralCodeData.code
                      : "- - - - - -"}
                    <img
                      className="absolute right-3 hover:right-2.5 cursor-pointer"
                      value={referralCode}
                      onClick={handleCopy}
                      src="/Images/copy-icon.png"
                      alt="copy"
                    />
                  </div>
                ) : (
                  <div class="text-blue-900 font-inter pl-2 sm:pl-11 flex items-center text-20 font-normal">
                    {referralCode ? referralCode : "- - - - - -"}
                    {/* {referralCodeData && referralCodeData.code ? referralCodeData.code : "- - - - - -"} */}
                    <img
                      className="absolute right-3 hover:right-2.5 cursor-pointer"
                      value={referralCode}
                      onClick={handleCopy}
                      src="/Images/copy-icon.png"
                      alt="copy"
                    />
                  </div>
                )}</div>
                  { !inputCodeButtonHidden ? (<div class="w-[270px] sm:w-[343px] relative h-[55px] flex mx-auto rounded-[15px] border border-black/70 bg-gradient-to-b from-blue-300 via-blue-100 to-transparent relative">
                  <div class="text-blue-900  w-[150px] flex items-center justify-center font-inter text-18 font-semibold border-r  border-black/70 ">
                    Reffered code 
                    </div>
                    <input type="text" value={enterReferralCode} onChange={(e)=>setEnterReferralCode(e.target.value)} class="text-blue-900 font-inter pl-2 sm:pl-4 rounded-[15px] flex items-center text-20 bg-gradient-to-b from-blue-300 via-blue-100 to-transparent font-normal">
                    </input>
                    <button onClick={handleSearch} class="flex w-[40px]  sm:w-[90px] h-[42px]  px-9 sm:px-5 justify-center items-center absolute top-[5.5px] right-1 sm:right-4 rounded-[40px]  bg-teal-700  shadow-md text-gray-50 hover:bg-teal-300 hover:text-black">
                      Submit
                      </button>
                   </div>) : ""}


              <div>
                <h1 className="text-black font-inter text-[20px] p-2 lg:pl-[75px] font-normal">
                  Use your reward points to unlock premium features
                </h1>
              </div>

              <div className="flex relative">
                <button
                  onClick={handleClaimAlert}
                  className="h-[45px] w-[150px] rounded-[70px] ml-10 sm:ml-[200px] bg-[#003d4d] border text-white font-inter text-6 font-semibold hover:bg-black"
                >
                  Claim
                </button>
                {claimAlert && (
                  <div className="text-black font-inter font-normal flex items-center">
                    <img
                      className="m-2"
                      src="/Images/redtriangle.png"
                      alt="alert"
                    />
                    You don't have enough points
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex  justify-evenly relative m-1 sm:m-10 bg-orange-500/30 h-[400px] w-[1200px] rounded-3xl shadow-2xl ">
              <div className="absolute top-[30%]  h-[10px] w-[950px] left-[150px]  bg-orange-500/70 rounded-lg z-20"></div>
              <div className="relative w-[20%] mt-5 z-30">
                <h1 className="absolute top-20  w-[30px] z-10 text-xl text-black font-bold">
                  Lets Begin
                </h1>
                <img
                  src="\Images\polygonimgs.png"
                  alt=""
                  className=" absolute w-[75px] top-[67px] left-12"
                />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h1 className="text-xl  text-center mt-[40px]  uppercase tracking-[5px]">
                  Points
                </h1>
                <div className=" w-20 h-20  bg-white rounded-full z-30  border-2 border-[#003d4d]/70 ">
                  <h3 className="text-3xl font-bold text-[#003d4d] items-center justify-center  text-center  pt-4 ">
                    15
                  </h3>
                </div>
                <img
                  src="Images\upTriangle.png"
                  alt=""
                  className="w-10 h-10 opacity-60"
                />
                <div className="w-[200px]  min-h-[100px] bg-pink-400/30 rounded-lg shadow-lg ">
                  <h3 className="text-center justify-center items-center  text-xl font-normal p-2 text-gray-700/80">
                    Highlighted Application for 3 days
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2 ">
                <h1 className="text-xl  text-center mt-[40px] uppercase tracking-[5px]">
                  Points
                </h1>
                <div className=" w-20 h-20  bg-white rounded-full z-30 border-2 border-[#003d4d]/70 ">
                  <h1 className="text-4xl font-bold text-[#003d4d] items-center justify-center  text-center  pt-4">
                    30
                  </h1>
                </div>
                <img
                  src="Images\upTriangle.png"
                  alt=""
                  className="w-10 h-10 opacity-60"
                />
                <div className="w-[200px] min-h-[100px] bg-pink-400/30 rounded-lg shadow-lg ">
                  <h1 className="text-center justify-center items-center  text-xl font-normal p-2 text-gray-700/80">
                    Greater Visibility to employers
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <h1 className="text-xl  text-center mt-[40px] uppercase tracking-[5px]">
                  Points
                </h1>
                <div className="] w-20 h-20  bg-white rounded-full z-30 border-2 border-[#003d4d]/70 ">
                  <h1 className="text-4xl font-bold text-[#003d4d] items-center justify-center  text-center  pt-4">
                    75
                  </h1>
                </div>
                <img
                  src="Images\upTriangle.png"
                  alt=""
                  className="w-10 h-10 opacity-60"
                />
                <div className="w-[200px] min-h-[100px]  bg-pink-400/30 rounded-lg shadow-lg ">
                  <h1 className="text-center justify-center items-center  text-xl font-normal p-2 text-gray-700/80">
                    Resume Enhancement and recommended profile status
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <h1 className="text-xl  text-center mt-[40px] uppercase tracking-[5px]">
                  Points
                </h1>
                <div className=" w-20 h-20  bg-white rounded-full z-30 border-2 border-[#003d4d]/70">
                  <h1 className="text-4xl font-bold text-[#003d4d] items-center justify-center  text-center  pt-4">
                    150
                  </h1>
                </div>
                <img
                  src="Images\upTriangle.png"
                  alt=""
                  className="w-10 h-10 opacity-60"
                />
                <div className="w-[200px] min-h-[100px] bg-pink-400/30 rounded-lg shadow-lg ">
                  <h1 className="text-center justify-center items-center  text-xl font-normal p-2 text-gray-700/80">
                    Prioritized job Placement Assistance
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-black text-4xl font-semibold text-center mb-10">
              Hey Champ! Let’s see how this works
            </h1>
          </div>
          <div className="bg-white shadow-lg rounded-2xl space-y-5 ">
            <h1 className="text-black text-xl font-inter font-semibold  shadow-lg p-5 rounded-2xl ">
              Milestone 1 (15 points): Refer 5 champs and get a Highlighted
              application for 3 days whenever you apply for jobs. It's like
              getting a gold star, but way cooler.
            </h1>
            <h1 className="text-black text-xl font-semibold shadow-lg p-5 rounded-2xl">
              Milestone 2 (30 points): Refer 10 champs and enjoy Greater
              Visibility to employers. It's like being a celebrity, but without
              the paparazzi.
            </h1>
            <h1 className="text-black text-xl font-semibold shadow-lg p-10 rounded-2xl">
              Milestone 3 (75 points): Refer 25 champs and get Resume
              Enhancement and recommended profile status for 1 month. It's like
              hiring a personal stylist, but for your resume.
            </h1>
            <h1 className="text-black text-xl font-semibold shadow-lg p-10 rounded-2xl ">
              Milestone 4 (150 points): Refer 50 champs and get Prioritized Job
              Placement Assistance. It's like having a secret weapon in your job
              search arsenal.
            </h1>
          </div>
          <hr class="border-b border-black" />
          <div className="flex flex-col sm:flex-row">
            <div class="text-black-600 pl-2 lg:pl-10">
              <h1 class="font-raleway text-3xl sm:text-8xl font-medium tracking-tight leading-normal">
                Coming Soon
              </h1>
              <h2 class="font-raleway text-xl pt-20 font-medium leading-normal">
                Get Featured with Zealyug
              </h2>
              <h1 class="font-raleway text-xl pt-5 font-medium leading-normal">
                5 Users to be Interviewed their job experience
              </h1>
              <h1 class="font-raleway text-xl sm:text-2xl font-normal pt-20 pb-10  pl-2 sm:pl-10 tracking-tight leading-normal">
                Get Notified When We Launch
              </h1>

              <div class="w-[270px] sm:w-[553px] h-[67px] relative  flex items-center rounded-[28.5px] border border-black">
                <input
                  class="w-[553px] h-[67px] flex items-center rounded-[28.5px] border border-black bg-gray-200 text-gray-900 font-normal pl-4"
                  placeholder="Please enter your email address"
                />

                <button class="flex w-[100px] sm:w-[170px] h-[52px]  px-2 sm:px-25 justify-center items-center absolute top-[7.5px] right-1 sm:right-4 rounded-[40px]  bg-teal-700  shadow-md text-gray-50 hover:bg-teal-300 hover:text-black">
                  Notify Me
                </button>
              </div>
            </div>
            <div className="pl-1 lg:pl-20 relative">
              <img
                src="\Images\Ellipse.png"
                alt=""
                className="w-[100px] h-[100px] absolute right-2 top-5 sm:top-[-60px]"
              />
              <img
                src="\Images\comingsoon.png"
                alt=""
                className="w-[600px] h-[600px] sm:pt-8 pt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralUsers;
