import {NavLink} from "react-router-dom"


function Nos_Cocktails() {
  return (<>
      <h1 className="Title-nosCocktails">Nos Cocktails</h1>
  <div className="Cocktail-link-general">
    <nav className="Cocktail-link">
         {/* Utiliser l'attribut "to" pour spécifier l'URL de destination */}
<div className="Cocktails-choise">
            <NavLink className="App-Cocktail-link" to={"/cocktailSA"}>Nos cocktails sans alcools</NavLink>
            <img src="https://zupimages.net/up/23/30/hod4.jpg" alt="un cocktail" />          
        
            </div>

            <div className="Cocktails-choise">
            <NavLink className="App-Cocktail-link" to={"/cocktailAA"}>Nos cocktails avec alcools</NavLink>
            <img src="https://zupimages.net/up/23/30/cgpj.jpg" alt="un cocktail" />          
                    

            </div>
          </nav>
 </div></> )
}

export default Nos_Cocktails