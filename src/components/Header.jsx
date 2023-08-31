import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import MusicPlayer from "./audioplayer";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`Header ${isMenuOpen ? "open" : ""}`}>
      <img src={logo} className="App-logo" alt="un palmier vert un verre de cocktail jaune et une note de musique rouge" />
      <button className={`menu-button ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        ☰
      </button>
      <button className={`close-button ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
        x
      </button>
      <nav className={`Header-link ${isMenuOpen ? "open" : ""}`}>
        <NavLink className="App-header-link" to={"/home"} onClick={closeMenu}>
        <i className="fa-solid fa-house"></i>Accueil
        </NavLink>
        <NavLink className="App-header-link " to={"/cocktail"} onClick={closeMenu}>
        <i className="fa-solid fa-martini-glass"></i>Cocktails
        </NavLink>
        <NavLink className="App-header-link" to={"/Contact"} onClick={closeMenu}>
        <i className="fa-regular fa-envelope"></i>Contact
        </NavLink>
        <div className="radiolecteur">
        <h6>Lecteur Radio</h6>
      <MusicPlayer />
        </div>
      </nav>
    </div>
  );
}

export default Header;
