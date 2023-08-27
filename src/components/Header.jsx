import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import MusicPlayer from "./audioplayer";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`Header ${isMenuOpen ? "open" : ""}`}>
      <img src={logo} className="App-logo" alt="logo" />
      <MusicPlayer />
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`Header-link ${isMenuOpen ? "open" : ""}`}>
        <NavLink className="App-header-link" to={"/home"}>
          Accueil
        </NavLink>
        <NavLink className="App-header-link" to={"/cocktail"}>
          Cocktails
        </NavLink>
        <NavLink className="App-header-link" to={"/Contact"}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
