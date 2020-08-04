import React, { useState, useContext } from 'react';

import classes from './Timer.module.scss';

import {
            StartTimerContext
        } from '../../context/GlobalContext';
import { useEffect } from 'react';

const Timer = () => {


    const [startTimer, setStartTimer] = useContext(StartTimerContext);

    const [ startTime, setStartTime ] = useState(0);

    const [ timer, setTimer ] = useState(0);
    
    // if (startTimer){
    // //     setStartTime(Date.now());
    // //     const interval = setInterval(function() {
    // //         let elapsedTime = Date.now() - startTime;
    // //         setTimer((elapsedTime / 1000).toFixed(3));
    // //     }, 50);
    // }

    useEffect(() => {
        // setStartTime(Date.now());
        if (startTimer){
            const interval = setInterval(function() {
                //let elapsedTime = startTime + 100;
                setTimer((timer => timer + 1 / 10));
                //setTimer((elapsedTime / 1000).toFixed(3));
            }, 100);
        }
    },[startTimer]);


    return (
        <div className={classes.timer}>
            {timer.toFixed(1)} Seconds
        </div>
    );
};

export default Timer;