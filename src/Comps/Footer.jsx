import logo from '../assets/Logo.png'
function Footer() {
    return (
        <>
            <div className='bg-white py-4'>
                <div className="container">
                    <div className='text-black d-flex align-items-center justify-content-center flex-column'>
                        <img src={logo} alt="Logo" className="me-2" style={{ maxHeight: '175px' }} />
                        <div className='text-center cormorant-garamond '>
                            <h5>TOUBACOUTA</h5>
                            <h1 className='fw-bold '>EVASION</h1>
                            <h2>COMPLEXE TOURISTIQUE</h2>
                        </div>
                    </div>
                    <div className="row align-items-center py-4">
                        <div className="col-2">
                            <i className="bi bi-caret-left-fill"></i>
                        </div>
                        <div className="col-8">
                            <div className='text-center'>
                                <p>
                                    Great team, always concerned with our conWe came back this morning from one fabulous week at White Sand Villas and absolutely loved every minute of our stay in this wonderful hotel.The location is ideal on a gorgeous beach with a huge stretch of white sand and clear blue water. Very near are restaurants and bars but you won’t want to get out of the hotel! Extremely clean in and out, the hotel is...
                                </p>
                                <h3 className='cormorant-garamond fw-bold'>Arame DIAGNE - June 2025</h3>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-caret-right-fill"></i>
                        </div>
                    </div>
                    <div className='text-black d-flex align-items-center justify-content-center flex-column mb-5'>
                        <button className='border border-1 border-main text-tertiary cormorant-garamond text-uppercase fs-5'>
                            VOIR TOUS LES témoignages
                        </button>
                    </div>
                    <div className='row poppins'>
                        <div className='col-lg-4 d-flex align-items- flex-column'>
                            <h5>Contactez Nous</h5>
                            <p className='mb-0'>+221 78 436 18 18</p>
                            <a href="mailto:toubacouta.evasion@gmail.com">toubacouta.evasion@gmail.com</a>
                        </div>
                        <div className='col-lg-4 d-flex align-items- flex-column'>
                            <h5>Liens Utiles</h5>
                            <p className='mb-0'>+221 78 436 18 18</p>
                            <p className='mb-0'>+221 78 436 18 18</p>
                            <p className='mb-0'>+221 78 436 18 18</p>
                        </div>
                        <div className='col-lg-4 d-flex align-items- flex-column'>
                            <h5>Réseaux Sociaux</h5>
                            <div className='d-flex gap-3'>
                                <a href="https://www.facebook.com/profile.php?id=61578139113250&mibextid=wwXIfr&mibextid=wwXIfr" target='_blank'><i class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/toubacoutaevasion?igsh=MXdpZWo5MGlheGN0Nw%3D%3D&utm_source=qr" target='_blank'><i class="bi bi-instagram"></i></a>
                                <a href="https://www.tiktok.com/@toubacouta.evasio?_t=ZM-8z4RzkCFXLZ&_r=1" target='_blank'><i class="bi bi-tiktok"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='text-main border-1 opacity-75' />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <small>© 2025 ToubaCouta Evasion, All rights reserved.</small>
                        </div>
                        <div className="col-12 col-lg-6 align-content-end">
                            <small>Designed By <a href="https://ousmansadjo.com/" target='_blank'>Ousman SADJO</a> & Cherif Atab Diop</small>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer