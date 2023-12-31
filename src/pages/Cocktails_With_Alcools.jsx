import { NavLink } from "react-router-dom";
import cocktailsData from "../assets/temporaireData/CocktailsAvecAlcool.json";

function Cocktails_With_Alcools() {
  return (
    <>
      <h1 className="cocktail-wa">Cocktails Avec Alcools</h1>
      <nav className="list-cocktail">
        {cocktailsData.cocktails.map(cocktail => (
          <NavLink
            key={cocktail.id}
            className="App-Recipe-Link"
            to={`/this_cocktail/${cocktail.id}`}
          >
            {cocktail.name}
            <div>
              <img src={cocktail.photo} alt={cocktail.name} />
            </div>
          </NavLink>
         
        ))}
      </nav>
      {/* <Pagination count={10} /> */}
    </>
  );
}

export default Cocktails_With_Alcools;

