import React, {useContext} from 'react';

import classes from './Button.module.scss';

import { DifficultyContext,
         ViewContext } from '../../context/GlobalContext';



const Button = (props) => {

    const [difficulty, setDifficulty] = useContext(DifficultyContext);

    const [view, setView] = useContext(ViewContext);


    const buttonHandler = () => {

        if (props.type === "Easy") {
            setDifficulty("Easy");
        } else if (props.type === "Medium") {
            setDifficulty("Medium");
        } else if (props.type === "Hard") {
            setDifficulty("Hard");
        } else if (props.type === "Back") {
            setView("Menu");
        }

        //console.log('The chosen difficulty is: ' + difficulty);
    }

    return (
        <div className={classes.btn}>
                <button className={classes.btnButton}
                        onClick={buttonHandler}><span>{props.children}</span></button>
        </div>
    );
};

export default Button;