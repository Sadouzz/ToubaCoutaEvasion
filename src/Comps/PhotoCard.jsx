import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function PhotoCard({ title, content, img }) {
    return (
        <div className="col-lg-6 col-md-6 col-12 my-2">
            <div className="card text-bg-dark rounded-0 border-0 photo-card shadow-lg overflow-hidden">
                <img
                    src={img}
                    className="card-img-top position-relative z-0 rounded-0"
                    alt={content}
                    style={{
                        height: '350px',       // Hauteur fixe pour toutes les cartes
                        objectFit: 'cover'     // Recadre l'image sans déformation
                    }}
                />

                <div
                    className="card-body bg-light d-flex flex-column justify-content-center align-items-center px-5 py-2 position-relative z-1"
                >
                    {/* <img src={logo} alt="" style={{ maxWidth: '50px' }} /> */}
                    <h4 className='cormorant-garamond text-dark m-0'>{title}</h4>
                    <hr className='border-2 border-main opacity-100 m-1' style={{ width: "10%", maxWidth: "150px" }} />
                    <small
                        className="card-title text-dark text-center poppins"
                    >
                        {content}
                    </small>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
