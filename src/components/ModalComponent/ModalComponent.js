import React, { useContext } from 'react';
import classes from './ModalComponent.module.scss';
import './ModalComponent.css';

import {Modal, Button} from 'react-bootstrap';

import { ShowModalContext,
         ModalContentContext } from '../../context/GlobalContext';

import About from '../../containers/About/About';
import Contact from '../../containers/Contact/Contact';
import Info from '../../containers/Info/Info';

const ModalComponent = () => {

    const [showModal, setShowModal] = useContext(ShowModalContext);

    const [modalContent, setModalContent] = useContext(ModalContentContext);


    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    let content;

    if (modalContent === "about") {
        content = <About/>;
    } else if (modalContent === "info") {
        content = <Info/>;
    }
    
    // else if (modalContent === "contact") {
    //     content = <Contact/>;
    // }

    
    return (
        <Modal show={showModal}
              onHide={handleClose}
              className="aboutModal"
        >
            {content}
        </Modal>
    );
};

export default ModalComponent;

{/* <Modal show={showModal}
onHide={handleClose}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered> */}