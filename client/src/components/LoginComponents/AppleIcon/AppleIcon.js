import React from "react";
import "./AppleIcon.scss";
import appleIcon from "../../../assets/images/AppleIcon.png";

function AppleIcon() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="appleIcon">
      <img className="appleIcon__image" src={appleIcon}></img>
    </button>
  );
}

export default AppleIcon;
