import { NavLink } from "react-router-dom";
import cocktailsData from "../assets/temporaireData/CocktailsAvecAlcool.json";

function Cocktails_With_Alcools() {
  return (
    <>
      <h1>Cocktails_With_Alcools</h1>
      <nav className="nav-CAA">
        {cocktailsData.cocktails.map(cocktail => (
          <NavLink
            key={cocktail.id}
            className="App-CocktailsAA-link"
            to={`/this_cocktail/${cocktail.id}`}
          >
            {cocktail.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Cocktails_With_Alcools;

