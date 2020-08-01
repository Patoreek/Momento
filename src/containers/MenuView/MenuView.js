import React, { useContext } from 'react';
import classes from './MenuView.module.scss';

import Button from '../../components/Button/Button';
import GameList from '../../components/GameList/GameList';

const MenuView = () => {

    return (
        <div className={classes.menuView}>
            <div className={classes.nameContainer}></div>
             <h1 className={classes.name}>MOMENTO</h1>
             <span className={classes.subtitle}>
                 A Challenging minigame of memory.
             </span>
            <div className={classes.buttonContainer}>
                <Button gameDiff="Easy"></Button>
                <Button gameDiff="Medium"></Button>
                <Button gameDiff="Hard"></Button>
            </div>
            <div className={classes.gameListContainer}>
                <GameList></GameList>
            </div>
        </div>
    );
};

export default MenuView;