import React, { useState } from "react";
import "./Card.scss";

function Card({ item, updateCurrentCard }) {
  const [hide, toggleHide] = useState(true);
  const [flip, toggleflip] = useState(false);
  const [isFound, toggleIsFound] = useState(false);
  return (
    <div
      className={flip ? "card" : "card flip"}
      onClick={() => {
        toggleflip(!flip);
        setTimeout(() => {
          toggleHide(!hide);
        }, 140);
        updateCurrentCard(item);
      }}
    >
      {hide ? <img src="/doscarte.png" /> : <p>{item}</p>}
    </div>
  );
}

export default Card;
