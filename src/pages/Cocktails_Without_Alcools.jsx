import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import cocktailsDataSansAlcool from "../assets/temporaireData/CocktailsSansAlcool.json"

function Cocktails_Without_Alcools() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    setCocktails(cocktailsDataSansAlcool.cocktails);
  }, []);

  return (
    <>
      <h1 className="cocktail-wa">Cocktails Sans Alcools</h1>
      <nav className="list-cocktail">
        {cocktails.map(cocktail => (
          <NavLink
            key={cocktail.id}
            className="App-Recipe-Link"
            to={`/this_cocktail/${cocktail.id}`} // Ajouter l'ID du cocktail dans l'URL
          >
            {cocktail.name}
            <div>
              <img src={cocktail.photo} alt={cocktail.name} />
            </div>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Cocktails_Without_Alcools;
