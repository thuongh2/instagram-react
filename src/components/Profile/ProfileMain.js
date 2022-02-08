import "../../styles/profile/profileMain.scss";
import Navigation from "../Main/Navigation.js";
import ProfileInfo from "./ProfileInfo.js";
import Post from "./Post.js";
import Footer from "../Main/Footer";

function ProfileMain() {
  return (
    <div className="profileMain">
      <Navigation />
      <div className="profile">
        <div className="profileInfo">
          <ProfileInfo />
        </div>

        <Post />

        <div>
          <Footer size="big"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
