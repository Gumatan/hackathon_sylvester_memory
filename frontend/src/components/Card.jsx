import React, { useState } from "react";
import "./Card.scss";

function Card({ item, updateCurrentCard, id }) {
  const [hide, toggleHide] = useState(true);
  const [flip, toggleflip] = useState(false);
  const [isFound, toggleIsFound] = useState(false);

  const handleClick = () => {
    toggleflip(true);
    setTimeout(() => {
      toggleHide(false);
    }, 140);
    updateCurrentCard(item, id);
  };

  return (
    <div className={flip ? "card" : "card flip"} onClick={handleClick}>
      {hide ? <img src="/doscarte.png" /> : <p>{item}</p>}
    </div>
  );
}

export default Card;
