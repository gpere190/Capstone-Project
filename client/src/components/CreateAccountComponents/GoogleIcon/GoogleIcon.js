import React from "react";
import "./GoogleIcon.scss";
import googleIcon from "../../../assets/images/GoogleIcon.png";

function GoogleIcon() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="googleIcon">
      <img className="googleIcon__image" src={googleIcon}></img>
    </button>
  );
}

export default GoogleIcon;
