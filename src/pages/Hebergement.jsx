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
import ThreeImagesWithHoverChanges from '../Comps/ThreeImagesWithHoverChanges'
import ActivityLearnMore from '../Comps/ActivityLearnMore'
import PhotoCard from '../Comps/PhotoCard'
import Clouds from '../Comps/Clouds'
import { useEffect, useRef, useState, useCallback } from "react";
import { Link, NavLink } from 'react-router-dom'
import galleryData from '../data/gallery.json'

export default function Hebergement() {
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
                {/* Section Hebergement */}

                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-lg-4 col-md-6  px-1">
                            <div className="card text-bg-dark rounded-0 border-0 activity-card shadow-lg overflow-hidden">
                                <img
                                    src={balade11}
                                    className="card-img"
                                    style={{
                                        height: 'calc(100vh - 70px)',    
                                        objectFit: 'cover'     // Recadre l'image sans déformation
                                    }}
                                />

                                <div
                                    className="card-img-overlay d-flex flex-column justify-content-center align-items-center"
                                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                                >
                                    <img src={logo} alt="" style={{ maxWidth: '50px' }} />
                                    <h2
                                        className="card-title text-white cormorant-garamond text-center"
                                        style={{ fontSize: "2rem" }}
                                    >
                                        fzfzfzfzfzfzfzfzfz
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 px-1">
                            <div className="card text-bg-dark rounded-0 border-0 activity-card shadow-lg overflow-hidden">
                                <img
                                    src={balade1}
                                    className="card-img"
                                    style={{
                                        height: 'calc(100vh - 70px)',       // Hauteur fixe pour toutes les cartes
                                        objectFit: 'cover',
                                        borderRadius: 0
                                    }}
                                />

                                <div
                                    className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center"
                                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                                >
                                    <img src={logo} alt="" style={{ maxWidth: '50px' }} />
                                    <h2
                                        className="card-title text-white cormorant-garamond text-center"
                                        style={{ fontSize: "2rem", maxWidth: '300px' }}
                                    >
                                        EXPLORER NOS HOTELS PARTENAIRES
                                    </h2>
                                    <p style={{
                                        maxWidth: '500px'
                                    }}>
                                        Our deluxe rooms are stunning en-suite rooms located in a two or five-bedroom villa, tastefully appointed, with shared amenities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 px-1">
                            <div className="card text-bg-dark rounded-0 border-0 activity-card shadow-lg overflow-hidden">
                                <img
                                    src={balade2}
                                    className="card-img"
                                    style={{
                                        height: 'calc(100vh - 70px)',       // Hauteur fixe pour toutes les cartes
                                        objectFit: 'cover'     // Recadre l'image sans déformation
                                    }}
                                />

                                <div
                                    className="card-img-overlay d-flex flex-column justify-content-center align-items-center"
                                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                                >
                                    <img src={logo} alt="" style={{ maxWidth: '50px' }} />
                                    <h2
                                        className="card-title text-white cormorant-garamond text-center"
                                        style={{ fontSize: "2rem" }}
                                    >
                                        fzfzfzfzfzfzfzfzfz
                                    </h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <Footer />
            </main>

            <style jsx>{`
                
            `}</style>
        </>
    )
}