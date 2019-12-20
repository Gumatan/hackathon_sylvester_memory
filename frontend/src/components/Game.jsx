import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Game.scss";
import Card from "./Card";

let ingredients = [
  "/thank_2.svg",
  "/onion.svg",
  "/pain.svg",
  "/cheese.svg",
  "/egg.svg",
  "/sss.svg",
  "/steak.svg",
  "/bacon.svg",
  "/mushroom.svg",
  "/nodanero_Cheese.svg"
];
ingredients = ingredients.concat(ingredients);
const shuffleArr = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
ingredients = shuffleArr(ingredients);

const Game = () => {
  const firstCard = useSelector(state => state.firstCard);
  const secondCard = useSelector(state => state.secondCard);
  const dispatch = useDispatch();

  const isMatched = () => {
    if (firstCard.value === secondCard.value && secondCard.value !== null) {
      console.log("ok");
      dispatch({ type: "PAIR_RESET" });
    } else if (secondCard.value !== null) {
      setTimeout(() => {
        dispatch({ type: "RESET_CARDS", ids: [firstCard.id, secondCard.id] });
        console.log("you lose loser");
      }, 1000);
    }
  };

  useEffect(() => {
    console.log("useEffetGame");
    if (secondCard !== null && firstCard !== null) {
      isMatched();
    }
  }, [secondCard]);

  return (
    <div className="game">
      {console.log("renderGame")}
      <h1>
        {"(Sylvester's "}
        <span>{"Memory)"}</span>
      </h1>
      <div id="boardgame">
        {ingredients.map((item, i) => {
          return <Card key={i} item={item} id={i} />;
        })}
      </div>
    </div>
  );
};

export default Game;
