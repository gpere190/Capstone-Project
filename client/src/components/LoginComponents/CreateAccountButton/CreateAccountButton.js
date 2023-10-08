import React from "react";
import "./CreateAccountButton.scss";
import { NavLink } from "react-router-dom";

function CreateAccountButton() {
  const handleClick = () => {};

  return (
    <NavLink to="/create-account">
      <button onClick={handleClick} className="createAccountButton">
        Create new account
      </button>
    </NavLink>
  );
}

export default CreateAccountButton;
