import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../assets/Logo.png';

function HeaderBootstrap({ toggleSidebar, isTooLow }) {
    const location = useLocation();
    const isHome = location.pathname === "/";
    // Vérifie si on est dans /activites ou une sous-page
    const isActivitesPage = location.pathname.startsWith("/activites");
    return (

        <>
            <header
                className={`${isHome && !isTooLow ? "shadow-none bg-transparent" : "shadow-sm bg-white"} header fixed-top d-flex align-items-center py-2 px-4 w-100`}
            >
                <div className="d-flex align-items-center justify-content-between w-100">
                    {/* Logo et bouton sidebar */}
                    <div className="d-flex align-items-center">
                        <Link to="/" className="logo d-flex align-items-center text-decoration-none">
                            <img src={logo} alt="Logo" className="me-2" style={{ height: '45px' }} />
                            <span
                                className={`${isHome && !isTooLow ? "text-white" : "text-dark"} d-none d-lg-block fw-bold text-dark fs-4 cormorant-garamond`}
                            >
                                ToubaCouta Evasion
                            </span>
                        </Link>
                        <i
                            className="bi bi-list fs-2 text-main ms-3 mobile-nav-toggle d-lg-none d-sm-block d-block"
                            onClick={toggleSidebar}
                            style={{ cursor: 'pointer' }}
                        ></i>
                    </div>

                    {/* Navigation */}
                    <nav
                        className={`${isHome && !isTooLow ? "text-white" : "text-dark"} header-nav ms-auto d-none d-md-block d-lg-block `}
                    >
                        <ul className="d-flex align-items-center list-unstyled mb-0 text-uppercase" id="sidebar-nav">

                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                                    <span>Accueil</span>
                                </NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink to="/activites" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}>
                                    <span>Activités</span>
                                </NavLink>
                            </li>

                            <li className="nav-item ms-5">
                                <NavLink to="/restaurant" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}>
                                    <span>Restaurant</span>
                                </NavLink>
                            </li>

                            <li className="nav-item ms-5">
                                <NavLink to="/galerie" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}>
                                    <span>Galerie</span>
                                </NavLink>
                            </li>

                            <li className="nav-item ms-5">
                                <NavLink to="/notre-histoire" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}>
                                    <span>Notre histoire</span>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>

            {false && isActivitesPage && (<header className="header header-activities position-fixed d-flex align-items-center justify-content-center bg-main text-light shadow-sm py-2 px-3 w-100">
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
                            <NavLink to="/activites/balades-transports" className={({ isActive }) => `nav-link ${isActive ? " text-decoration-underline" : "collapsed"}`}>
                                <span>Balades & Transports</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>)}
        </>
    );
}

export default HeaderBootstrap;