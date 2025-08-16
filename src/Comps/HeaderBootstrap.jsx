import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Logo.png';

function HeaderBootstrap({ toggleSidebar }) {
    return (
        <>
            <header className="header fixed-top d-flex align-items-center bg-white shadow-sm py-2 px-3 w-100">
                <div className="d-flex align-items-center justify-content-between w-100">
                    {/* Logo et bouton sidebar */}
                    <div className="d-flex align-items-center">
                        <Link to="/" className="logo d-flex align-items-center text-decoration-none">
                            <img src={logo} alt="Logo" className="me-2" style={{ height: '45px' }} />
                            <span className="d-none d-lg-block fw-bold text-dark fs-4 cormorant-garamond">ToubaCouta Evasion</span>
                        </Link>
                        <i
                            className="bi bi-list fs-4 text-primary ms-3 "
                            onClick={toggleSidebar}
                            style={{ cursor: 'pointer' }}
                        ></i>
                    </div>

                    {/* Navigation */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center list-unstyled mb-0 text-uppercase" id="sidebar-nav">

                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`} >
                                    <span>Accueil</span>
                                </NavLink>
                            </li>
                            <li className="nav-item ms-4">
                                <NavLink to="/activites" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                    <span>Activités</span>
                                </NavLink>
                            </li>

                            <li className="nav-item ms-4">
                                <NavLink to="/restaurant" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                    <span>Restaurant</span>
                                </NavLink>
                            </li>

                            <li className="nav-item ms-4">
                                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                    <span>Galerie</span>
                                </NavLink>
                            </li>

                            <li className="nav-item ms-4">
                                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                    <span>Notre histoire</span>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
            <header className="header header-activities position-fixed d-flex align-items-center justify-content-center bg-main text-light shadow-sm py-2 px-3 w-100">
                <nav className="header-nav ">
                    <ul className="d-flex align-items-center justify-content-center list-unstyled mb-0 text-uppercase" >

                        <li className="nav-item">
                            <NavLink to="/activites/peche" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`} >
                                <span>Pêche</span>
                            </NavLink>
                        </li>
                        <li className="nav-item ms-4">
                            <NavLink to="/activites/camping" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                <span>Camping</span>
                            </NavLink>
                        </li>

                        <li className="nav-item ms-4">
                            <NavLink to="/activities/balades-transports" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                <span>Balades & Transports</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default HeaderBootstrap;