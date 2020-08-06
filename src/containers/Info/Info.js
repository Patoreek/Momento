import React from 'react';

import classes from './Info.module.scss';

import './Info.css';

import {Modal} from 'react-bootstrap';


const Info = (props) => {
    return (
        <div className={classes.modalContainer}>
        <Modal.Header className="modalHeader" closeButton>
            <Modal.Title className="modalTitle">
                <h3 className={classes.title}>How to play</h3>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={classes.description}>
                    Memorize where each card is and match them together as quick as possible.
                    <br/>
                    <br/>
                    <span className={classes.easyText}>Easy</span> - Pair up <span>2</span> cards together. There are options of: <span>8</span>, <span>18</span> and <span>32</span> pairs.
                    <br/>
                    <br/>
                    <span className={classes.mediumText}>Medium</span> - Pair up  <span>3</span> cards together. There are options of: <span>6</span> and <span>12</span> pairs.
                    <br/>
                    <br/>
                    <span className={classes.hardText}>Hard</span> - Pair up  <span>4</span> cards together. There are options of: <span>16</span> pairs.
                </p>
            </Modal.Body>
        </div>
    );
};

export default Info;