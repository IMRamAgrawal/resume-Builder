import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const [nav, setNav] = useState(true);
  const userName = useSelector((state) => state.user.userName);
  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-[80px] w-full text-black font-bold shadow-xl shadow-gray-500 bg-[#f9f9f9] lg:px-20 px-5 ">
        <div>
          <img src="/images/LOGO.png" className="h-[60px]" alt="Logo" />
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <div className="p-2  h-[80px] hidden lg:flex">
              <Link to="/">
                <div className="p-2 mx-20 flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative">
                  <img src="/Images/home.png" alt="" className="h-[32px]" />
                  <span className="absolute top-[45px] w-[160px] text-center">
                    Home
                  </span>
                </div>
              </Link>
              <Link to="/comingsoon">
                <div className="p-2 mx-19 flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative">
                  <img
                    src="/Images/opportunity.png"
                    alt=""
                    className="h-[32px]"
                  />
                  <span className="absolute top-[45px] w-[160px]  text-center">
                    Find Oppurtunity
                  </span>
                </div>
              </Link>
              <Link to="/posts">
                <div className="p-2 mx-20  flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative">
                  <img src="/Images/posts.png" alt="" className="h-[32px]" />
                  <span className="absolute top-[45px] w-[160px]  text-center">
                    view posts
                  </span>
                </div>
              </Link>
              <Link to="/comingsoon">
                <div className="p-2 mx-19 flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative">
                  <img src="/Images/talent.png" alt="" className="h-[32px]" />
                  <span className="absolute top-[45px] w-[160px] text-center">
                    Find Talent
                  </span>
                </div>
              </Link>
              <Link to="comingsoon">
                <div className="p-2 mx-20  flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative">
                  <img
                    src="/Images/instantjob.png"
                    alt=""
                    className="h-[32px]"
                  />
                  <span className="absolute top-[45px] w-[160px] text-center">
                    Instant job
                  </span>
                </div>
              </Link>

              {(user || userName) && (
                <Link to="">
                  <div className="p-2  mr-10  flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative">
                    <img src="/Images/bell.png" alt="" className="h-[32px]" />
                    <span className="absolute top-[45px] w-[160px] text-center">
                      Notification
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {(user || userName) && (
            <Link>
              <div className="p-2 mx-10  flex flex-col justify-center items-center cursor-pointer  w-[48px] h-[45px] rounded-[48px] hover:bg-[#57a7b310] hover:border border-solid border-opacity-5  bg-opacity-8 relative mb-5">
                <img
                  src={user ? user.profilePic : "./Images/personImg.png"}
                  alt=""
                  className="h-8 w-8  rounded-full"
                ></img>
                {user ? (
                  <span className="absolute top-[45px] w-[160px] text-center">
                    {user?.userName}
                  </span>
                ) : (
                  <span className="absolute top-[45px] w-[160px] text-center">
                    {userName}
                  </span>
                )}
              </div>
            </Link>
          )}
          <div>
            {user || userName ? (
              <Link to="/login">
                <button
                  onClick={logout}
                  className="bg-gradient-to-br from-[#003d4d] to-[#57a7b3] px-3 py-2 rounded-full hover:bg-none hover:text-[#003d4d] border-[1px] border-[#003d4d] font-semibold text-white transition-all hover:ease-in-out duration-300 mx-3 mt-2"
                >
                  Log out
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>

          {!(user || userName) && (
            <div className="flex justify-center items-center gap-3 box-border">
              <Link to="/login">
                <button className="bg-white px-3 py-2 rounded-full hover:bg-gradient-to-br from-[#003d4d] to-[#57a7b3] hover:text-white border border-[#003d4d] transition-all hover:ease-in-out duration-300">
                  Login
                </button>
              </Link>
              <Link to="/registeration/phoneNumber">
                <button className="bg-gradient-to-br from-[#003d4d] to-[#57a7b3] px-3 py-2 rounded-full hover:bg-none hover:text-[#003d4d] border-[1px] border-[#003d4d] font-semibold text-white transition-all hover:ease-in-out duration-300">
                  Signup
                </button>
              </Link>
            </div>
          )}

          <div onClick={handleNav} className="block ml-5 lg:hidden">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            onClick={handleNav}
            className="absolute right-[30px] flex justify-center items-center cursor-pointer  ml-5 lg:flex"
          >
            {!nav ? (
              <AiOutlineClose size={20} />
            ) : (
              <img src="/Images/menu.png" alt="" className="h-[27px]" />
            )}
          </div>

          <div
            className={`${
              !nav
                ? "absolute right-0 top-[80px] bg-[#f9f9f9] z-30 transition-all ease-in-out duration-500"
                : "absolute rounded-xl top-[10%]"
            }`}
          >
            <div
              onClick={handleNav}
              className={`${nav ? "hidden" : "flex flex-col space-y-2 m-3"}`}
            >
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px] lg:hidden">
                <img src="/Images/home.png" alt="" className="h-[27px]" />
                <Link to="/">
                  <span>Home</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px] lg:hidden">
                <img
                  src="/Images/opportunity.png"
                  alt=""
                  className="h-[27px]"
                />
                <Link to="/comingsoon">
                  <span>Find Oppurtunity</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px] lg:hidden">
                <img src="/Images/posts.png" alt="" className="h-[27px]" />
                <Link to="/comingsoon">
                  <span>Share post</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px] lg:hidden">
                <img src="/Images/talent.png" alt="" className="h-[27px]" />
                <Link to="/comingsoon">
                  <span>Find Talent</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px] lg:hidden">
                <img src="/Images/instantjob.png" alt="" className="h-[27px]" />
                <Link to="/comingsoon">
                  <span>Instant job</span>
                </Link>
              </div>
              {(user || userName) && (
                <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px] lg:hidden">
                  <img src="/Images/bell.png" alt="" className="h-[27px]" />
                  <Link to="/comingsoon">
                    <span>Notification</span>
                  </Link>
                </div>
              )}
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px]">
                <img src="/Images/FAQs.png" alt="" className="h-[27px]" />
                <Link to="/faq">
                  <span>FAQs</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px]">
                <img
                  src="/Images/PrivacyPolicy.png"
                  alt=""
                  className="h-[27px]"
                />
                <Link to="/privacypolicy">
                  <span>Privacy Policy</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px]">
                <img src="/Images/Partner.png" alt="" className="h-[27px]" />
                <Link to="/partnerWithUs">
                  <span>Partner with us</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px]">
                <img src="/Images/T&C.png" alt="" className="h-[27px]" />
                <Link to="/termandcondition">
                  <span>Terms & Conditions</span>
                </Link>
              </div>
              <div className="p-2  flex items-center bg-opacity-3 bg-gray-200 rounded-[5px] hover:bg-blue-200 cursor-pointer gap-[19px]">
                <img src="/Images/AboutAs.png" alt="" className="h-[27px]" />
                <Link to="aboutus">
                  <span>About Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
