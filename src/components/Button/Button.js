import React, {useContext, useState, useEffect } from 'react';

import classes from './Button.module.scss';

import { DifficultyContext,
         ViewContext,
         FlipAllContext } from '../../context/GlobalContext';



const Button = (props) => {

    const [difficulty, setDifficulty] = useContext(DifficultyContext);

    const [view, setView] = useContext(ViewContext);

    const [flipAll, setFlipAll] = useContext(FlipAllContext);


    const [btnClass, setBtnClass] = useState(null);

    useEffect(() => {
        if (props.type === "Flip-all") {
            setBtnClass(classes.flipAllBtn); 
        }
        else if (props.type === "Back") {
            setBtnClass(classes.backBtn); 
        }
    },[]);

    /*


     else if (props.type === "Flip-all") {
            setBtnClass(classes.flipAllBtn); 
        }
    setBtnClass(classes.backBtn);  
    */


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
        else if (props.type === "Flip-all") {
            setFlipAll(!flipAll);
        }

        //console.log('The chosen difficulty is: ' + difficulty);
    }

    return (
        <div className={`${classes.btn} ${btnClass}`}>
                <button className={classes.btnButton}
                        onClick={buttonHandler}><span>{props.children}</span></button>
        </div>
    );
};

export default Button;