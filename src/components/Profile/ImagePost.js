import "../../styles/profile/image.scss";

function ImagePost(props) {
  return (
      <div className="imageIcon">
        <img src={props.image} alt="user" />
      </div>
  );
}

export default ImagePost;
