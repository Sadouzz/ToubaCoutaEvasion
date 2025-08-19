import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.scss';
import HeaderBootstrap from './Comps/HeaderBootstrap';
import SidebarBootstrap from './Comps/SidebarBootstrap';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Peche from './pages/Peche';
import Camping from './pages/Camping'; 
import Balades from './pages/Balades'; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className={sidebarOpen ? 'toggle-sidebar' : ''}>
        <Router>
          <HeaderBootstrap toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <SidebarBootstrap />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/activites" element={<Peche />} />
            <Route path="/activites/peche" element={<Peche />} />
            <Route path="/activites/camping" element={<Camping />} />
            <Route path="/activites/balades-transports" element={<Balades />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
