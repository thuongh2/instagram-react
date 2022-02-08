import "../../styles/profile/profileInfo.scss";
import ProfileIcon from "../Main/ProfileIcon";
import { ReactComponent as Circle } from "../../images/circle.svg";

function ProfileInfo() {
  return (
    <div className="profileIn">
      <div className="profileIcon">
        <ProfileIcon iconSize="big" />
      </div>
      <div className="info">
        <div className="username">
          <div className="">
            <h2>Hoai Thuong</h2>
          </div>
          <div className="button">
            <button>Edit profile</button>
          </div>
          <div className="circleButoon">
            <Circle />
          </div>
        </div>
        <div className="following">
          <div className="post item">0 post</div>
          <div className="followers item">0 followers</div>
          <div className="following item">0 following</div>
        </div>
        <div className="name">Thuong</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
