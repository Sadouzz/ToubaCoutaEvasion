import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBootstrap from './Comps/HeaderBootstrap';
import SidebarBootstrap from './Comps/SidebarBootstrap';
import ScrollToTop from './Comps/ScrollToTop';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Peche from './pages/Peche';
import Camping from './pages/Camping'; 
import Balades from './pages/Balades'; 
import Galerie from './pages/Galerie'; 

function App() {
  const [isTooLow, setIsTooLow] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
            <Route path="/activites" element={<Peche />} />
            <Route path="/activites/peche" element={<Peche />} />
            <Route path="/activites/camping" element={<Camping />} />
            <Route path="/activites/balades-transports" element={<Balades />} />
            <Route path="/galerie" element={<Galerie />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
