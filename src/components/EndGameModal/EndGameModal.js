import React, {useContext} from 'react';
import classes from './EndGameModal.module.scss';

import Button from '../Button/Button';

import { TimerContext } from '../../context/GlobalContext';

const EndGameModal = () => {

    const [timer, setTimer] = useContext(TimerContext);

    return (
        <div className={classes.endGameContainer}>

                <div className={classes.endGameModal}>
                    <h3 className={classes.title}>Congratulations!</h3>
                    <p className={classes.timeText}>You completed this level in {timer.toFixed(1)} seconds!</p>
                    <div className={classes.btnContainer}>
                        <div className={classes.menuBtn}>
                            <Button type="Back">Main Menu</Button>
                        </div>
                        
                    </div>
              
                </div>
        </div>
    );
};

export default EndGameModal;