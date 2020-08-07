import React, {useContext} from 'react';

import classes from './GuessDisplay.module.scss';

import {
        GuessDisplayContext
        } from '../../context/GlobalContext';

const GuessDisplay = () => {

    const [guessDisplay] = useContext(GuessDisplayContext);

    return (
        <div className={classes.guessDisplayContainer}>
                Guesses: {guessDisplay}
        </div>
    );
};

export default GuessDisplay;