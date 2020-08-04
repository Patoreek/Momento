import React, { useContext } from 'react';

import classes from './Footer.module.scss';

import {ReactComponent as PersonalLogo} from '../../img/personal_logo.svg';

import { ShowModalContext,
        ModalContentContext } from '../../context/GlobalContext';



const Footer = () => {

    const [showModal, setShowModal] = useContext(ShowModalContext);

    const [modalContent, setModalContent] = useContext(ModalContentContext);


    return (
        <footer className={classes.footer}>
            <h5 className={classes.copyrightText}> Memento Copyright and Trademark Goes here.</h5>
            <h5 className={classes.developedText}> Developed and Designed By Patrick Minda.</h5>

            <ul>
                <li onClick={() => {
                    setShowModal(true);
                    setModalContent("about");
                    }}>ABOUT</li>
                <li><a href="https://github.com/Patoreek" target="_blank">GITHUB</a></li>
                <li onClick={() => {
                    setShowModal(true);
                    setModalContent("contact");
                    }}>CONTACT</li>
                
            </ul>
                    <PersonalLogo width="200" fill="#eee" opacity="20%" className={classes.signature} /> 
                    {/* className={classes.signature}  */}
        </footer>
    );
};

export default Footer;