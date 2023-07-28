import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/Contact';
import Page404 from './pages/PageNotFound';
import CocktailAA from "./pages/Cocktails_With_Alcools";
import CocktailSA from "./pages/Cocktails_Without_Alcools";
import Cocktail from "./pages/Nos_Cocktails";
import ThisCocktail from "./pages/This_Cocktail";




import Footer from './components/Footer';
import Header from './components/Header';
import App from "./App";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/Contact" element={<About />} />
                    {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                    <Route path="/cocktail" element={<Cocktail />} />
                    <Route path="/cocktailSA" element={<CocktailSA />} />
                    <Route path="/cocktailAA" element={<CocktailAA />} />
                  
                    {/* <Route path="/this_cocktail" element={<ThisCocktail />} />
                    <Route path="/this_cocktail" element={<ThisCocktail />} />  */}
                    <Route path="/this_cocktail/:cocktailId" element={<ThisCocktail />} />


                    {/* Tout les root non disponible */}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;