import "./Header2.scss";
import desktopLogo from "../../assets/images/logo_desktop.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img className="header__logo__image" src={desktopLogo}></img>
      </NavLink>
    </div>
  );
};

export default Header;
