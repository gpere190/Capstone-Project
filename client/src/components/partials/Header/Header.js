import React, { useContext } from "react";
import "./Header.scss";
import desktopLogo from "../../../assets/images/misc/logo_desktop.png";
import { NavLink } from "react-router-dom";
import UserContext from "../../../utils/UserContext";
import Streak from "./Streak";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const logOut = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="header">
      {loggedInUser ? (
        <>
          {/* Logo */}
          <NavLink to={"/"}>
            <img className="header__logo__image" src={desktopLogo}></img>
          </NavLink>

          <div className="header__wrapper">
            {/* Welcome */}
            <div className="header__login">
              {" "}
              Welcome, {loggedInUser.username}!
            </div>
            <Streak />
            {/* Logout */}
            <NavLink className="header__login" to={"/login"} onClick={logOut}>
              Logout
            </NavLink>
          </div>
        </>
      ) : (
        <>
          {/* Logo */}
          <NavLink to={"/"}>
            <img className="header__logo__image" src={desktopLogo}></img>
          </NavLink>

          <div className="header__wrapper">
            {/* Login */}
            <NavLink className="header__login" to={"/login"}>
              Login
            </NavLink>

            {/* Create Account */}
            <NavLink to="/register" className="header__account">
              Create Account
            </NavLink>

            {/* Menu */}
            {/* <NavLink className="header__menu">&#9776;</NavLink> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
