import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserLoginForm.scss";
import DisneyFriendsImg from "../../../assets/images/misc/disneyFriends.webp";
import CreateAccountButton from "../CreateAccountButton/CreateAccountButton";
import Icon from "../../Icon/Icon";
import GoogleIcon from "../../../assets/images/misc/GoogleIcon.png";
import MetaIcon from "../../../assets/images/misc/MetaIcon.png";
import AppleIcon from "../../../assets/images/misc/AppleIcon.png";
import UserContext from "../../../utils/UserContext";

const UserLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.auth) {
          localStorage.setItem("token", response.data.token);
          setLoggedInUser(response.data.user);
          navigate("/");
        } else {
          alert(response.data.message);
        }
      });
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

        <form onSubmit={login}>
          <label>Username</label>
          <input
            className="username__textbox"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            className="password__textbox"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signInButton">
            Sign In
          </button>

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
