import React, { useState, useContext } from 'react';

import classes from './Timer.module.scss';

import {
            StartTimerContext,
            CorrectCountContext,
            ModeContext,
            GameOverContext,
            TimerContext
        } from '../../context/GlobalContext';
import { useEffect } from 'react';

const Timer = () => {


    const [startTimer, setStartTimer] = useContext(StartTimerContext);

    //const [ startTime, setStartTime ] = useState(0);

    const [ timer, setTimer ] = useContext(TimerContext);

    const [correctCount, setCorrectCount] = useContext(CorrectCountContext);
    const [mode, setMode] = useContext(ModeContext);

    const [gameOver, setGameOver] = useContext(GameOverContext);

 

    
    useEffect(() => {
        let counterID;

        if (gameOver) {
            //console.log('GAMEOVER!');
            clearInterval(counterID);
        }

        if (startTimer && !gameOver) {
            counterID = setInterval(() => {
                setTimer((timer => timer + 1 / 10));
                //console.log('looping...');
            }, 100);
            return () => clearInterval(counterID);
        }

        
      }, [startTimer, gameOver]);


    return (
        <div className={classes.timer}>
            <span>{timer.toFixed(1)} Seconds</span>
        </div>
    );
};

export default Timer;