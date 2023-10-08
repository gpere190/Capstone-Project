import React from "react";
import "./ProfileButton.scss";
import { NavLink } from "react-router-dom";

const ProfileButton = ({ profile, profileNum }) => {
  const handleClick = () => {
    alert("Hello world! " + profileNum);
  };

  return (
    <img
      className="loginbody__left__characters__prof"
      src={profile}
      onClick={handleClick}
    ></img>
  );
};

export default ProfileButton;
