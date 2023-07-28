import { useParams } from "react-router-dom";
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
      <div>
        <h1>{cocktail.name}</h1>
        <img src={cocktail.image} alt={cocktail.name} />
        <ul>
          {cocktail.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>{cocktail.instructions}</p>
      </div>
    </>
  );
}

export default ThisCocktail;
