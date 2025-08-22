import logo from '../assets/Logo.png'
import heroImg from '../assets/9.jpg'
import photo1 from '../assets/img/Camping/camping1.jpg'
import photo2 from '../assets/img/Camping/camping2.jpg'
import photo3 from '../assets/img/Camping/camping3.jpg'
import img5 from '../assets/5.jpg'
import campingImg1 from '../assets/Camping/1.jpg'
import campingImg2 from '../assets/Camping/2.jpg'
import campingImg8 from '../assets/Camping/8.jpg'
import bgPattern1 from '../assets/img/bg-pattern.png'
import bgPattern2 from '../assets/img/bg-pattern2.jpg'
import loca from '../assets/loca.webp'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import ActivityLearnMore from '../Comps/ActivityLearnMore'
import PhotoCard from '../Comps/PhotoCard'
import Clouds from '../Comps/Clouds'
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
function Camping() {
    const [isSticky, setIsSticky] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Quand le sentinel sort de la vue (vers le haut) → header devient sticky
                setIsSticky(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-60px 0px 0px 0px", // déclenche 60px avant le haut
            }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) observer.unobserve(sentinelRef.current);
        };
    }, []);
    return (
        <>
            <main id="main" className="main">
                {/*HERO SECTION*/}
                <div id='hero' className=""
                    style={{
                        height: 'calc(100vh - 200px)',
                        backgroundImage: `url(${img5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative'
                    }}>
                    {/* sentinel invisible placé en bas du hero */}
                    <div ref={sentinelRef} style={{ position: "absolute", bottom: 0, height: 1, width: "100%" }} />
                    <div className="header second-header  align-content-center bg-main text-light shadow-sm py-2 w-100 "
                        style={{
                            position: isSticky ? 'fixed' : 'absolute',
                            bottom: isSticky ? "auto" : 0,
                            top: isSticky ? "70px" : "auto",
                            zIndex: 1000,
                        }}>
                        <nav className="header-nav ">
                            <ul className="d-flex align-items-center justify-content-center list-unstyled mb-0 text-uppercase" >

                                <li className="nav-item">
                                    <NavLink to="/activites/peche" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                                        <span>Pêche</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-3">
                                    <NavLink to="/activites/camping" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}>
                                        <span>Camping</span>
                                    </NavLink>
                                </li>

                                <li className="nav-item ms-3">
                                    <NavLink to="/activites/balades-transports" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}>
                                        <span>Balades & Transports</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>

                {/*Seconde SECTION*/}
                <div className='bg-white py-4'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>
                                <h3 className='playfair-display'>Camping</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins'>
                                    Avec ses forêts paisibles, ses bolongs mystérieux et ses ciels étoilés à perte de vue, ToubaCouta est rapidement devenu l’un des meilleurs endroits pour vivre une expérience de camping authentique en Afrique de l’Ouest. C’est dans ce décor naturel exceptionnel que nous avons créé ToubaCouta Evasion, un espace dédié aux amoureux de la nature, alliant confort, aventure et déconnexion totale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                {/*4e SECTION service*/}
                {/* <div className="bg-secondary30 py-5 position-relative">
                    <div
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            backgroundImage: `url(${bgPattern1})`,
                            backgroundSize: 'cover',
                            opacity: .1, // Adjust opacity (0.0 to 1.0)
                            zIndex: 1, // Places it behind the content
                        }}
                    >
                    </div>
                    <div className="container">
                        <div className='d-flex align-items-center justify-content-between row'>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <img src={campingImg1} className='img-fluid position-relative z-1' alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <h4 className='playfair-display m-0'>Nos Services</h4>
                                    <hr className='border-2 border-main opacity-100 ' style={{ width: "20%", maxWidth: "250px" }} />
                                    <p className='poppins'>
                                        ⛺ Espaces de camping aménagés et sauvages (sous tente ou en bivouac) 🔥 Feux de camp encadrés et soirées autour du feu 🚿 Sanitaires mobiles et douches écologiques 🛶 Balades en pirogue dans les bolongs 🌌 Observation des étoiles et nuits à la belle étoile 🌿 Découverte de la faune et de la flore locales 🥾 Randonnées et circuits nature 👨‍🏫 Encadrement par des guides expérimentés et passionnés
                                    </p>
                                    <div className='d-flex align-items-center justify-content-center gap-2'>
                                        <button className='btn btn-main text-light rounded-0 px-4 py-2'>
                                            <span className='cormorant-garamond fs-4'>
                                                View Offer
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div>
                    <ActivityLearnMore title={'Pêche Assistée'} content={'Excursions de pêche encadrées.'} img={photo1} learnMore={false} />
                    <ActivityLearnMore reversed={true} title={'Pêche Assistée'} content={'Balades en pirogue dans les bolongs.'} img={photo2} learnMore={false} />
                    <ActivityLearnMore title={'Observation du paysage'} content={'Balades en pirogue dans les bolongs.'} img={photo3} learnMore={false} />
                </div>

                {/* Section Nos plats */}
                <div className="bg-white py-4">
                    <div className="container">
                        <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                            <h3 className='playfair-display m-0'>Galerie</h3>
                            <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />

                        </div>
                    </div>
                </div>

                <div className='bg-main10 position-relative'>
                    <div className=''
                        style={{
                            backgroundImage: `url(${bgPattern2})`,
                            backgroundSize: 'contain',
                            height: '100%',
                            width: '100%',
                            //backgroundRepeat: 'no-repeat',
                            position: 'absolute', // pour placer les nuages
                            opacity: .1, // Adjust opacity (0.0 to 1.0)
                        }}
                    >
                    </div>
                    <div className='container py-5'>

                        {/* Nuages en haut */}
                        <Clouds />
                        <div className='container py-5'>
                            <div className='row justify-content-center'>
                                <PhotoCard img={photo1} title={'Retour aux sources'} content={'Pas de murs, pas de montre. Juste le souffle du vent et le chant des insectes.'} />
                                <PhotoCard img={photo2} title={'Campement du jour'} content={'Monter la tente, allumer le feu, et laisser le monde tourner sans nous.'} />
                                <PhotoCard img={photo3} title={'Repos sauvage'} content={'Loin des villes, plus proche de soi.'} />

                            </div>
                        </div>


                        {/* Nuages en bas */}
                        <Clouds rotate={'180deg'} pos='bottom' />
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}
export default Camping