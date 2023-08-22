import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function SliderComponent() {
  const sliderRef = useRef(null);
  const slides = [
    "https://zupimages.net/up/23/30/cgpj.jpg",
    "https://zupimages.net/up/23/30/hod4.jpg",
   
  ];

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
        {slides.map((slide, index) => (
          <div className="slider-item" key={index}>
            <NavLink className="App-Slider-link" to="/Page404">
              <img className="imgtestslider" src={slide} alt="un cocktail" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderComponent;






// import { NavLink } from "react-router-dom"

// function sliderComponent() {
//   return (
//     <>
// {/* TODO: gerer le proble daffichage */}
// <NavLink className="App-Slider-link" to={"/Page404 "} >
   
      
//         <img className="imgtestslider" src="https://zupimages.net/up/23/30/cgpj.jpg" alt="un cocktail" />
//         <img className="imgtestslider" src="https://zupimages.net/up/23/30/hod4.jpg" alt="un cocktail" />
//         <img className="imgtestslider" src="https://zupimages.net/up/23/30/cgpj.jpg" alt="un cocktail" />
//         <img className="imgtestslider" src="https://zupimages.net/up/23/30/hod4.jpg" alt="un cocktail" />

             
// </NavLink>

//     </>
//   )
// }

// export default sliderComponent