import React from 'react';

import classes from './Footer.module.scss';

import {ReactComponent as PersonalLogo} from '../../img/personal_logo.svg';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h5 className={classes.copyrightText}> Memento Copyright and Trademark Goes here.</h5>
            <h5 className={classes.developedText}> Developed and Designed By Patrick Minda.</h5>

            <ul>
                <li>ABOUT</li>
                <li>GITHUB</li>
                <li>CONTACT</li>
                
            </ul>
                    <PersonalLogo width="200" fill="#eee" opacity="20%" className={classes.signature} /> 
                    {/* className={classes.signature}  */}
        </footer>
    );
};

export default Footer;