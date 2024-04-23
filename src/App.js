import React from "react";
import Navbar from "./components/Common/Navbar and Footer/Navbar";
import SetCredentials from "./components/Common/Login and SignUp/SignUp/SetCredentials";
import Forget from "./components/Common/Login and SignUp/Login/Forget";
import ForgotPasswordPhoneNumber from "./components/Common/Login and SignUp/Login/ForgotPasswordPhoneNumber";
import ForgotPasswordEmail from "./components/Common/Login and SignUp/Login/ForgotPasswordEmail";
import ForgotPasswordVerifyOTP from "./components/Common/Login and SignUp/Login/ForgotPasswordVerifyOTP";
import ForgotPasswordSetPassword from "./components/Common/Login and SignUp/Login/SetPassword";
// import Home from "./components/Pages/Skills&Sharing/Home";
import Header from "./components/Common/Navbar and Footer/Header";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/slices/userSlice";
import Login from "./components/Common/Login and SignUp/Login/Login";
import UsersSignup from "./components/Common/Login and SignUp/SignUp/UsersSignup";
import ChatPage from "./components/Pages/chats/Chat";
import Contact from "./components/Pages/JobPosting/Contact";
import Guidelines from "./components/Pages/JobPosting/Guidelines";
import InstantJobDetails from "./components/Pages/JobPosting/InstantJobDetails";
import InternshipDetails from "./components/Pages/JobPosting/InternshipDetails";
import JobDetails from "./components/Pages/JobPosting/JobDetails";
import JobPosting from "./components/Pages/JobPosting/JobPosting";
import ShadowingDetails from "./components/Pages/JobPosting/ShadowingDetails";
// import VisitUserProfile from "./components/Pages/ProfilePage/UserProfilePage";
import VerifyOTP from "./components/Common/Login and SignUp/SignUp/VerifyOTP";
import Notification from "./components/Pages/Notification/Notification";
import ProtectedRoutes from "./components/Protected/ProtectedRoutes";
import ProtectedUser from "./components/Protected/ProtectedUser";
import Blog from "./components/Pages/Blog/Blog";
import BlogView from "./components/Pages/Blog/BlogView";
import Comingsoon from "./components/Pages/ComingsoonPage/Comingsoon";
import Faq from "./components/Pages/FaqSection/Faq";
import GeneralFaq from "./components/Pages/FaqSection/GeneralFaq";
import JobPostingFaq from "./components/Pages/FaqSection/JobPostingFaq";
import JobApplyFaq from "./components/Pages/FaqSection/JobApplyFaq";
import SkiilsFaq from "./components/Pages/FaqSection/SkiilsFaq";
import StoriesFaq from "./components/Pages/FaqSection/StoriesFaq";
import ResumeFaq from "./components/Pages/FaqSection/ResumeFaq";
import UserProfileFaq from "./components/Pages/FaqSection/UserProfileFaq";
import SupportersFaq from "./components/Pages/FaqSection/SupportersFaq";
import CandidatesFaq from "./components/Pages/FaqSection/CandidatesFaq";
import CompanyProfileFaq from "./components/Pages/FaqSection/CompanyProfileFaq";
import EmployersFaq from "./components/Pages/FaqSection/EmployersFaq";
import PartnerWithUs from "./components/Pages/FaqSection/PartnerWithUs";
import Home from "./components/Pages/Home/Home.jsx";
import UserDetails from "./components/Common/Login and SignUp/SignUp/UserDetails";
import UserGenerateResume from "./components/Common/Login and SignUp/SignUp/UserGenerateResume";
import UserResumeDetails from "./components/Common/Login and SignUp/SignUp/UserResumeDetails/UserResumeDetails";
import UserGeneratedResume from "./components/Common/Login and SignUp/SignUp/UserGeneratedResume";
import SetPassword from "./components/Common/Login and SignUp/Login/SetPassword";
import UserSetPassword from "./components/Common/Login and SignUp/SignUp/UserSetPassword";
import ReferralUsers from "./components/Referrals/ReferralUsers";
import ReferralEmployers from "./components/Referrals/ReferralEmployers";
import AboutUs from "./components/Pages/AboutUs/AboutUs.jsx";
import Partner from "./components/Pages/PartnerWithUs/Partner.jsx";
import Cg from "./components/Pages/CommunityGuidlines/Cg";
import Notfound from "./components/Pages/NotfoundPage/Notfound";
import Privacy from "./components/Pages/PrivacyPolicy/Privacy";
import Tac from "./components/Pages/TermsAndCondition/Tac";
// import SuppoterList from "./components/Pages/SupporterList/SuppoterList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Common/Navbar and Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("userdata: - ", userData.user);
        dispatch(addUser({id:userData.user._id,userName:userData.user.userName}));
        setUser(userData.user);
      } else {
        console.log("Failed to fetch user profile");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <Header user={user} />
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/posts" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route
          path="/usergenerateresume/:id"
          element={<UserGenerateResume />}
        />
        <Route
          path="/user/resume/details/:id"
          element={<UserResumeDetails />}
        />
        <Route path="/registeration/phoneNumber" element={<UsersSignup />} />
        <Route
          path="/registeration/phoneNumber/verify"
          element={<VerifyOTP />}
        />
        <Route path="/user/setPassword" element={<UserSetPassword />} />
        <Route path="/setCredentials" element={<SetCredentials />} />
        <Route path="/forgotPassword" element={<Forget />} />
        <Route
          path="/forgotPassword/phoneNumber"
          element={<ForgotPasswordPhoneNumber />}
        />
        <Route path="/forgotPassword/email" element={<ForgotPasswordEmail />} />
        <Route
          path="/forgotPassword/verify"
          element={<ForgotPasswordVerifyOTP />}
        />
        <Route
          path="/forgotPassword/setPassword"
          element={<ForgotPasswordSetPassword />}
        />
        <Route path="/messaging" element={<ChatPage />} />
        <Route path="/login/protected" element={<ProtectedRoutes />}>
          <Route path="/login/protected/user" element={<ProtectedUser />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogview" element={<BlogView />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/Communityguideline" element={<Cg />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/termandcondition" element={<Tac />} />
        <Route path="/generalFaq" element={<GeneralFaq />} />
        <Route path="/jobpostingFaq" element={<JobPostingFaq />} />
        <Route path="/jobapplyFaq" element={<JobApplyFaq />} />
        <Route path="/skillsFaq" element={<SkiilsFaq />} />
        <Route path="/storiesFaq" element={<StoriesFaq />} />
        <Route path="/resumeFaq" element={<ResumeFaq />} />
        <Route path="/userprofileFaq" element={<UserProfileFaq />} />
        <Route path="/supportersFaq" element={<SupportersFaq />} />
        <Route path="/candidatesFaq" element={<CandidatesFaq />} />
        <Route path="/companyprofileFaq" element={<CompanyProfileFaq />} />
        <Route path="/employersFaq" element={<EmployersFaq />} />
        <Route path="/partnerwithusFaq" element={<PartnerWithUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/partnerWithUs" element={<Partner />} />
        <Route path="/referralUsers" element={<ReferralUsers/>} />
        <Route path="/referralEmployers" element={<ReferralEmployers/>} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
      <ToastContainer />
      {/* <ReferralUsers/> */}
      {/* <ReferralEmployers/> */}
      {/* <UserDetails/>  */}
      {/* <UserGenerateResume/> */}
      <UserResumeDetails/>
      {/* <UserGeneratedResume/> */}
      {/* <SetPassword/> */}
      {/* <Home /> */}
      {/* <VisitUserProfile /> */}
      {/* <SuppoterList/> */}
      {/* <Notification /> */}
      {/* <Contact /> */}
      {/* <Guidelines /> */}
      {/* <InstantJobDetails /> */}
      {/* <InternshipDetails /> */}
      {/* <JobDetails /> */}
      {/* <JobPosting /> */}
      {/* <ShadowingDetails /> */}
      {/* <ChatPage /> */}
    </>
  );
}

export default App;
