import React from "react";
import "./Icon.scss";

function Icon({ icon }) {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="icon">
      <img className="icon__image" src={icon}></img>
    </button>
  );
}

export default Icon;
