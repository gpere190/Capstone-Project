import React from "react";
import "./HaveAccountButton.scss";
import { NavLink } from "react-router-dom";

function HaveAccountButton() {
  const handleClick = () => {};

  return (
    <NavLink to="/login">
      <button onClick={handleClick} className="haveAccountButton">
        Already have an account
      </button>
    </NavLink>
  );
}

export default HaveAccountButton;
