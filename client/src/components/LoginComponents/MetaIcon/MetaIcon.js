import React from "react";
import "./MetaIcon.scss";
import metaIcon from "../../../assets/images/MetaIcon.png";

function MetaIcon() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick} className="metaIcon">
      <img className="metaIcon__image" src={metaIcon}></img>
    </button>
  );
}

export default MetaIcon;
