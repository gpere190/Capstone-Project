import "./LoginPage.scss";
import React from "react";
import Header from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import DisneyFriendsImg from "../../assets/images/disneyFriends.webp";
import EmailInput from "../../components/LoginComponents/EmailInput/EmailInput";
import PasswordInput from "../../components/LoginComponents/PasswordInput/PasswordInput";
import SignInButton from "../../components/LoginComponents/SignInButton/SignInButton";
import CreateAccountButton from "../../components/LoginComponents/CreateAccountButton/CreateAccountButton";
import GoogleIcon from "../../components/LoginComponents/GoogleIcon/GoogleIcon";
import MetaIcon from "../../components/LoginComponents/MetaIcon/MetaIcon";
import AppleIcon from "../../components/LoginComponents/AppleIcon/AppleIcon";

const login = () => {
  return (
    <div className="background">
      <Header />
      <div className="loginbody">
        <div className="loginbody__left">
          <p className="loginbody__left__Text">
            Let's learn American Sign Language (ASL) with our Disney friends
          </p>
          <img className="loginbody__left__Img" src={DisneyFriendsImg}></img>
        </div>

        <div className="loginbody__right">
          <p className="loginbody__right__Text">Login Here</p>
          <EmailInput />
          <PasswordInput />
          <SignInButton />
          <CreateAccountButton />
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
