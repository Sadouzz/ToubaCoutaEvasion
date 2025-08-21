import logo from '../assets/Logo.png'
import heroImg from '../assets/9.jpg'
import huitre1 from '../assets/img/huitre/huitre1.jpeg'
import huitre2 from '../assets/img/huitre/huitre2.jpeg'
import huitre3 from '../assets/img/huitre/huitre3.jpeg'
import img5 from '../assets/5.jpg'
import loca from '../assets/loca.webp'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import ThreeImagesWithHoverChanges from '../Comps/ThreeImagesWithHoverChanges'
import Clouds from '../Comps/Clouds'
import MenuCard from '../Comps/MenuCard'
import { Link } from 'react-router-dom'
function Restaurant() {
    return (
        <>
            <main id="main" className="main">
                {/*HERO SECTION*/}
                <div id='hero' className="d-flex justify-content-center align-items-center"
                    style={{
                        height: 'calc(100vh - 200px)',
                        backgroundImage: `url(${heroImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>

                    <div className='text-center cormorant-garamond text-light d-flex flex-column align-items-center'>
                        <h1 className='fw-bold text-main'>RESTAURANT</h1>
                        <h4>TOUBACOUTA EVASION VOUS OFFRE UN RESTAURANT</h4>
                        <hr className='border-2 border-main opacity-100 ' style={{ width: "40%", maxWidth: "450px" }} />
                    </div>
                </div>

                {/*Seconde SECTION*/}
                <div className='bg-white py-4'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>

                                <h3 className='playfair-display'>ToubaCouta Evasion – Nature & Élégance au cœur du Delta</h3>
                                <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins'>Véritable écrin de calme et d’authenticité, ToubaCouta Evasion vous invite à vivre une expérience unique, intime et immersive, au cœur du majestueux Delta du Saloum. Entre bolongs scintillants, forêts paisibles et rencontres inoubliables avec la nature, chaque instant ici est une reconnexion avec l’essentiel.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*3e SECTION avec image*/}
                <ThreeImagesWithHoverChanges img1={img5} img2={loca} img3={heroImg}>
                    <Clouds />

                    {/* Nuages en bas */}
                    <Clouds rotate={'180deg'} pos='bottom' />
                </ThreeImagesWithHoverChanges>

                


                {/*4e SECTION localisation*/}
                {/* <div className="bg-secondary py-5">
                    <div className="container">
                        <div className='d-flex align-items-center justify-content-between row'>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <img src={loca} className='img-fluid' alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <h4 className='playfair-display'>Notre Localisation</h4>
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
                </div> */}

                {/* Section Nos plats */}
                <div className="bg-white py-4">
                    <div className="container">
                        <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                            <h3 className='playfair-display'>Nos Plats</h3>
                            <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                            <div className='row'>
                                <MenuCard title={"Huîtres Gratins"} img={huitre1} price='7500' />
                                <MenuCard title={"Huîtres Gratins"} img={huitre2} price='7500' />
                                <MenuCard title={"Pêche"} img={huitre1} price='9000' />
                                <MenuCard title={"Pêche"} img={huitre2} price='9000' />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}
export default Restaurant