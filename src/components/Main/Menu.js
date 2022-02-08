import "../../styles/Menu.scss";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Explore } from "../../images/explore.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import image from "../../images/profile.jpg";
import ProfileIcon from "./ProfileIcon.js";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <Home className="icon" />
      </Link>
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
      <Link to="profile">
        <ProfileIcon iconSize="small" image={image} storyBorder={true} />
      </Link>
    </div>
  );
}

export default Menu;
