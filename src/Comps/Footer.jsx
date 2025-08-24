import { useState, useEffect } from 'react'
import logo from '../assets/Logo.png'
import testimonialsData from '../data/testimonials.json' // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'

function Footer() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        setTestimonials(testimonialsData)
    }, [])

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        )
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    // Auto-rotation des témoignages (optionnel)
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial()
        }, 8000) // Change toutes les 8 secondes

        return () => clearInterval(interval)
    }, [testimonials.length])

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <i
                key={index}
                className={`bi bi-star${index < rating ? '-fill' : ''} text-warning`}
            ></i>
        ))
    }

    const currentTestimonialData = testimonials[currentTestimonial]

    return (
        <>
            <div className='bg-white py-4'>
                <div className="container">
                    {/* Logo and Branding Section */}
                    <div className='text-black d-flex align-items-center justify-content-center flex-column'>
                        <img src={logo} alt="Toubacouta Evasion Logo" className="me-2" style={{ maxHeight: '175px' }} />
                        <div className='text-center cormorant-garamond'>
                            <h5>TOUBACOUTA</h5>
                            <h1 className='fw-bold'>EVASION</h1>
                            <h2>COMPLEXE TOURISTIQUE</h2>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    {currentTestimonialData && (
                        <div className="row align-items-center py-4">
                            <div className="col-2">
                                <button
                                    className="btn btn-link text-black p-0 border-0 w-100 text-center"
                                    aria-label="Témoignage précédent"
                                    onClick={prevTestimonial}
                                >
                                    <i className="bi bi-caret-left-fill fs-3"></i>
                                </button>
                            </div>
                            <div className="col-8">
                                <div className='text-center'>
                                    <div className='mb-2'>
                                        {renderStars(currentTestimonialData.rating)}
                                    </div>
                                    <p className='testimonial-text'>
                                        "{currentTestimonialData.comment}"
                                    </p>
                                    <h3 className='cormorant-garamond fw-bold'>
                                        {currentTestimonialData.name} - {currentTestimonialData.date}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-2">
                                <button
                                    className="btn btn-link text-black p-0 border-0 w-100 text-center"
                                    aria-label="Témoignage suivant"
                                    onClick={nextTestimonial}
                                >
                                    <i className="bi bi-caret-right-fill fs-3"></i>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Pagination dots */}
                    <div className='d-flex justify-content-center mb-4'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`btn btn-sm rounded-circle mx-1 ${currentTestimonial === index
                                    ? 'bg-dark'
                                    : 'bg-secondary bg-opacity-25'
                                    }`}
                                style={{ width: '10px', height: '10px' }}
                                onClick={() => setCurrentTestimonial(index)}
                                aria-label={`Aller au témoignage ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className='d-flex align-items-center justify-content-center flex-column mb-5'>
                        <Link to='/temoignages'>
                            <button className='btn border border-1 rounded-0 px-4 py-2 btn-tertiary1'>
                                <span className='text-white cormorant-garamond text-uppercase fs-5'>
                                    VOIR TOUS LES TÉMOIGNAGES
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className='row poppins mb-4'>
                        <div className='col-lg-4 d-flex align-items-start flex-column mb-4 mb-lg-0'>
                            <h5 className='mb-3'>Contactez Nous</h5>
                            <p className='mb-2'>
                                <i className="bi bi-telephone me-2"></i>
                                <a href="tel:+221784361818" className="text-decoration-none text-dark">+221 78 436 18 18</a>
                            </p>
                            <p className='mb-2'>
                                <i className="bi bi-envelope me-2"></i>
                                <a href="mailto:toubacouta.evasion@gmail.com" className="text-decoration-none text-dark">
                                    toubacouta.evasion@gmail.com
                                </a>
                            </p>
                            <p className='mb-0'>
                                <i className="bi bi-geo-alt me-2"></i>
                                Toubacouta, Fatick, Sénégal
                            </p>
                        </div>

                        <div className='col-lg-4 d-flex align-items-start flex-column mb-4 mb-lg-0'>
                            <h5 className='mb-3'>Liens Utiles</h5>
                            <Link to="/activites" className='mb-2 text-decoration-none text-dark'>Activités</Link>
                            <Link to="/restaurant" className='mb-2 text-decoration-none text-dark'>Restaurant</Link>
                            <Link to="/galerie" className='mb-2 text-decoration-none text-dark'>Galerie</Link>
                            <Link to="/notre-histoire" className='mb-2 text-decoration-none text-dark'>Notre Histoire</Link>
                        </div>

                        <div className='col-lg-4 d-flex align-items-start flex-column'>
                            <h5 className='mb-3'>Réseaux Sociaux</h5>
                            <div className='d-flex gap-3'>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61578139113250&mibextid=wwXIfr&mibextid=wwXIfr"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-dark fs-4"
                                    aria-label="Facebook"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/toubacoutaevasion?igsh=MXdpZWo5MGlheGN0Nw%3D%3D&utm_source=qr"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-dark fs-4"
                                    aria-label="Instagram"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@toubacouta.evasio?_t=ZM-8z4RzkCFXLZ&_r=1"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-dark fs-4"
                                    aria-label="TikTok"
                                >
                                    <i className="bi bi-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <hr className='text-dark border-1 opacity-25' />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <small className="text-muted">© 2025 ToubaCouta Evasion, All rights reserved.</small>
                        </div>
                        <div className="col-12 col-lg-6 text-lg-end">
                            <small className="text-muted">
                                Designed By{' '}
                                <a
                                    href="https://ousmansadjo.com/"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                >
                                    Ousman SADJO
                                </a>
                                {' '}&{' '}
                                <span>Cherif Atab Diop</span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .testimonial-text {
                    font-style: italic;
                    line-height: 1.6;
                    max-height: 120px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
                
                .btn:hover {
                    transform: translateY(-1px);
                    transition: all 0.3s ease;
                }
                
                .testimonial-section {
                    min-height: 200px;
                }
            `}</style>
        </>
    )
}

export default Footer