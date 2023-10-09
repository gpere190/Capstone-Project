import React from "react";
import submitHand from "../../../assets/images/misc/mickey_thumbsUp.png";
import "./MickeyThumbsUp.scss";

function MickeyThumbsUpButton() {
  return (
    <div>
      <button type="submit" className="mickeyThumbsUpButton">
        <img className="body__submitThumbsup" src={submitHand}></img>
      </button>
    </div>
  );
}

export default MickeyThumbsUpButton;
