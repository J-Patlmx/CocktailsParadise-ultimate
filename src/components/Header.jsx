import {NavLink} from "react-router-dom"
import logo from "../assets/logo2.png"
function Header() {
  return (
<div className="Header">
<img src={logo} className="App-logo" alt="logo" />
<nav className="Header-link">
         {/* Utiliser l'attribut "to" pour spécifier l'URL de destination */}
            <NavLink className="App-header-link" to={"/home"} >Accueil</NavLink>
            <NavLink className="App-header-link" to={"/cocktail"}>Nos cocktails </NavLink>

          </nav>

    </div>
  )
}

export default Header