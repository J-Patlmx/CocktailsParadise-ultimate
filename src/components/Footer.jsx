import { Link } from "react-router-dom"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"

function Footer() {
  return (
    <>
    <Link className="Footerlink footer-Texte" to={"https://j-patlmx.github.io/businessCard-main/"} >©Cocktails Paradise par DevDread</Link>
    <Link  to={"https://www.facebook.com/officiel.Cocktails.Paradise/"}><img src={facebook}/></Link>
    <Link  to={"https://www.instagram.com/cocktails_paradise/"}><img src={instagram}/></Link>
    </>
  )
}

export default Footer