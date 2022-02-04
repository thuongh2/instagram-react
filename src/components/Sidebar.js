import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile.js";
import Suggestion from "./Suggestion.js";
import Footer from "./Footer.js";
import image from "../images/profile.jpg";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="thuong"
          caption="Vo Hoai Thuong"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestion />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
