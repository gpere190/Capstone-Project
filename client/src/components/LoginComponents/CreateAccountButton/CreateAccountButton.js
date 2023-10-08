import React from "react";
import "./CreateAccountButton.scss";

function CreateAccountButton() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="createAccountButton">
      Create new account
    </button>
  );
}

export default CreateAccountButton;
