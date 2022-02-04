import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

function Sidebar() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div class="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Sidebar;
