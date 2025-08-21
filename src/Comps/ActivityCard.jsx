import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function ActivityCard({ content, img, link='/' }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card text-bg-dark rounded-0 border-0 activity-card shadow-lg overflow-hidden">
                <Link className='stretched-link' to={link}></Link>
                <img
                    src={img}
                    className="card-img"
                    alt={content}
                    style={{
                        height: '450px',       // Hauteur fixe pour toutes les cartes
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
                        {content}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;
