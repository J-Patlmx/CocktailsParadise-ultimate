
import { Link } from "react-router-dom"
import "./styles/styles.css"
// import SliderComponent from"./components/slider"
// TODO: regler les probleme quaporte le slider
function App() {
 
  return (
    <div className="Home">
    {/* <SliderComponent /> */}
     
      <h1 className="h1-HomePage">Cocktails Paradise</h1>
 
     <>
        <p className="P-HomePage">
              Bienvenue sur Cocktails Paradise, ici, on peut apprendre a réalisé des cocktails grâce à des petits
                tutos vidéo,<br /> alors on n&#39;hésite pas à tips le barman.
                L&#39;alcool se consomme avec modération. Même sil y a des fruits ! <br />


                Une personne alcoolisée ne veut pas dire consentement automatique alors on respecte le NON.<br />

                L&#39;alcoolisme est une maladie alors on ne rigole pas avec ça et on reste tous bien veillant les uns en
                vers les autres.<br />

                Nous ne sommes pas partenaires, mais ça va dans le bon sens. le 
                <Link className="lienCapuchon" to="https://drink-watch.com/produit/">  DRINK WATCH</Link> est un outil de prévention
                et de dissuasion.<br />


                Ne laissez jamais votre verre sans surveillance. <br />
                Bonne dégustation et comme on dit chez moi <q>yer&#39;mat</q>.
          </p>
        </>
      </div>
  
  )
}

export default App
