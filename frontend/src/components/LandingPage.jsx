import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.scss";

function LandingPage() {
  return <div className="landingPage">
    <h1>(Sylvester's <span>Memories)</span></h1>
    <p>L'équipe des pignoufz de la noëleuh vous présente son (extraordinaire) jeu de Noël : une série de cartes, face cachée, apparait. Le joueur retourne 2 cartes de son choix.
      Si les cartes ne sont pas identiques, les cartes se retournent face cachée de nouveau. Si les cartes révélent 2 ingrédients identiques, le joueur peut tirer 2 nouvelles cartes jusqu'à trouver toutes les paires.
      Quand le joueur a trouvé toutes les paires, une recette correspondant aux ingrédients est affichée. <br/>
      Composition de l'équipe: Pauline Roche, Arnaut Demaret, Adrien Imberdis, Mary Deroost, Orianne Tanguy pour le front-end - Madjoula Toure, Marceline Tossou, Gautier Blairon pour le back-end.
    </p>

      <Link className="button" to="/main"> Enter the Game !</Link>
  </div>
}

export default LandingPage;


