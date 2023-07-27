
import Cocktail from './components/Cocktail'
import './styles/styles.css'

function App() {
 
  return (
    <>

      <h1 className='h1-HomePage'>Cocktails Paradise</h1>
      <div className="card">

        <div>
         <Cocktail /> 
        <p>
         {/* texte a remplir Bienvenue sur Cocktails Paradise, ici, on peut apprendre a réalisé des cocktails grâce à des petits
                tutos vidéo,<br /> alors on n'hésite pas à tips le barman.
                L'alcool se consomme avec modération. Même s'il y a des fruits ! <br />


                Une personne alcoolisée ne veut pas dire consentement automatique alors on respecte le NON.<br />

                L'alcoolisme est une maladie alors on ne rigole pas avec ça et on reste tous bien veillant les uns en
                vers les autres.<br />

                Nous ne sommes pas partenaires, mais ça va dans le bon sens.
                <a id="lienCapuchon" href="https://drink-watch.com/produit/">DRINK WATCH</a> est un outil de prévention
                et de dissuasion.<br />


                Ne laissez jamais votre verre sans surveillance. <br />
                Bonne dégustation et comme on dit chez moi "yer'mat". */}
        </p>
        </div>
      </div>
    </>
  )
}

export default App
