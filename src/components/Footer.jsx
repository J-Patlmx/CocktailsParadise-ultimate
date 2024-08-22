import { Link } from "react-router-dom"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"

function Footer() {
  return (
    <div className="Footerlink">
    <Link className="footer-Texte" to={"https://dev-dread.vercel.app"} >©Cocktails Paradise par DevDread</Link>
    <Link className="footer-Texte-rs" to={"https://www.facebook.com/officiel.Cocktails.Paradise/"}><img className="Img-Footer-Rs" src={facebook} alt="lettre f de facebook"/> </Link>
    <Link className="footer-Texte-rs" to={"https://www.instagram.com/cocktails_paradise/"}><img className="Img-Footer-Rs" src={instagram} alt="appareil photo d'instagram "/> </Link>
    </div>
  )
}

export default Footer