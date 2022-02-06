import "../../styles/stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story.js";

function Stories() {
  return (
    <div class="stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
}

export default Stories;
