import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './styles/main.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBootstrap from './Comps/HeaderBootstrap';
import SidebarBootstrap from './Comps/SidebarBootstrap';
import ScrollToTop from './Comps/ScrollToTop';
import Home from './pages/Home';
import Hebergement from './pages/Hebergement';
import Restaurant from './pages/Restaurant';
import Peche from './pages/Peche';
import Camping from './pages/Camping'; 
import Balades from './pages/Balades'; 
import Galerie from './pages/Galerie'; 
import NotreHistoire from './pages/NotreHistoire'; 
import Temoignages from './pages/Temoignages';

function App() {
  const [isTooLow, setIsTooLow] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Accueil - ToubaCouta Évasion";
        break;
      case "/restaurant":
        document.title = "Restaurant - ToubaCouta Évasion";
        break;
      case "/hebergement":
        document.title = "Hébergement - ToubaCouta Évasion";
        break;
      case "/activites":
      case "/activites/peche":
        document.title = "Pêche - ToubaCouta Évasion";
        break;
      case "/activites/camping":
        document.title = "Camping - ToubaCouta Évasion";
        break;
      case "/activites/balades-transports":
        document.title = "Balades & Transports - ToubaCouta Évasion";
        break;
      case "/galerie":
        document.title = "Galerie - ToubaCouta Évasion";
        break;
      case "/notre-histoire":
        document.title = "Notre Histoire - ToubaCouta Évasion";
        break;
      case "/temoignages":
        document.title = "Témoignages - ToubaCouta Évasion";
        break;
      default:
        document.title = "ToubaCouta Évasion";
    }
  }, [location.pathname]);

  //const location = useLocation(); // ← Hook pour détecter les changements de route

  
  return (
    <>
      <div className={sidebarOpen ? 'toggle-sidebar' : ''}>
        <Router>
          <ScrollToTop />
          <HeaderBootstrap toggleSidebar={() => setSidebarOpen(!sidebarOpen)} isTooLow={isTooLow} />
          <SidebarBootstrap />
          <Routes>
            <Route path="/" element={<Home onScrollChange={setIsTooLow} />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/hebergement" element={<Hebergement />} />
            <Route path="/activites" element={<Peche />} />
            <Route path="/activites/peche" element={<Peche />} />
            <Route path="/activites/camping" element={<Camping />} />
            <Route path="/activites/balades-transports" element={<Balades />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/notre-histoire" element={<NotreHistoire />} />
            <Route path="/temoignages" element={<Temoignages />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
