import "./CreateAccountPage.scss";
import React from "react";
import Header from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import Profile1 from "../../assets/images/profile_mickey.png";
import Profile2 from "../../assets/images/Profile_Baby.png";
import Profile3 from "../../assets/images/Profile_IronMan.png";
import Profile4 from "../../assets/images/Profile_spoon.png";
import Profile5 from "../../assets/images/Profile_Woodie.png";
import EmailInput from "../../components/LoginComponents/EmailInput/EmailInput";
import PasswordInput from "../../components/LoginComponents/PasswordInput/PasswordInput";
import ConfirmPassInput from "../../components/CreateAccountComponents/ConfirmPassInput/ConfirmPassInput";
import SignUpButton from "../../components/CreateAccountComponents/SignUpButton/SignUpButton";
import HaveAccountButton from "../../components/CreateAccountComponents/HaveAccountButton/HaveAccountButton";
import GoogleIcon from "../../components/LoginComponents/GoogleIcon/GoogleIcon";
import MetaIcon from "../../components/LoginComponents/MetaIcon/MetaIcon";
import AppleIcon from "../../components/LoginComponents/AppleIcon/AppleIcon";
import ProfileButton from "../../components/CreateAccountComponents/ProfileButton/ProfileButton";

const login = () => {
  return (
    <div className="background">
      <Header />
      <div className="loginbody">
        <div className="loginbody__left">
          <p className="loginbody__left__Text">Select a profile character</p>
          <div className="loginbody__left__characters">
            <ProfileButton profile={Profile1} profileNum="1" />
            <ProfileButton profile={Profile2} profileNum="2" />
            <ProfileButton profile={Profile3} profileNum="3" />
            <ProfileButton profile={Profile4} profileNum="4" />
            <ProfileButton profile={Profile5} profileNum="5" />
          </div>
        </div>

        <div className="loginbody__right">
          <p className="loginbody__right__Text">Create Account</p>
          <EmailInput />
          <PasswordInput />
          <ConfirmPassInput />
          <SignUpButton />
          <HaveAccountButton />
          <p className="loginbody__right__continuewith">Or continue with</p>
          <div className="loginbody__right__platformIcons">
            <GoogleIcon />
            <MetaIcon />
            <AppleIcon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default login;
