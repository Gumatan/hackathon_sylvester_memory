import React from "react";
import "./Game.scss";
import Card from "./Card";

let ingredients = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
ingredients = ingredients.concat(ingredients);
const shuffleArr = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
ingredients = shuffleArr(ingredients);

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: null,
      firstCard: null,
      secondCard: null,
      isMatched: false
    };
  }

  updateCurrentCard = item => {
    this.setState({ currentCard: item });
  };

  isMatched = () => {
    if (this.state.firstCard === this.state.currentCard) {
    }
  };

  componentDidUpdate() {
    if (this.state.firstCard === null && this.state.currentCard) {
      this.setState({ firstCard: this.state.currentCard, currentCard: null });
      console.log(this.state.currentCard);
    } else if (this.state.secondCard === null && this.state.currentCard) {
      this.isMatched();
      this.setState({ secondCard: this.state.currentCard, currentCard: null });
      console.log(this.state.currentCard);
    }
  }

  render() {
    return (
      <div className="game">
        <h1>Sylvester Memory</h1>
        <div id="boardgame">
          {ingredients.map((item, i) => {
            return (
              <Card item={item} updateCurrentCard={this.updateCurrentCard} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Game;
