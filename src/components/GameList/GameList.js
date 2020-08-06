import React, { useContext } from 'react';
import classes from './GameList.module.scss';

import { DifficultyContext,
         ViewContext,
         ModeContext } from '../../context/GlobalContext';




const GameList = () => {

    const [difficulty, setDifficulty] = useContext(DifficultyContext);
    const [view, setView] = useContext(ViewContext);
    const [mode, setMode] = useContext(ModeContext);

    const getGameDimensions = (dimNum1, dimNum2) => {
        console.log('Working on click');
        console.log('Dimnum1 -> ' + dimNum1);
        console.log('Dimnum2 -> ' + dimNum2);

        setMode({
           numPictures: dimNum2,
           numPairs: dimNum1 
        });
        setView("Game");
    }



    return (
        <div className={classes.gameListContainer}>
            <div className={classes.gameList}>

                {difficulty === "Easy" && (
                    <ul className={classes.list}>
                        <li className={classes.list__item, classes.list__header}>
                            <span>Easy</span>
                        </li>
                        <li className={classes.list__item}
                            onClick={() => getGameDimensions(2, 8)}>
                                <span className={classes.dimensionsText}>2 x 8</span>
                        </li>
                        <li className={classes.list__item}
                            onClick={() => getGameDimensions(2, 18)}>
                                <span className={classes.dimensionsText}>2 x 18</span>
                        </li>
                        <li className={classes.list__item}
                            onClick={() => getGameDimensions(2, 32)}>
                                <span className={classes.dimensionsText}>2 x 32</span>
                        </li>
                    </ul>
                )}
            </div>
            <div className={classes.gameList}>
                {difficulty === "Medium" && (
                    <ul className={classes.list}>
                        <li className={classes.list__item, classes.list__header}>
                            <span>Medium</span>
                        </li>
                        <li className={classes.list__item}
                            onClick={() => getGameDimensions(3, 6)}>
                                <span className={classes.dimensionsText}>3 x 6</span>
                        </li>
                        <li className={classes.list__item}
                            onClick={() => getGameDimensions(3, 12)} >
                                <span className={classes.dimensionsText}>3 x 12</span>
                        </li>
                    </ul>
                )}
            </div>
            <div className={classes.gameList}>
                {difficulty === "Hard" && (
                    <ul className={classes.list}>
                        <li className={classes.list__item, classes.list__header}>
                            <span>Hard</span>
                        </li>
                        <li className={classes.list__item}
                            onClick={() => getGameDimensions(4, 16)}>
                                <span className={classes.dimensionsText}>4 x 16</span>
                        </li>
                    </ul>
                )}
            </div>
        
            
        </div>
    );
};

export default GameList;