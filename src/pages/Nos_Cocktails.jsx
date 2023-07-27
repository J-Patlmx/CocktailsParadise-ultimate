import {NavLink} from "react-router-dom"


function Nos_Cocktails() {
  return (<>
      <h1 className="nosCocktails">Nos Cocktails</h1>
  <div className="Cocktail-link-general">
    <nav className="Cocktail-link">
         {/* Utiliser l'attribut "to" pour spécifier l'URL de destination */}

            <NavLink className="App-Cocktail-link" to={"/cocktailSA"}>Nos cocktails sans alcools</NavLink>
            <NavLink className="App-Cocktail-link" to={"/cocktailAA"}>Nos cocktails avec alcools</NavLink>

          </nav>
 </div></> )
}

export default Nos_Cocktails