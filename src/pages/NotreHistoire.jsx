import logo from '../assets/Logo.png'
import heroImg from '../assets/9.jpg'
import photo1 from '../assets/img/Peche/peche1.jpg'
import photo2 from '../assets/img/Peche/peche2.jpg'
import photo3 from '../assets/img/Peche/peche3.jpg'
import photo4 from '../assets/img/Peche/peche4.jpg'
import photo5 from '../assets/img/Peche/peche5.jpg'
import photo6 from '../assets/img/Peche/peche6.jpg'
import photo7 from '../assets/img/Peche/peche7.jpg'
import photo8 from '../assets/img/Peche/peche8.jpg'
import photo9 from '../assets/img/Peche/peche9.jpg'
import photo10 from '../assets/img/Peche/peche10.jpg'
import photo11 from '../assets/img/Peche/peche11.jpg'
import photo12 from '../assets/img/Peche/peche12.jpg'
import photo13 from '../assets/img/Peche/peche13.jpg'
import photo14 from '../assets/img/Peche/peche14.jpg'
import photo15 from '../assets/img/Peche/peche15.jpg'
import photo16 from '../assets/img/Peche/peche16.jpg'
import img5 from '../assets/5.jpg'
import img7 from '../assets/7.jpg'
import bgPattern1 from '../assets/img/bg-pattern.png'
import bgPattern2 from '../assets/img/bg-pattern2.jpg'
import loca from '../assets/loca.webp'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import ActivityLearnMore from '../Comps/ActivityLearnMore'
import PhotoCard from '../Comps/PhotoCard'
import Clouds from '../Comps/Clouds'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
function NotreHistoire() {
    const location = useLocation();

    // Exemple : vérifier si on est sur /activites
    const isActivitesPage = location.pathname === "/activites";
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
                        backgroundImage: `url(${img7})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative'
                    }}>
                    {/* sentinel invisible placé en bas du hero */}
                    <div ref={sentinelRef} style={{ position: "absolute", bottom: 0, height: 1, width: "100%" }} />
                    <div className="header second-header  align-content-center bg-tertiary1 text-light shadow-sm py-2 w-100 "
                        style={{
                            position: isSticky ? 'fixed' : 'absolute',
                            bottom: isSticky ? "auto" : 0,
                            top: isSticky ? "70px" : "auto",
                            zIndex: 1000,
                        }}>
                        <nav className="header-nav ">
                            <ul className="d-flex align-items-center justify-content-center list-unstyled mb-0 text-uppercase" >

                                <li className="nav-item">
                                    <a href="#notre-histoire" className="text-decoration-none">
                                        <span>Pêche</span>
                                    </a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a href="#galerie" className="text-decoration-none">
                                        <span>Camping</span>
                                    </a>
                                </li>

                                <li className="nav-item ms-3">
                                    <a href="#just" className="text-decoration-none">
                                        <span>Balades & Transports</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>

                {/*Seconde SECTION*/}
                <div className='bg-white py-4' id='notre-histoire'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>
                                <h3 className='playfair-display'>Notre Histoire</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins'>Avec ses eaux calmes toute l’année, ses bolongs poissonneux et ses paysages à couper le souffle, ToubaCouta est rapidement devenu l’un des meilleurs spots de pêche sportive et traditionnelle en Afrique de l’Ouest.
                                    C’est dans cet environnement unique que nous avons créé ToubaCouta Evasion, un club de pêche haut de gamme dédié à vous offrir un service de qualité, du matériel performant et une expérience authentique.</p>
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
                                <img src={loca} className='img-fluid position-relative z-1' alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <h4 className='playfair-display m-0'>Nos Services</h4>
                                    <hr className='border-2 border-main opacity-100 ' style={{ width: "20%", maxWidth: "250px" }} />
                                    <p className='poppins'>

                                        Excursions de pêche encadrées (pêche au lancer, palangrotte, traîne…)
                                        Location de matériel de pêche professionnel
                                        Balades en pirogue dans les bolongs
                                        Observation de la faune (dauphins, oiseaux, lamantins)
                                        Sorties culturelles (îles sérères, villages animistes)
                                        Boutique d’équipements et souvenirs
                                        Encadrement par des guides expérimentés et passionnés
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
                    <ActivityLearnMore title={'Pêche Assistée'} content={'Excursions de pêche encadrées.'} img={photo2} learnMore={false}/>
                    <ActivityLearnMore reversed={true} title={'Pêche Assistée'} content={'Balades en pirogue dans les bolongs.'} img={photo2} learnMore={false} />
                    <ActivityLearnMore title={'Observation du paysage'} content={'Balades en pirogue dans les bolongs.'} img={photo6} learnMore={false} />
                </div>

                {/* Section Nos plats */}
                <div className='bg-white py-4' id='galerie'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>
                                <h3 className='playfair-display'>Galerie</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins'>Avec ses eaux calmes toute l’année, ses bolongs poissonneux et ses paysages à couper le souffle, ToubaCouta est rapidement devenu l’un des meilleurs spots de pêche sportive et traditionnelle en Afrique de l’Ouest.
                                    C’est dans cet environnement unique que nous avons créé ToubaCouta Evasion, un club de pêche haut de gamme dédié à vous offrir un service de qualité, du matériel performant et une expérience authentique.</p>
                            </div>
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
                                <PhotoCard img={photo1} title={'Pêche & Évasion'} content={'L’horizon calme, les lignes tendues. Chaque sortie, une promesse d’émotion.'} />
                                <PhotoCard img={photo2} title={''} content={''} />
                                <PhotoCard img={photo3} title={''} content={''} />
                                <PhotoCard img={photo4} title={''} content={''} />
                                <PhotoCard img={photo5} title={''} content={''} />
                                <PhotoCard img={photo6} title={''} content={''} />
                                <PhotoCard img={photo7} title={''} content={''} />
                                <PhotoCard img={photo8} title={''} content={''} />
                                <PhotoCard img={photo9} title={''} content={''} />
                                <PhotoCard img={photo10} title={''} content={''} />
                                <PhotoCard img={photo11} title={''} content={''} />
                                <PhotoCard img={photo12} title={''} content={''} />
                                <PhotoCard img={photo13} title={''} content={''} />
                                <PhotoCard img={photo14} title={''} content={''} />
                                <PhotoCard img={photo15} title={''} content={''} />
                                <PhotoCard img={photo16} title={''} content={''} />
                                
                                </div>
                        </div>


                        {/* Nuages en bas */}
                        <Clouds rotate={'180deg'} pos='bottom' />
                    </div>
                </div>

                <div className='bg-white py-4' id='just'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>
                                <h3 className='playfair-display'>Galerie</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins'>Avec ses eaux calmes toute l’année, ses bolongs poissonneux et ses paysages à couper le souffle, ToubaCouta est rapidement devenu l’un des meilleurs spots de pêche sportive et traditionnelle en Afrique de l’Ouest.
                                    C’est dans cet environnement unique que nous avons créé ToubaCouta Evasion, un club de pêche haut de gamme dédié à vous offrir un service de qualité, du matériel performant et une expérience authentique.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}
export default NotreHistoire