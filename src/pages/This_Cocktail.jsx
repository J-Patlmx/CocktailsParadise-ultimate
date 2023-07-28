import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import cocktailsDataAvecAlcool from "../assets/temporaireData/CocktailsAvecAlcool.json";
import cocktailsDataSansAlcool from "../assets/temporaireData/CocktailsSansAlcool.json"; // Remplacez le chemin par le chemin correct vers votre fichier JSON pour les cocktails sans alcool

function ThisCocktail() {
  const { cocktailId } = useParams();
  let cocktail;

  // Chercher le cocktail correspondant à l'ID dans les données des cocktails avec alcool
  cocktail = cocktailsDataAvecAlcool.cocktails.find(cocktail => cocktail.id === cocktailId);

  // Si le cocktail n'est pas trouvé dans les données des cocktails avec alcool, chercher dans les données des cocktails sans alcool
  if (!cocktail) {
    cocktail = cocktailsDataSansAlcool.cocktails.find(cocktail => cocktail.id === cocktailId);
  }

  if (!cocktail) {
    return <p>Ce cocktail nexiste pas.</p>;
  }

  return (
    <>
      <div className="This-Cocktail-Card">
        <h1>{cocktail.name}</h1>
        <div className="Ingredients-et-Img">
          <img src={cocktail.image} alt={cocktail.name} />
          <div className="list-ingredients">
          <h2>Ingrédients :</h2>
          <ul>
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul></div>
        </div>
        <p>{cocktail.instructions}</p>
      </div>

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
    </>
  );
}

export default ThisCocktail;
