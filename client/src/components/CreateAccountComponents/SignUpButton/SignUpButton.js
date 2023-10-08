import React from "react";
import "./SignUpButton.scss";

function SignUpButton() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="signInButton">
      Sign Up
    </button>
  );
}

export default SignUpButton;
