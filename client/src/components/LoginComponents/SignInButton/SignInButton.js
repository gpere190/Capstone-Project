import React from "react";
import "./SignInButton.scss";

function SignInButton() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="signInButton">
      Sign In
    </button>
  );
}

export default SignInButton;
