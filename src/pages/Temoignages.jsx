import Footer from '../Comps/Footer'
import testimonials from '../data/testimonials.json'
import { useEffect, useRef, useCallback } from "react";

export default function Temoignages() {
    const galleryRef = useRef(null);
    const resizeTimeoutRef = useRef(null);

    // Fonction masonry pour les témoignages
    const initMasonry = useCallback(() => {
        if (!galleryRef.current) return;

        const gallery = galleryRef.current;
        const items = gallery.querySelectorAll('.masonry-item');

        if (items.length === 0) return;

        const gap = 4;
        const containerWidth = gallery.offsetWidth;
        let columns, itemWidth;

        // Déterminer le nombre de colonnes
        if (window.innerWidth >= 1200) {
            columns = 3;
        } else if (window.innerWidth >= 992) {
            columns = 3;
        } else if (window.innerWidth >= 768) {
            columns = 2;
        } else {
            columns = 1;
        }

        itemWidth = (containerWidth - (gap * (columns - 1))) / columns;

        // Réinitialiser le container
        gallery.style.position = 'relative';

        // Initialiser les hauteurs des colonnes
        const columnHeights = new Array(columns).fill(0);

        items.forEach((item, index) => {
            // Réinitialiser les styles
            item.style.position = 'absolute';
            item.style.width = `${itemWidth}px`;
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';

            // Trouver la colonne la plus courte
            const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));

            // Positionner l'item
            item.style.left = `${shortestColumnIndex * (itemWidth + gap)}px`;
            item.style.top = `${columnHeights[shortestColumnIndex]}px`;

            // Calculer la hauteur après positionnement
            const itemHeight = item.offsetHeight;
            columnHeights[shortestColumnIndex] += itemHeight + gap;

            // Animation d'apparition avec délai
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Définir la hauteur du container
        const maxHeight = Math.max(...columnHeights);
        gallery.style.height = `${maxHeight}px`;
    }, []);

    // Initialiser masonry au chargement
    useEffect(() => {
        const timer = setTimeout(() => {
            initMasonry();
        }, 100);

        return () => clearTimeout(timer);
    }, [initMasonry]);

    // Gérer le redimensionnement avec debounce
    useEffect(() => {
        const handleResize = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            resizeTimeoutRef.current = setTimeout(() => {
                initMasonry();
            }, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, [initMasonry]);

    // Fonction pour déterminer les hauteurs variables des témoignages
    const getRandomHeight = (index) => {
        // Hauteurs basées sur la longueur du texte pour plus de réalisme
        const testimonial = testimonials[index];
        const textLength = testimonial?.comment?.length || 100;

        if (textLength > 200) return 'auto'; // Très long
        if (textLength > 150) return 'auto'; // Long  
        if (textLength > 100) return 'auto'; // Moyen
        return 'auto'; // Court
    };

    // Fonction pour générer les étoiles de notation
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i
                key={i}
                className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}
                style={{ color: '#ffc107', fontSize: '0.9rem' }}
            ></i>
        ));
    };

    return (
        <main id="main" className="main">
            <section className="bg-white py-5">
                <div className="container">
                    {/* Titre */}
                    <div className="text-center d-flex align-items-center justify-content-center flex-column mb-5">
                        <div className="section-titled d-flex flex-column align-items-center justify-content-center">
                            <h3 className="playfair-display">Témoignages</h3>
                            <hr
                                className="border-2 border-main opacity-100 mb-3"
                                style={{ width: "10%", maxWidth: "150px" }}
                            />
                            <p className="poppins text-muted">
                                Ce que disent nos visiteurs et partenaires
                            </p>
                        </div>
                    </div>

                    {/* Grille masonry */}
                    <div className="container-fluid px-3">
                        <div
                            ref={galleryRef}
                            className="masonry-container"
                            style={{ width: '100%' }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="masonry-item testimonial-card"
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: '#fff',
                                        minHeight: getRandomHeight(index)
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform += ' scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = e.currentTarget.style.transform.replace(' scale(1.02)', '');
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    <div className="position-relative p-4">
                                        {/* Icône de citation en arrière-plan */}
                                        <div className="quote-bg position-absolute">
                                            <i className="bi bi-quote text-main opacity-10" style={{ fontSize: '4rem' }}></i>
                                        </div>

                                        {/* Contenu du témoignage */}
                                        <div className="testimonial-content position-relative">
                                            {/* Étoiles de notation */}
                                            <div className="rating-stars mb-2">
                                                {renderStars(testimonial.rating)}
                                            </div>

                                            <p className="fst-italic mb-4 text-dark lh-lg" style={{ fontSize: "1.05rem", fontWeight: "400" }}>
                                                "{testimonial.comment}"
                                            </p>

                                            {/* Informations de l'auteur */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-circle bg-main text-white d-flex align-items-center justify-content-center me-3"
                                                        style={{ width: '50px', height: '50px', borderRadius: '50%', fontWeight: 'bold' }}>
                                                        {testimonial.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0 fw-bold text-dark">{testimonial.name}</h6>
                                                        <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                                                            {testimonial.date}
                                                        </small>
                                                    </div>
                                                </div>

                                                {/* Badge de notation */}
                                                <div className="rating-badge bg-main text-white px-2 py-1 rounded-pill d-flex align-items-center">
                                                    <i className="bi bi-star-fill me-1" style={{ fontSize: '0.7rem' }}></i>
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{testimonial.rating}/5</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Overlay au survol */}
                                        <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                            <div className="text-center text-white">
                                                <i className="bi bi-chat-quote fs-1 mb-3"></i>
                                                <h5 className="mb-2 fw-bold">{testimonial.name}</h5>
                                                <div className="rating-stars mb-2">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                                <p className="text-uppercase opacity-75 mb-0" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                                                    {testimonial.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message si aucun témoignage */}
                        {testimonials.length === 0 && (
                            <div className="text-center py-5">
                                <i className="bi bi-chat-quote text-muted" style={{ fontSize: '4rem' }}></i>
                                <h4 className="text-muted mt-3">Aucun témoignage disponible</h4>
                                <p className="text-muted">Les témoignages apparaîtront bientôt ici</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                
            `}</style>
        </main>
    )
}