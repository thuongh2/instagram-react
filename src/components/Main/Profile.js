import "../../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../../data/users";

function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    image,
    captionSize,
    hideAccountName,
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={true}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/" className="">{urlText}</a>
    </div>
  );
}

export default Profile;
