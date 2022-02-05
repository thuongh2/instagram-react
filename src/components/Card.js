import "../styles/card.scss";
import Profile from "./Profile.js";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu.js";
import Comment from "./Comment.js";

function Card(props) {
  const { storyBorder, image, comments, likeByText, likeByNumber, hours } =
    props;
  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={true} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Like by <strong> {likeByText} </strong> and
          <strong>{likeByNumber} orders</strong>
        </span>
      </div>
      <div className="comment">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">
            <input type="text" placeholder="Add comment"/>
        </div>
        <div className="postText">POST</div>
      </div>
    </div>
  );
}

export default Card;
