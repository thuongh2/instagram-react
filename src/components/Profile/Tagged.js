import Image from "./ImagePost.js";
import "../../styles/profile/postImage.scss";

function Tagged(){
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
      const image = `https://picsum.photos/300/${getRndInteger(300, 400)}`;
    
      return (
        <div className="postImage">
          <Image image={image} />
          <Image image={image} />
          <Image image={image} />
          <Image image={image} />
          <Image image={image} />
          <Image image={image} />
        </div>
      );
}

export default Tagged;