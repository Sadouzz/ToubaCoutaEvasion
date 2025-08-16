import logo from '../assets/Logo.png'
import heroImg from '../assets/9.jpg'
import img5 from '../assets/5.jpg'
import campingImg1 from '../assets/Camping/1.jpg'
import campingImg2 from '../assets/Camping/2.jpg'
import campingImg8 from '../assets/Camping/8.jpg'
import bgPattern1 from '../assets/bg-pattern.png'
import loca from '../assets/loca.webp'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import PhotoCard from '../Comps/PhotoCard'
import Clouds from '../Comps/Clouds'
import { Link } from 'react-router-dom'
function Camping() {
    return (
        <>
            <main id="main" className="main">
                {/*HERO SECTION*/}
                <div id='hero' className="d-flex justify-content-center align-items-center"
                    style={{
                        height: 'calc(100vh - 60px)',
                        backgroundImage: `url(${campingImg2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>


                </div>

                {/*Seconde SECTION*/}
                <div className='bg-white py-4'>
                    <div className='container '>
                        <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                            <h3 className='playfair-display'>Camping</h3>
                            <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />
                            <p className='poppins'>
                                Avec ses forêts paisibles, ses bolongs mystérieux et ses ciels étoilés à perte de vue, ToubaCouta est rapidement devenu l’un des meilleurs endroits pour vivre une expérience de camping authentique en Afrique de l’Ouest. C’est dans ce décor naturel exceptionnel que nous avons créé ToubaCouta Evasion, un espace dédié aux amoureux de la nature, alliant confort, aventure et déconnexion totale.
                            </p>
                        </div>
                    </div>
                </div>



                {/*4e SECTION service*/}
                <div className="bg-secondary30 py-5 position-relative">
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
                                    <h4 className='playfair-display'>Nos Services</h4>
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
                </div>

                {/* Section Nos plats */}
                <div className="bg-white py-4">
                    <div className="container">
                        <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                            <h3 className='playfair-display'>Galerie</h3>
                            <hr className='border-2 border-main opacity-100 ' style={{ width: "10%", maxWidth: "150px" }} />

                        </div>
                    </div>
                </div>

                <div className='bg-main10 position-relative'>
                    <div className=''
                        style={{
                            backgroundImage: `url(${img5})`,
                            backgroundSize: 'cover',
                            height: '100%',
                            width: '100%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            position: 'absolute', // pour placer les nuages
                            backgroundSize: 'cover',
                            opacity: .51, // Adjust opacity (0.0 to 1.0)
                        }}
                    >
                    </div>
                    <div className='container py-5'>

                        {/* Nuages en haut */}
                        <Clouds />
                        <div className='container py-5'>
                            <div className='row justify-content-center'>
                                <PhotoCard img={campingImg1} title={'Retour aux sources'} content={'Pas de murs, pas de montre. Juste le souffle du vent et le chant des insectes.'} />
                                <PhotoCard img={campingImg2} title={'Campement du jour'} content={'Monter la tente, allumer le feu, et laisser le monde tourner sans nous.'} />
                                <PhotoCard img={campingImg8} title={'Repos sauvage'} content={'Loin des villes, plus proche de soi.'} />

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