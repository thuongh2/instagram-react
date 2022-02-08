import "../../styles/profile/profileMain.scss";
import Navigation from "../Main/Navigation.js";
import ProfileInfo from "./ProfileInfo.js";
import Post from "./Post.js";

function ProfileMain() {
  return (
    <div className="profileMain">
      <Navigation />
      <div className="profile">
        <div className="profileInfo">
          <ProfileInfo />
        </div>
        <div className="photo">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
