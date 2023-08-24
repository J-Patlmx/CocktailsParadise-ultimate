import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cocktailsData from "../assets/temporaireData/CocktailsAvecAlcool.json";


function SliderComponent() {
  const sliderRef = useRef(null);
  const slides = [];

  useEffect(() => {
    // Cloner le premier élément et l'ajouter à la fin pour un défilement continu
    const firstSlide = sliderRef.current.children[0];
    const clone = firstSlide.cloneNode(true);
    sliderRef.current.appendChild(clone);

    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = 100 / (slideCount + 1); // +1 pour le clone

    const interval = setInterval(() => {
      currentSlide++;
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}%)`;

      if (currentSlide === slideCount) {
        // Si on atteint la fin, revenir au premier élément sans animation
        setTimeout(() => {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = "translateX(0)";
          currentSlide = 0;
        }, 500);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {cocktailsData.cocktails.map(cocktail => (
          <div className="slider-item" key={cocktail.id}>
            <NavLink
              key={cocktail.id}
              className="App-Slider-link"
              to={`/this_cocktail/${cocktail.id}`}
            >

              <div>
                <img className="imgtestslider" src={cocktail.photo} alt={cocktail.name} />
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderComponent;