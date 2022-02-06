import "../../styles/Menu.scss";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Explore } from "../../images/explore.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import image from "../../images/profile.jpg"
import ProfileIcon from "./ProfileIcon.js"

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon"/>
      <Notifications className="icon"/>
      <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
}

export default Menu;