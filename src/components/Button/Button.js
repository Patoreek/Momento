import React, {useContext} from 'react';

import classes from './Button.module.scss';

import { DifficultyContext } from '../../context/GlobalContext';



const Button = (props) => {

    const [difficulty, setDifficulty] = useContext(DifficultyContext);

    const displayDifficulty = () => {
        if (props.gameDiff === "Easy") {
            setDifficulty("Easy");
        } else if (props.gameDiff === "Medium") {
            setDifficulty("Medium");
        } else if (props.gameDiff === "Hard") {
            setDifficulty("Hard");
        }

        //console.log('The chosen difficulty is: ' + difficulty);
    }

    return (
        <div className={classes.btn}>
                <button className={classes.btnButton}
                        onClick={displayDifficulty}><span>{props.gameDiff}</span></button>
        </div>
    );
};

export default Button;