import { NavLink } from "react-router-dom"

function sliderComponent() {
  return (
    <>
{/* TODO: gerer le proble daffichage */}
<NavLink className="App-Slider-link" to={"/home"} >
      <img className="imgtestslider" src="https://zupimages.net/up/23/30/cgpj.jpg" alt="un cocktail" />
      <img className="imgtestslider" src="https://zupimages.net/up/23/30/hod4.jpg" alt="un cocktail" />    
      <img className="imgtestslider" src="https://zupimages.net/up/23/30/cgpj.jpg" alt="un cocktail" />
      <img className="imgtestslider" src="https://zupimages.net/up/23/30/hod4.jpg" alt="un cocktail" />              
</NavLink>

    </>
  )
}

export default sliderComponent