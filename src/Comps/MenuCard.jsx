import { Link } from 'react-router-dom';

export default function MenuCard({ img, title, price, orders, link }) {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card text-bg-dark rounded-0 border-0 shadow-lg overflow-hidden menu-card"
            >
                {/* Image */}
                <img
                    src={img}
                    className="card-img"
                    alt={title}
                    style={{
                        height: '450px',       // Hauteur fixe pour toutes les cartes
                        objectFit: 'cover'     // Recadre l'image sans déformation
                    }}
                />

                {/* Overlay avec dégradé noir */}
                <div
                    className="card-img-overlay d-flex flex-column align-items-start justify-content-end p-3"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.2) 60%, transparent)"
                    }}
                >
                    {/* Titre */}
                    <h3 className=" text-white poppins">{title}</h3>

                    {/* Prix & commandes */}
                    {/* <div className="d-flex text-white small ">
                        <h5 className="fw-bold poppins">{price} XOF</h5>
                    </div> */}

                    {/* Bouton */}
                    {/* <button
                        className="btn mt-2 text-white"
                        style={{
                            backgroundColor: "#D4AF7F",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >
                        Voir plus →
                    </button> */}
                </div>
            </div>
        </div>
    );
}
