import { NavLink } from "react-router-dom"

function Cocktail() {
  return (
    <>
  <div className="testmegawrap">
    <div className="titlewrap">
      
      <h1 className="h1CocktailPattern" >Title of cocktails</h1>
    
       <i className="fa-regular fa-star"></i>
       <i className="fa-regular fa-star"></i>
       <i className="fa-regular fa-star"></i>
       <i className="fa-regular fa-star"></i>
       <i className="fa-regular fa-star"></i>
  
    </div>
        <div className="testwrap">
        <img className="imgtest" src="/assets/test.jpg" alt="random image from unsplash"/>
    
            <ul>
                <li>Ingredients1</li>
                <li>Ingredients2</li>
                <li>Ingredients3</li>
                <li>Ingredients4</li>
                <li>Ingredients5</li>
            </ul>
    
        </div>
      <p>Description & methodologie Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora ullam non nulla cupiditate velit itaque recusandae ut pariatur eaque quaerat fuga ratione ea, doloremque qui est maiores magni amet.
      Repellendus quos placeat vero laudantium minus nihil rerum, eum dolore! Quas libero, sint et magnam eligendi ab recusandae aut nemo omnis. Voluptates hic quasi labore dolores ut nobis atque totam!
      Consectetur dicta ipsa minus deleniti, cupiditate reiciendis, dignissimos, maxime tenetur ex praesentium harum laborum modi obcaecati aperiam libero velit in esse ratione autem doloribus corporis odit amet. Incidunt, eius fugiat.</p>
      {/* il faut la methodologie
      une video demonstrativenote sur 5*/}
      <nav className="into_Cocktail_Selection">
        
              <NavLink className="App-Cocktail-link" to={"/cocktailSA"}>revenir à la liste Sans alcools</NavLink>
              <NavLink className="App-Cocktail-link" to={"/"}>revenir à l`Accueil </NavLink>
              <NavLink className="App-Cocktail-link" to={"/cocktailAA"}>revenir à la liste Avec alcools</NavLink>
      </nav>

  </div>

   </>
  )
}

export default Cocktail