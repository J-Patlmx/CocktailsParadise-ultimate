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
      <h1>Cocktails_Without_Alcools</h1>
      <nav className="nav-CAA">
        {cocktails.map(cocktail => (
          <NavLink
            key={cocktail.id}
            className="App-CocktailsSA-link"
            to={`/this_cocktail/${cocktail.id}`} // Ajouter l'ID du cocktail dans l'URL
          >
            {cocktail.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Cocktails_Without_Alcools;



// import { NavLink } from "react-router-dom"

// function Cocktails_Without_Alcools() {
//   return (
//     <>
//       <h1>Cocktails_Without_Alcools</h1>
//     <nav className="nav-CAA">
  

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°1 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°2 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°3 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°4 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°5 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°6 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°7 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°8 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°9 </NavLink>

//                     <NavLink className="App-CocktailsSA-link" to={"/this_cocktail"}> Cocktails n°10 </NavLink>
     
//     </nav>
//     </>
  
//   )
// }

// export default Cocktails_Without_Alcools