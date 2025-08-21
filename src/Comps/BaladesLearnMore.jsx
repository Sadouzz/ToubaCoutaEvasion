import { useState, useEffect } from "react";
import ModalBalades from "../Comps/ModalBalades";

export default function BaladesLearnMore({ title, content, modalContent, img, reversed }) {
    const [modalShow, setModalShow] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 576);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 576);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <ModalBalades
                show={modalShow}
                onHide={() => setModalShow(false)}
                img={img}
                title={title}
                content={modalContent}
            />

            <div className="bg-white py-4">
                <div className="container">
                    <div className="row align-items-center">
                        {isDesktop ? (
                            // 🖥️ Desktop → alterne selon reversed
                            reversed ? (
                                <>
                                    <div className="col-lg-6">
                                        <img src={img} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center">
                                        <h3 className="playfair-display m-0">{title}</h3>
                                        <hr className="border-2 border-main opacity-100" style={{ width: "10%", maxWidth: "150px" }} />
                                        <p className="poppins">{content}</p>
                                        <button
                                            className="btn btn-main text-light rounded-0 px-4 py-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            <span className="cormorant-garamond fs-5 text-white">En Savoir Plus</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center">
                                        <h3 className="playfair-display m-0">{title}</h3>
                                        <hr className="border-2 border-main opacity-100" style={{ width: "10%", maxWidth: "150px" }} />
                                        <p className="poppins">{content}</p>
                                        <button
                                            className="btn btn-main text-light rounded-0 px-4 py-2"
                                            onClick={() => setModalShow(true)}
                                        >
                                            <span className="cormorant-garamond fs-5 text-white">En Savoir Plus</span>
                                        </button>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={img} alt="" className="img-fluid" />
                                    </div>
                                </>
                            )
                        ) : (
                            // 📱 Mobile → toujours même style (image au-dessus, texte en-dessous)
                            <>
                                <div className="col-12 mb-3">
                                    <img src={img} alt="" className="img-fluid" />
                                </div>
                                <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h3 className="playfair-display m-0">{title}</h3>
                                    <hr className="border-2 border-main opacity-100" style={{ width: "10%", maxWidth: "150px" }} />
                                    <p className="poppins">{content}</p>
                                    <button
                                        className="btn btn-main text-light rounded-0 px-4 py-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        <span className="cormorant-garamond fs-5 text-white">En Savoir Plus</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
