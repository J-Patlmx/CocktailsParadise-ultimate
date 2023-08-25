import { Link } from "react-router-dom"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"

function Footer() {
  return (
    <>
    <Link className="Footerlink footer-Texte" to={"https://j-patlmx.github.io/businessCard-main/"} >©Cocktails Paradise par DevDread</Link>
    <Link  to={"https://j-patlmx.github.io/businessCard-main/"}><img src={facebook}/></Link>
    <img src={instagram} />
    </>
  )
}

export default Footer