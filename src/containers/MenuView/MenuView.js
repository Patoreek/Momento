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
                 A challenging minigame of memory.
             </span>
            <div className={classes.buttonContainer}>
                <Button type="Easy">Easy</Button>
                <Button type="Medium">Medium</Button>
                <Button type="Hard">Hard</Button>
            </div>
            <div className={classes.gameListContainer}>
                <GameList></GameList>
            </div>
        </div>
    );
};

export default MenuView;