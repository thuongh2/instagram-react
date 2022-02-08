import { Link, Outlet } from "react-router-dom";
import "../../styles/profile/post.scss";

function Post() {
  return (
    <div>
      <div className="post">
        <div className="item itemSelected">
          <Link to="post">POSTS</Link>
        </div>
        <div className="item">
          <Link to="saved">SAVED</Link>
        </div>
        <div className="item">
          <Link to="tagged">TAGGED</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Post;
