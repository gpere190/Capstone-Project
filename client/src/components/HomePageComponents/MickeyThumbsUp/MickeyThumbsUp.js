import React from "react";
import submitHand from "../../../assets/images/mickey_thumbsUp.png";
import "./MickeyThumbsUp.scss";

function MyButton() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    alert("Button Clicked!");
  };

  return (
    <div>
      <button onClick={handleClick} className="myButton">
        <img className="body__submitThumbsup" src={submitHand}></img>
      </button>
    </div>
  );
}

export default MyButton;
