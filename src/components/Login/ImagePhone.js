import { useEffect, useState } from "react";
import "../../styles/login/imagePhone.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "react-slideshow-image/dist/styles.css";

function ImagePhone() {
  const slideImages = [
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(slideImages[1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        slideImages[Math.floor(Math.random() * slideImages.length)]
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  let ok = "hello";

  return (
    <div className="imagePhone">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={3000}
      >
        <img className="imageSlide" src={currentImage} />
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default ImagePhone;
