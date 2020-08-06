import React from 'react';

import classes from './About.module.scss';

import './About.css';

import {Modal} from 'react-bootstrap';


const About = (props) => {
    return (
        <div className={classes.modalContainer}>
        <Modal.Header className="modalHeader" closeButton>
            <Modal.Title className="modalTitle">
                <h3 className={classes.title}>About</h3>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={classes.description}>
                    This game was developed as a project to showcase my web development abilities.
                    <br/>
                    Memento is a game of memory with emojis. This project was an idea that I decided to build because
                    I believed it gave me a good challenge to test out my CSS abilities after learning more advanced functionality.
                    It was a good-sized project and not too complicated. I also worked with some new react libraries that helped 
                    me implement specific functionality for my project. I also managed to become better at using the elements tab 
                    and console in the developer tools in chrome and firefox.
                </p>
            </Modal.Body>
        </div>
    );
};

export default About;