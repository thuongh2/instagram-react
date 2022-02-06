import "../../styles/suggestion.scss";
import Profile from "./Profile";

function Suggestion() {
  return (
    <div className="suggestion">
      <div className="titleContainer">
        <div className="title">Suggestion For You</div>
        <a href="/">
          See All
        </a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  );
}

export default Suggestion;
