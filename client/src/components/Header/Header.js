import "./Header.scss";
import desktopLogo from "../../assets/images/logo_desktop.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img className="header__logo__image" src={desktopLogo}></img>
      </NavLink>
      <div className="header__wrapper">
        <NavLink className="header__login" to={"/login"}>
          Login
        </NavLink>
        <NavLink className="header__account">Create Account</NavLink>
        <NavLink className="header__menu">&#9776;</NavLink>
      </div>
    </div>
  );
};

export default Header;
