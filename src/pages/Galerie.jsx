import logo from '../assets/Logo.png'
import heroImg from '../assets/9.jpg'
import img5 from '../assets/5.jpg'
import loca from '../assets/loca.webp'

// Import des images de balades
import balade1 from '../assets/img/Balades/balade1.jpg'
import balade2 from '../assets/img/Balades/balade2.jpg'
import balade3 from '../assets/img/Balades/balade3.jpg'
import balade4 from '../assets/img/Balades/balade4.jpg'
import balade5 from '../assets/img/Balades/balade5.jpg'
import balade6 from '../assets/img/Balades/balade6.jpg'
import balade7 from '../assets/img/Balades/balade7.jpg'
import balade8 from '../assets/img/Balades/balade8.jpg'
import balade9 from '../assets/img/Balades/balade9.jpg'
import balade10 from '../assets/img/Balades/balade10.jpg'
import balade11 from '../assets/img/Balades/balade11.jpg'
import balade12 from '../assets/img/Balades/balade12.jpg'
import balade13 from '../assets/img/Balades/balade13.jpg'
import balade14 from '../assets/img/Balades/balade14.jpg'
import balade15 from '../assets/img/Balades/balade15.jpg'
import balade16 from '../assets/img/Balades/balade16.jpg'
import balade17 from '../assets/img/Balades/balade17.jpg'
import balade18 from '../assets/img/Balades/balade18.jpg'
import balade19 from '../assets/img/Balades/balade19.jpg'

// Import des images de camping
import camping1 from '../assets/img/Camping/camping1.jpg'
import camping2 from '../assets/img/Camping/camping2.jpg'
import camping3 from '../assets/img/Camping/camping3.jpg'

// Import des images de pêche
import peche1 from '../assets/img/Peche/peche1.jpg'
import peche2 from '../assets/img/Peche/peche2.jpg'
import peche3 from '../assets/img/Peche/peche3.jpg'
import peche4 from '../assets/img/Peche/peche4.jpg'
import peche5 from '../assets/img/Peche/peche5.jpg'
import peche6 from '../assets/img/Peche/peche6.jpg'
import peche7 from '../assets/img/Peche/peche7.jpg'
import peche8 from '../assets/img/Peche/peche8.jpg'
import peche9 from '../assets/img/Peche/peche9.jpg'
import peche10 from '../assets/img/Peche/peche10.jpg'
import peche11 from '../assets/img/Peche/peche11.jpg'
import peche12 from '../assets/img/Peche/peche12.jpg'
import peche13 from '../assets/img/Peche/peche13.jpg'
import Footer from '../Comps/Footer'
import ThreeImagesBack from '../Comps/ThreeImagesBack'
import ActivityLearnMore from '../Comps/ActivityLearnMore'
import PhotoCard from '../Comps/PhotoCard'
import Clouds from '../Comps/Clouds'
import { useEffect, useRef, useState, useCallback } from "react";
import { Link, NavLink } from 'react-router-dom'
import galleryData from '../data/gallery.json'

export default function Galerie() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const sentinelRef = useRef(null);
    const galleryRef = useRef(null);
    const resizeTimeoutRef = useRef(null);

    // Import des images
    const imageMap = {
        heroImg,
        img5,
        loca,
        // Balades
        balade1,
        balade2,
        balade3,
        balade4,
        balade5,
        balade6,
        balade7,
        balade8,
        balade9,
        balade10,
        balade11,
        balade12,
        balade13,
        balade14,
        balade15,
        balade16,
        balade17,
        balade18,
        balade19,
        // Camping
        camping1,
        camping2,
        camping3,
        // Pêche
        peche1,
        peche2,
        peche3,
        peche4,
        peche5,
        peche6,
        peche7,
        peche8,
        peche9,
        peche10,
        peche11,
        peche12,
        peche13
    };

    const filters = [
        { key: 'all', label: 'TOUS', count: galleryData.length },
        { key: 'balade', label: 'BALADES', count: galleryData.filter(img => img.category === 'balade').length },
        { key: 'peche', label: 'PÊCHE', count: galleryData.filter(img => img.category === 'peche').length },
        { key: 'camping', label: 'CAMPING', count: galleryData.filter(img => img.category === 'camping').length },
        { key: 'hebergement', label: 'HÉBERGEMENT', count: galleryData.filter(img => img.category === 'hebergement').length },
        { key: 'localisation', label: 'LOCALISATION', count: galleryData.filter(img => img.category === 'localisation').length }
    ];

    // Fonction masonry simplifiée et plus robuste
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
            columns = 4;
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
            }, index * 50);
        });

        // Définir la hauteur du container
        const maxHeight = Math.max(...columnHeights);
        gallery.style.height = `${maxHeight}px`;
    }, []);

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredImages(galleryData);
        } else {
            setFilteredImages(galleryData.filter(img => img.category === activeFilter));
        }
    }, [activeFilter]);

    // Initialiser masonry avec un délai minimal
    useEffect(() => {
        const timer = setTimeout(() => {
            initMasonry();
        }, 50); // Délai réduit à 50ms

        return () => clearTimeout(timer);
    }, [filteredImages, initMasonry]);

    // Gérer le redimensionnement avec debounce
    useEffect(() => {
        const handleResize = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            resizeTimeoutRef.current = setTimeout(() => {
                initMasonry();
            }, 150); // Debounce réduit
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, [initMasonry]);

    const handleFilterClick = (filterKey) => {
        setActiveFilter(filterKey);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    // Fonction pour déterminer les hauteurs aléatoirement
    const getRandomHeight = (index) => {
        const heights = [200, 280, 320, 250, 360, 240, 300, 220, 340, 260, 800];
        return heights[index % heights.length];
    };

    return (
        <>
            <main id="main" className="main">
                {/* Section Galerie */}
                <div className='bg-white py-5'>
                    <div className='container'>
                        {/* Titre de la section */}
                        <div className='text-center d-flex align-items-center justify-content-center flex-column mb-5'>
                            <div className='section-titled d-flex flex-column align-items-center justify-content-center'>
                                <h3 className='playfair-display '>Galerie</h3>
                                <hr className='border-2 border-main opacity-100 mb-3' style={{ width: "10%", maxWidth: "150px" }} />
                                <p className='poppins text-muted'>
                                    Une sélection des plus belles photos de Toubacouta Evasion
                                </p>
                            </div>
                        </div>

                        {/* Filtres */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-10">
                                <ul className="nav nav-pills justify-content-center flex-wrap gallery-filters">
                                    {filters.map((filter) => (
                                        <li key={filter.key} className="nav-item mx-2 mb-2">
                                            <button
                                                className={`btn cormorant-garamond px-4 py-2 text-uppercase fw-semibold ${activeFilter === filter.key ? 'active btn-main' : 'btn-outline-main'}`}
                                                onClick={() => handleFilterClick(filter.key)}
                                                style={{
                                                    transition: 'all 0.3s ease',
                                                    fontSize: '0.9rem',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                {filter.label}
                                                <span className="ms-2 badge bg-light text-dark">{filter.count}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grille masonry */}
                <div className='container-fluid px-3'>
                    <div
                        ref={galleryRef}
                        className="masonry-container"
                        style={{ width: '100%' }}
                    >
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="masonry-item"
                                style={{
                                    borderRadius: '0px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => openModal(image)}
                                
                            >
                                <div className="position-relative">
                                    <img
                                        src={imageMap[image.src]}
                                        alt={image.alt}
                                        className="img-fluid w-100"
                                        style={{
                                            height: `${getRandomHeight(index)}px`,
                                            objectFit: 'cover'
                                        }}
                                        loading="eager" // Chargement immédiat
                                    />
                                    <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                        <div className="text-center text-white">
                                            <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                            <h6 className="mb-1 fw-bold">{image.title}</h6>
                                            <small className="text-uppercase opacity-75">{image.category}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Message si aucune image */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-5">
                            <i className="bi bi-images text-muted" style={{ fontSize: '4rem' }}></i>
                            <h4 className="text-muted mt-3">Aucune image trouvée</h4>
                            <p className="text-muted">Essayez un autre filtre</p>
                        </div>
                    )}
                </div>

                {/* Modal pour affichage en grand */}
                {selectedImage && (
                    <div
                        className="modal fade show d-block"
                        style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999 }}
                        onClick={closeModal}
                    >
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content bg-transparent border-0">
                                <div className="modal-header border-0 pb-0">
                                    <h5 className="modal-title text-white">{selectedImage.title}</h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        onClick={closeModal}
                                        aria-label="Fermer"
                                    ></button>
                                </div>
                                <div className="modal-body text-center">
                                    <img
                                        src={imageMap[selectedImage.src]}
                                        alt={selectedImage.alt}
                                        className="img-fluid rounded shadow"
                                        style={{ maxHeight: '80vh', objectFit: 'contain' }}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <Footer />
            </main>

            <style jsx>{`
                
            `}</style>
        </>
    )
}