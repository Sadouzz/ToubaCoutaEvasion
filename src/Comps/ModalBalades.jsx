import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalBalades({ title, content, img, ...props }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <img src={img} alt="" className="img-fluid" />
                <div className='d-flex justify-content-center flex-column align-items-center mt-3'>

                    <h4 className='playfair-display m-0'>{title}</h4>
                    <hr className='border-2 border-main opacity-100 ' style={{ width: "20%", maxWidth: "250px" }} />
                    <p className='poppins text-center'>
                        {content}
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-main text-white rounded-0' onClick={props.onHide}>
                    <span className='playfair-display'>
                        Close
                    </span>
                </button>
            </Modal.Footer>
        </Modal>
    );
}
