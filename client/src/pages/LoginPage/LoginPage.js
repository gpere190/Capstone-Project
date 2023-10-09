import "./LoginPage.scss";
import React from "react";
import Header from "../../components/Header/Header2";
import Footer from "../../components/Footer/Footer";
import DisneyFriendsImg from "../../assets/images/misc/disneyFriends.webp";
import EmailInput from "../../components/partials/EmailInput/EmailInput";
import PasswordInput from "../../components/partials/PasswordInput/PasswordInput";
import SignInButton from "../../components/LoginComponents/SignInButton/SignInButton";
import CreateAccountButton from "../../components/LoginComponents/CreateAccountButton/CreateAccountButton";
import Icon from "../../components/partials/Icon/Icon";
import GoogleIcon from "../../assets/images/misc/GoogleIcon.png";
import MetaIcon from "../../assets/images/misc/MetaIcon.png";
import AppleIcon from "../../assets/images/misc/AppleIcon.png";

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
            <Icon icon={GoogleIcon} />
            <Icon icon={MetaIcon} />
            <Icon icon={AppleIcon} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default login;
