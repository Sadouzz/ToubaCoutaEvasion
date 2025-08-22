import logo from '../assets/Logo.png'
import heroImg from '../assets/9.jpg'
import photo1 from '../assets/img/Balades/balade1.jpg'
import photo2 from '../assets/img/Balades/balade2.jpg'
import photo3 from '../assets/img/Balades/balade3.jpg'
import photo4 from '../assets/img/Balades/balade4.jpg'
import photo5 from '../assets/img/Balades/balade5.jpg'
import photo6 from '../assets/img/Balades/balade6.jpg'
import photo7 from '../assets/img/Balades/balade7.jpg'
import photo8 from '../assets/img/Balades/balade8.jpg'
import photo9 from '../assets/img/Balades/balade9.jpg'
import photo10 from '../assets/img/Balades/balade10.jpg'
import photo11 from '../assets/img/Balades/balade11.jpg'
import photo12 from '../assets/img/Balades/balade12.jpg'
import photo13 from '../assets/img/Balades/balade13.jpg'
import photo14 from '../assets/img/Balades/balade14.jpg'
import photo15 from '../assets/img/Balades/balade15.jpg'
import photo16 from '../assets/img/Balades/balade16.jpg'
import photo17 from '../assets/img/Balades/balade17.jpg'
import photo18 from '../assets/img/Balades/balade18.jpg'
import photo19 from '../assets/img/Balades/balade19.jpg'
import img5 from '../assets/5.jpg'
import bgPattern1 from '../assets/img/bg-pattern.png'
import bgPattern2 from '../assets/img/bg-pattern2.jpg'
import loca from '../assets/loca.webp'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import ActivityLearnMore from '../Comps/ActivityLearnMore'
import PhotoCard from '../Comps/PhotoCard'
import Clouds from '../Comps/Clouds'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
export default function Balades() {
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
                                <h3 className='playfair-display'>Balades & Transports</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins'>Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.
                                    Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie d'une immersion unique, entre adrénaline et découverte.</p>
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
                    <ActivityLearnMore title={'Île aux oiseaux'} content={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'} img={img5} modalContent={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'}>

                    </ActivityLearnMore>
                    <ActivityLearnMore reversed={true} title={'Baobab sacré sipo'} content={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'} img={img5} modalContent={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'}>

                    </ActivityLearnMore>
                    <ActivityLearnMore title={'Île aux coquillages'} content={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'} img={img5} modalContent={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'}>

                    </ActivityLearnMore>
                    <ActivityLearnMore reversed={true} title={'Reposoir des oiseaux'} content={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'} img={img5} modalContent={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'}>

                    </ActivityLearnMore>
                    <ActivityLearnMore title={'Le fromagier géant de Misila'} content={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'} img={img5} modalContent={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'}>

                    </ActivityLearnMore>
                    <ActivityLearnMore reversed={true} title={'Excursions dans les parcs exotiques'} content={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'} img={img5} modalContent={'Entre pistes sauvages, sentiers de brousse et paysages à couper le souffle, ToubaCouta devient un terrain de jeu grandeur nature pour les amateurs d’aventure et de sensations fortes.Que vous soyez amateur de sensations, amoureux de la nature ou curieux de découvrir le delta autrement, ToubaCouta Aventure vous ouvre la voie dune immersion unique, entre adrénaline et découverte.'}>

                    </ActivityLearnMore>
                </div>

                {/* Section Nos plats */}
                <div className="bg-white py-4">
                    <div className="container">
                        <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                            <h3 className='playfair-display -0'>Galerie</h3>
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
                                <PhotoCard img={photo17} title={''} content={''} />
                                <PhotoCard img={photo18} title={''} content={''} />
                                <PhotoCard img={photo19} title={''} content={''} />

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