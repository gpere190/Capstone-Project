import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserLoginForm.scss";
import DisneyFriendsImg from "../../../assets/images/misc/disneyFriends.webp";
//import EmailInput from "../../partials/EmailInput/EmailInput";
//import PasswordInput from "../../partials/PasswordInput/PasswordInput";
import SignInButton from "../SignInButton/SignInButton";
import CreateAccountButton from "../CreateAccountButton/CreateAccountButton";
import Icon from "../../Icon/Icon";
import GoogleIcon from "../../../assets/images/misc/GoogleIcon.png";
import MetaIcon from "../../../assets/images/misc/MetaIcon.png";
import AppleIcon from "../../../assets/images/misc/AppleIcon.png";

const UserLoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  // useEffect(() => {
  //   // Load data from the database using Axios and the API URL from .env
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/api/email/${inputprop}`)
  //     .then((response) => {
  //       setInputValue(response.data); // Assuming the response is an array of objects
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching email:", error);
  //     });
  // }, [inputprop]); // The empty dependency array ensures the effect runs only once

  const validateEmail = (event) => {
    const newValue = event.target.value;
    // Check if the input matches the desired pattern
    if (/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(newValue)) {
      setInputValue(newValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents from refreshing the page
    setSubmittedValue(inputValue);
  };

  return (
    <div className="loginbody">
      <div className="loginbody__left">
        <p className="loginbody__left__Text">
          Let's learn American Sign Language (ASL) with our Disney friends
        </p>
        <img
          className="loginbody__left__Img"
          src={DisneyFriendsImg}
          alt="DisneyFriends"
        ></img>
      </div>

      <div className="loginbody__right">
        <p className="loginbody__right__Text">Login Here</p>
        <div>`Submitted Value ${submittedValue}`</div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="email__textbox"
            type="email"
            id="email"
            required
            placeholder="Email"
            onChange={validateEmail}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            // value={}
            title="Email for example: abc123@gmail.com"
          />
          <label>Password</label>
          <input
            className="password__textbox"
            type="password"
            placeholder="Password"
            // value={}
            // onChange={}
            required
          />
          <SignInButton />
          <CreateAccountButton />
          <p className="loginbody__right__continuewith">Or continue with</p>
          <div className="loginbody__right__platformIcons">
            <Icon icon={GoogleIcon} />
            <Icon icon={MetaIcon} />
            <Icon icon={AppleIcon} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLoginForm;
