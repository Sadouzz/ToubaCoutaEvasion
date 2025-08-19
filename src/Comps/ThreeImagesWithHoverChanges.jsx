
import React, { useState } from 'react';

export default function ThreeImagesBackWithHoverChanges({ img1, img2, img3, borderColor = 'white', children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        img1,
        img2,
        img3,
    ];

    return (
        <div
            style={{
                display: "flex",
                height: "630px",
                position: "relative",
                overflow: "hidden",
                // L'arrière-plan de toute la div change selon l'index actif
                backgroundImage: `url(${images[activeIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.5s ease-in-out"
            }}
        >
            {/* Overlay sombre pour améliorer la lisibilité des cadres */}
            {/* <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    transition: "background-color 0.3s ease"
                }}
            /> */}

            {/* Les trois cadres pour le hover */}
            {images.map((img, i) => (
                <div
                    key={i}
                    style={{
                        flex: 1,
                        border: `2px solid ${borderColor}`,
                        cursor: "pointer",
                        position: "relative",
                        zIndex: 2,
                        backgroundColor: activeIndex === i ? "rgba(255, 255, 255, 0.1)" : "transparent",
                        transition: "background-color 0.3s ease",
                        backdropFilter: activeIndex === i ? "blur(1px)" : "none"
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                >
                    {/* Indicateur visuel pour le cadre actif */}
                    {activeIndex === i && (
                        <div
                            style={{
                                position: "absolute",
                                top: "30px",
                                right: "10px",
                                width: "12px",
                                height: "12px",
                                backgroundColor: borderColor,
                                borderRadius: "50%",
                                boxShadow: `0 0 10px ${borderColor}`,
                                animation: "pulse 2s infinite"
                            }}
                        />
                    )}

                    {/* Numéro du cadre (optionnel) */}
                    {/* <div
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "10px",
                            color: borderColor,
                            fontSize: "14px",
                            fontWeight: "bold",
                            textShadow: "0 1px 3px rgba(0,0,0,0.8)"
                        }}
                    >
                        {i + 1}
                    </div> */}
                </div>
            ))}

            {/* Les children (comme les Clouds) */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 5,
                pointerEvents: "none" // Permet aux événements de passer à travers
            }}>
                {children}
            </div>

            {/* Style pour l'animation pulse */}
            <style jsx>{`
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 ${borderColor}40;
                    }
                    70% {
                        box-shadow: 0 0 0 10px transparent;
                    }
                    100% {
                        box-shadow: 0 0 0 0 transparent;
                    }
                }
            `}</style>
        </div>
    );
}