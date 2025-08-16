import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Logo.png';

function SidebarBootstrap({ setHeaderOnHomePosition, unSetHeaderOnHomePosition, boolHeader }) {
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav text-uppercase" id="sidebar-nav">

                    <li className="nav-item mb-1">
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`} onClick={setHeaderOnHomePosition}>
                            <i className="bi bi-grid"></i>
                            <span>Accueil</span>
                        </NavLink>  
                    </li>
                    <li className="nav-item mb-1">
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`} onClick={unSetHeaderOnHomePosition}>
                            <i className="bi bi-grid"></i>
                            <span>Activités</span>
                        </NavLink>  
                    </li>

                    <li className="nav-item mb-1">
                        <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`}>
                            <i className="bi bi-calendar-event"></i>
                            <span>Restaurant</span>
                        </NavLink>
                    </li>

                    <li className="nav-item mb-1">
                        <NavLink to="/students" className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`}>
                            <i className="bi bi-mortarboard"></i>
                            <span>Galerie</span>
                        </NavLink>
                    </li>
                    
                    <li className="nav-item mb-1">
                        <NavLink to="/presences/addPresence" className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`}>
                            <i className="bi bi-bookmark"></i>
                            <span>Expériences</span>
                        </NavLink>
                    </li>
                    
                    <li className="nav-item mb-1">
                        <NavLink to="/presences/addPresence" className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`}>
                            <i className="bi bi-bookmark"></i>
                            <span>Notre histoire</span>
                        </NavLink>
                    </li>

                </ul>

            </aside>
        </>
    );
}

export default SidebarBootstrap;
