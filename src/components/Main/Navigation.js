import "../../styles/Navigation.scss";
import logo from "../../images/instagramLogo.png";
import searchIcon from "../../images/searchIcon.png";
import Menu from "./Menu.js";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <Link to="">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="instagram logo" />
          <input className="searchText" placeholder="Search"></input>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
