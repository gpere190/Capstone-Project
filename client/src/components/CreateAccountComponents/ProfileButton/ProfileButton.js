import React, { useContext } from "react";
import "./ProfileButton.scss";
import ProfileContext from "../../../utils/ProfileContext";

const ProfileButton = ({ profile }) => {
  const { profileIcon, setProfileIcon } = useContext(ProfileContext);

  const handleClick = () => {
    setProfileIcon(profile);
  };

  return (
    <img
      className="loginbody__left__characters__profiles"
      style={{
        border: profile == profileIcon ? "3px solid white" : "none",
        borderRadius: "50%",
      }}
      src={profile}
      onClick={handleClick}
    ></img>
  );
};

export default ProfileButton;
