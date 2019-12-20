import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Card.scss";

const Card = ({ item, id }) => {
  const currentCard = useSelector(state => state.currentCard);
  const secondCardId = useSelector(state => state.secondCard.id);
  const flip = useSelector(state => state.cards[id].flip);
  const [hide, toggleHide] = useState(true);
  const dispatch = useDispatch();

  const handleClick = e => {
    if (hide) {
      dispatch({ type: "TOGGLE_FLIP", id: id });
      setTimeout(() => {
        toggleHide(!hide);
      }, 140);
      if (currentCard.id !== id) {
        dispatch({
          type: "UPDATE_CURENT_CARD",
          currentCard: { id: id, value: item }
        });
      }
    }
  };
  useEffect(() => {
    console.log("useEffectCard");

    if (!flip) {
      setTimeout(() => {
        toggleHide(true);
      }, 140);
    }
  }, [flip]);

  return (
    <div
      className={flip ? "card" : "card flip"}
      onClick={!secondCardId && handleClick}
    >
      {console.log("RenderCard")}
      {hide ? <img src="/doscarte.png" /> : <img src={item} className="food" />}
    </div>
  );
};

export default Card;
