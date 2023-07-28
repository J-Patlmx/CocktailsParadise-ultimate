import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import cocktailsDataAvecAlcool from "../assets/temporaireData/CocktailsAvecAlcool.json";
import cocktailsDataSansAlcool from "../assets/temporaireData/CocktailsSansAlcool.json" // Remplacez le chemin par le chemin correct vers votre fichier JSON pour les cocktails sans alcool

function Cocktail() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailsSansAlcool, setCocktailsSansAlcool] = useState([]);

  useEffect(() => {
    // Charger les données des cocktails avec alcool depuis le fichier JSON
    setCocktails(cocktailsDataAvecAlcool.cocktails);

    // Charger les données des cocktails sans alcool depuis le fichier JSON
    setCocktailsSansAlcool(cocktailsDataSansAlcool.cocktails);
  }, []);

  return (
    <>
      <div className="testmegawrap">
        {/* Afficher les cocktails avec alcool */}
        {cocktails.map(cocktail => (
          <div key={cocktail.id} className="titlewrap">
            <h1 className="h1CocktailPattern">{cocktail.name}</h1>
            <img className="imgtest" src={cocktail.image} alt={cocktail.name} />

            <ul>
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <p>{cocktail.instructions}</p>

            {/* Navigations */}
            <nav className="into_Cocktail_Selection">
              <NavLink className="App-Cocktail-link" to={"/cocktailSA"}>
                Revenir à la liste Sans alcools
              </NavLink>
              <NavLink className="App-Cocktail-link" to={"/"}>
                Revenir à lAccueil
              </NavLink>
              <NavLink className="App-Cocktail-link" to={"/cocktailAA"}>
                Revenir à la liste Avec alcools
              </NavLink>
            </nav>
          </div>
        ))}

        {/* Afficher les cocktails sans alcool */}
        {cocktailsSansAlcool.map(cocktail => (
          <div key={cocktail.id} className="titlewrap">
            <h1 className="h1CocktailPattern">{cocktail.name}</h1>
            <img className="imgtest" src={cocktail.image} alt={cocktail.name} />

            <ul>
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <p>{cocktail.instructions}</p>

            {/* Navigations */}
            <nav className="into_Cocktail_Selection">
              <NavLink className="App-Cocktail-link" to={"/cocktailSA"}>
                Revenir à la liste Sans alcools
              </NavLink>
              <NavLink className="App-Cocktail-link" to={"/"}>
                Revenir à lAccueil
              </NavLink>
              <NavLink className="App-Cocktail-link" to={"/cocktailAA"}>
                Revenir à la liste Avec alcools
              </NavLink>
            </nav>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cocktail;
