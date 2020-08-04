import React from 'react';

import classes from './About.module.scss';

import {Modal} from 'react-bootstrap';


const About = (props) => {
    return (
        <div className={classes.modalContainer}>
        <Modal.Header closeButton>
            <Modal.Title dialogClassName={classes.modalTitle}>
                <h3 className={classes.title}>About</h3>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={classes.description}>
                    Fusce maximus convallis lobortis. Sed iaculis tortor ligula,
                    et rutrum mauris iaculis non. Quisque euismod ut est ac aliquet.
                    Cras accumsan tincidunt aliquet. Nulla interdum tincidunt augue,
                    at bibendum orci viverra nec. Suspendisse at eros risus. Vivamus
                    dolor quam, dictum id auctor eu, malesuada at neque. Donec sagittis
                    turpis ac nisi accumsan consequat. Donec fermentum augue eu dolor tempor
                    molestie. Praesent posuere, nulla in consectetur efficitur, justo ante
                    porttitor justo, at suscipit enim diam gravida mauris. Cras vestibulum
                    est quis augue commodo, a dapibus augue dictum. Donec ullamcorper dignissim 
                    sem at sodales. Sed rutrum, nibh euismod aliquam suscipit, quam nulla vehicula 
                    libero, eu mollis ex ante sed ex. Aliquam metus est, maximus sit amet ultrices 
                    dictum, aliquet convallis velit. Nunc at aliquet libero, nec pellentesque 
                    turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
            </Modal.Body>
        </div>
    );
};

export default About;