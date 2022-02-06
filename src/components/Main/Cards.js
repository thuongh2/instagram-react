import "../../styles/cards.scss";
import Stories from "./Stories.js";
import Card from "./Card.js";

function Cards() {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  let numberRandom = getRndInteger(900, 1000);
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div class="cards">
      <Stories />
      <Card
        accountName="rafaaa"
        storyBorder={true}
        image= {`https://picsum.photos/800/${getRndInteger(900, 1000)}`}
        comments={commentsTwo}
        likeByText="dadatlacak"
        likeByNumber={90}
        hours={6}
      />

      <Card
        accountName="rafaaa"
        storyBorder={true}
        image= {`https://picsum.photos/800/${getRndInteger(900, 1000)}`}
        comments={commentsTwo}
        likeByText="dadatlacak"
        likeByNumber={90}
        hours={6}
      />
      <Card
        accountName="rafaaa"
        storyBorder={true}
        image= {`https://picsum.photos/800/${getRndInteger(900, 1000)}`}
        comments={commentsTwo}
        likeByText="dadatlacak"
        likeByNumber={90}
        hours={6}
      />
      <Card
        accountName="rafaaa"
        storyBorder={true}
        image= {`https://picsum.photos/800/${getRndInteger(900, 1000)}`}
        comments={commentsTwo}
        likeByText="dadatlacak"
        likeByNumber={90}
        hours={6}
      />
    </div>
  );
}

export default Cards;
