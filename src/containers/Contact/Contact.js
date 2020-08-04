import React from 'react';

import classes from './Contact.module.scss';

import {Modal} from 'react-bootstrap';


const Contact = () => {
    return (
        <div>
        <Modal.Header closeButton>
            <Modal.Title>Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Contact Details can go here
            </Modal.Body>
        </div>
    );
};

export default Contact;