import React, { useContext } from "react";
import sparkles from "../../../assets/images/misc/sparkles.png";
import "./Streak.scss";
import UserContext from "../../../utils/UserContext";

const Streak = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="streak">
      <img className="streak__sparkles" src={sparkles}></img>;
      <div className="streak__value">{loggedInUser.streak}</div>
    </div>
  );
};

export default Streak;
