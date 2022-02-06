import "../../styles/Navigation.scss";
import logo from "../../images/instagramLogo.png";
import searchIcon from "../../images/searchIcon.png";
import Menu from "./Menu.js";


function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="" />
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
