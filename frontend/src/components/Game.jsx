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
      currentCard: {
        value: null,
        id: null
      },
      firstCard: { value: null, id: null },
      secondCard: {
        value: null,
        id: null
      },
      isMatched: false
    };
  }

  updateCurrentCard = (value, id) => {
    if (this.state.currentCard.id !== id) {
      this.setState({ currentCard: { value, id } });
    }
  };

  isMatched = () => {
    if (this.state.firstCard.value === this.state.secondCard.value) {
      console.log("ok");
      this.setState({
        isMatched: true
      });
    } else {
      this.setState({
        firstCard: { value: null, id: null },
        secondCard: { value: null, id: null }
      });
      console.log("you lose loser");
    }
  };

  async componentDidUpdate() {
    if (this.state.firstCard.value === null && this.state.currentCard.value) {
      this.setState({
        firstCard: this.state.currentCard,
        currentCard: { value: null, id: null }
      });
      console.log(this.state.currentCard);
    } else if (
      this.state.secondCard.value === null &&
      this.state.currentCard.value
    ) {
      await this.setState({
        secondCard: this.state.currentCard,
        currentCard: { value: null, id: null }
      });

      console.log(this.state.secondCard);
      this.isMatched();
    }
  }

  render() {
    return (
      <div className="game">
        <h1>
          {"(Sylvester"} <span>{"Memory)"}</span>{" "}
        </h1>
        <div id="boardgame">
          {ingredients.map((item, i) => {
            return (
              <Card
                key={i}
                item={item}
                id={i}
                updateCurrentCard={this.updateCurrentCard}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Game;
