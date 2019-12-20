import React from "react";
import "./Recipe.scss";

function Recipe(props) {
  console.log(props);
  const id = props.match.params.id;
  const bdd = props.bdd[parseInt(id)];
  return (
    <div className="recipe">
      {console.log("renderRecipe")}
      <h1>{bdd.name}</h1>
      <ul>
        {bdd.ingredients.map(e => (
          <li>{e}</li>
        ))}
      </ul>{" "}
      <ul className="ulprepa">
        {bdd.preparation.map(e => (
          <li className="prepa">{e}</li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default Recipe;
