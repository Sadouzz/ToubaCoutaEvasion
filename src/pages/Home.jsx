import logo from '../assets/Logo.png'
import bgPattern1 from '../assets/bg-pattern.png'
import img1 from '../assets/img/Balades/balade2.jpg'
import img2 from '../assets/img/Camping/camping2.jpg'
import img3 from '../assets/img/Peche/peche9.jpg'
import img4 from '../assets/img/Peche/peche9.jpg'
import img5 from '../assets/img/camping/camping1.jpg'
import img6 from '../assets/img/balades/balade11.jpg'
import img8 from '../assets/img/peche/peche7.jpg'
import loca from '../assets/loca.webp'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import ActivityCard from '../Comps/ActivityCard'
import ThreeImagesWithHoverChanges from '../Comps/ThreeImagesWithHoverChanges'
import Clouds from '../Comps/Clouds'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
function Home({ onScrollChange }) {
    const sentinelRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // envoie à App si le sentinel n'est plus visible
                onScrollChange(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-60px 0px 0px 0px",
            }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) observer.unobserve(sentinelRef.current);
        };
    }, [onScrollChange]);
    return (
        <>
            <main id="main" className="main home-main">
                {/*HERO SECTION*/}
                <div id='hero' className="d-flex justify-content-center align-items-center"
                    style={{
                        height: 'calc(100vh)',
                        backgroundImage: `url(${peche9})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <div ref={sentinelRef} style={{ position: "absolute", bottom: 0, height: 1, width: "100%" }} />

                    <div className='text-center cormorant-garamond text-light'>
                        <h5>TOUBACOUTA</h5>
                        <h1 className='fw-bold '>EVASION</h1>
                        <h2>COMPLEXE TOURISTIQUE</h2>
                    </div>
                </div>


                {/*Seconde SECTION*/}
                <div className='bg-white py-4'>
                    <div className='container '>
                        <div className='d-flex align-items-center justify-content-center'
                        >
                            <div className='section-titled d-flex flex-column align-items-center text-center'>

                                <h3 className="playfair-display text-center">
                                    ToubaCouta Evasion – Nature & Élégance au cœur du Delta
                                </h3>
                                <hr
                                    className="border-2 border-main opacity-100 mx-auto"
                                    style={{ width: "10%", maxWidth: "150px" }}
                                />
                                <p className="poppins text-center">
                                    Véritable écrin de calme et d’authenticité, ToubaCouta Evasion vous invite à vivre une expérience unique, intime et immersive, au cœur du majestueux Delta du Saloum. Entre bolongs scintillants, forêts paisibles et rencontres inoubliables avec la nature, chaque instant ici est une reconnexion avec l’essentiel.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/*3e SECTION avec image*/}
                <ThreeImagesWithHoverChanges img1={img1} img2={img3} img3={img2}>
                    <Clouds />

                    {/* Nuages en bas */}
                    <Clouds rotate={'180deg'} pos='bottom' />
                </ThreeImagesWithHoverChanges>

                {/*Seconde SECTION*/}
                <div className='bg-white py-4'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <h3 className='playfair-display'>ToubaCouta Evasion – Nature & Élégance au cœur du Delta</h3>
                            <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                            <p className='poppins'>Véritable écrin de calme et d’authenticité, ToubaCouta Evasion vous invite à vivre une expérience unique, intime et immersive, au cœur du majestueux Delta du Saloum. Entre bolongs scintillants, forêts paisibles et rencontres inoubliables avec la nature, chaque instant ici est une reconnexion avec l’essentiel.</p>
                        </div>
                    </div>
                </div>


                {/*4e SECTION localisation*/}
                <div
                    className="bg-secondary30 py-5 position-relative"

                >
                    <div
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            backgroundImage: `url(${bgPattern1})`,
                            backgroundSize: 'cover',
                            opacity: .1, // Adjust opacity (0.0 to 1.0)
                            zIndex: 0, // Places it behind the content
                        }}
                    >
                    </div>

                    <div className="container">
                        <div className='d-flex align-items-center justify-content-between row'>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <img src={loca} className='img-fluid' alt="" style={{ zIndex: 1, position: 'relative' }} />
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='d-flex flex-column align-items-center justify-content-center text-center'
                                    style={{ zIndex: 1, position: 'relative' }}>
                                    <h4 className='playfair-display m-0'>Notre Localisation</h4>
                                    <hr className='border-2 border-main opacity-100 ' style={{ width: "20%", maxWidth: "250px" }} />
                                    <p className='poppins'>
                                        Situé au cœur d’une réserve classée par l’UNESCO, ToubaCouta est une destination unique, où nature sauvage, patrimoine sérère et hospitalité authentique se rencontrent. Entre terre et eau, le village est un point de départ idéal pour explorer les bolongs, observer une faune exceptionnelle, ou simplement se reconnecter à l’essentiel.
                                        Le campement est situé à environ 3h30 de route depuis Dakar (transfert privé possible). Accès facile depuis Dakar, Banjul ou Saly.
                                    </p>
                                    <div className='d-flex align-items-center justify-content-center gap-2'>
                                        <button className='btn btn-main text-light rounded-0 px-4 py-2'>
                                            <span className='cormorant-garamond fs-4'>
                                                View Offer
                                            </span>
                                        </button>
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
                </div>

                {/* Section découvrez */}
                <div className="bg-white py-4">
                    <div className="container">
                        <div className='d-flex flex-column align-items-center justify-content-center text-center'>

                            <h3 className='playfair-display m-0'>Découvrez</h3>
                            <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                            <div className='row'>
                                <ActivityCard content={"Pêche"} img={img4} link='/activites/peche' />
                                <ActivityCard content={"Camping"} img={img5} link='/activites/camping' />
                                <ActivityCard content={"Balades & Transports"} img={img6} link='/activites/balades-transports' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Offres spéciales exclusives */}
                <div className='bg-white py-4'>
                    <div className='container'>
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center' >
                                <h3 className='playfair-display text-center'>Offres spéciales exclusives</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='text-center'>
                                    Nous proposons plusieurs forfaits luxueux, pour des séjours exclusifs ou en hôtel-boutique.
                                    Choisissez votre forfait pour une expérience intime, chaleureuse et luxueuse.
                                </p>
                            </div>

                        </div>
                    </div>

                    <ThreeImagesBack img1={img2} img2={img8} img3={img2}>
                        <Clouds />
                        <Clouds rotate={'180deg'} pos='bottom' />
                    </ThreeImagesBack>


                    <div className='container-fluid mt-4'>
                        <div className="text-center">

                            <div className='row'>
                                <div className="col-lg-4 playfair-display">
                                    <div className='align-items-center d-flex flex-column'>
                                        <h5 className='text-main'>Camping</h5>
                                        <div className='d-flex justify-content-center align-content-center gap-2'>
                                            <h6 className=''>
                                                From
                                                $2,100
                                            </h6>
                                            <button className='btn btn-main text-light rounded-0 px-4 py-2'>
                                                <span className='cormorant-garamond fs-5'>
                                                    View Offer
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 playfair-display">
                                    <div className='align-items-center d-flex flex-column'>
                                        <h5 className='text-main'>Camping</h5>
                                        <div className='d-flex justify-content-center align-content-center gap-2'>
                                            <h6 className=''>
                                                From
                                                $2,100
                                            </h6>
                                            <button className='btn btn-main text-light rounded-0 px-4 py-2'>
                                                <span className='cormorant-garamond fs-5'>
                                                    View Offer
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 playfair-display">
                                    <div className='align-items-center d-flex flex-column'>
                                        <h5 className='text-main'>Camping</h5>
                                        <div className='d-flex justify-content-center align-content-center gap-2'>
                                            <h6 className=''>
                                                From
                                                $2,100
                                            </h6>
                                            <button className='btn btn-main text-light rounded-0 px-4 py-2'>
                                                <span className='cormorant-garamond fs-5'>
                                                    View Offer
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Award*/}
                <div className='bg-white py-4'>
                    <div className='container'>
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>
                                <h3 className='playfair-display text-center'>Awards & Press</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='text-center'>
                                    Véritable havre de paix et d'harmonie, nous vous accueillons pour une expérience de luxe intime et personnalisée à Zanzibar,
                                    sur la spectaculaire plage de sable blanc de Paje.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Last section*/}
                <div className='bg-secondary30 py-5 position-relative'>
                    {/* Nuages en haut */}
                    <Clouds />

                    {/* Nuages en bas */}
                    <Clouds rotate={'180deg'} pos='bottom' />

                    <div className='container'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-lg-6 col-12'>
                                <img src={loca} alt="" className='img-fluid' />
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <h4 className='playfair-display text-center m-0'>Là où la nature authentique rencontre l’âme du Sénégal</h4>
                                    <hr className='border-2 border-main opacity-100 ' style={{ width: "20%", maxWidth: "250px" }} />
                                    <p>
                                        ToubaCouta Evasion est un refuge éco-responsable, enraciné au cœur du Delta du Saloum, l’une des régions les plus spectaculaires et préservées d’Afrique de l’Ouest. Entre mangroves, bolongs scintillants et baobabs centenaires, notre évasion boutique vous propose une expérience intime, mêlant confort, simplicité et connexion profonde à la nature.
                                    </p>
                                    <p>
                                        Avec un nombre limité d’écolodges et d’emplacements de camping intégrés avec soin dans l’environnement, ToubaCouta Evasion vous invite à vivre la véritable intimité, l’authenticité et l’art de ralentir.
                                        Ici, c’est la nature qui donne le rythme.
                                    </p>
                                    <p>Profitez de balades en pirogue dans les bolongs, de couchers de soleil inoubliables, d’excursions de pêche traditionnelle et d’une cuisine locale inspirée et généreuse. Chaque moment est une invitation à se recentrer et à respirer.</p>
                                    <p>
                                        Fiers de faire partie d’une nouvelle génération de tourisme durable au Sénégal, nous concevons chaque détail avec attention : hébergements à faible impact, guides locaux passionnés, respect des traditions et valorisation du territoire.
                                        Que vous recherchiez l’aventure, la sérénité, ou simplement un retour à l’essentiel, ToubaCouta Evasion vous ouvre les portes d’un monde où nature, partage et présence sont au cœur de tout.
                                    </p>
                                    <button className='btn btn-main text-light rounded-0 px-4 py-2'>
                                        <span className='cormorant-garamond fs-5'>
                                            Notre Histoire
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
export default Home