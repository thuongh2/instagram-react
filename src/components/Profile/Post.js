import { Link, Outlet, Route, Routes } from "react-router-dom";
import "../../styles/profile/post.scss";

function Post() {
  return (
    <>
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
      <Outlet/>
    </>
  );
}

export default Post;
