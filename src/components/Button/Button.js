import React, {useContext, useState, useEffect } from 'react';

import classes from './Button.module.scss';

import { DifficultyContext,
         ViewContext,
         FlipAllContext,
         StartTimerContext,
         TimerContext,
         GameOverContext,
         CorrectCountContext,
         GuessArrayContext,
         FlipCountContext,
         GuessDisplayContext,
         CardRenderCounterContext,
         ShowModalContext,
         ModalContentContext } from '../../context/GlobalContext';


const Button = (props) => {

    const [difficulty, setDifficulty] = useContext(DifficultyContext);

    const [view, setView] = useContext(ViewContext);

    const [flipAll, setFlipAll] = useContext(FlipAllContext);

    const [ startTimer, setStartTimer ] = useContext(StartTimerContext);
    
    const [ timer, setTimer ] = useContext(TimerContext);

    const [ correctCount, setCorrectCount ] = useContext(CorrectCountContext);

    const [ gameOver, setGameOver ] = useContext(GameOverContext);

    const [ guessArray, setGuessArray ] = useContext(GuessArrayContext);

    const [ flipCount, setFlipCount ] = useContext(FlipCountContext);

    const [guessDisplay, setGuessDisplay] = useContext(GuessDisplayContext);

    const [cardRenderCounter, setCardRenderCounter] = useContext(CardRenderCounterContext);

    const [showModal, setShowModal] = useContext(ShowModalContext);

    const [modalContent, setModalContent] = useContext(ModalContentContext);

    const [btnContainerClass, setBtnContainerClass] = useState(null);

    const [btnClass, setBtnClass] = useState(null);

    useEffect(() => {
        if (props.type === "Flip-all") {
            setBtnContainerClass(classes.flipAllBtn); 
        }
        else if (props.type === "Back") {
            setBtnContainerClass(classes.backBtn); 
        }
        else if (props.type === "Info") {
            setBtnClass(classes.infoBtn);
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
            // Stop Timer
            setStartTimer(false);
            // reset Timer
            setTimer(0);
            // reset gameover
            setGameOver(false);
            // reset correctCount
            setCorrectCount(0);
            // reset guessArray
            setGuessArray([]);
            // reset flipCount
            setFlipCount(0);
            // reset guess Counter
            setGuessDisplay(0);
            //reset cardCounter
            setCardRenderCounter(0);

            //! reset CardArray then reshuffle ?? maybe going back to menu then back into gameview will retrigger
            //! useEffect and do it automatically

        }
        else if (props.type === "Flip-all") {
            setFlipAll(!flipAll);
        }
        else if (props.type === "Info") {
            setShowModal(true);
            setModalContent("info");
        }

        //console.log('The chosen difficulty is: ' + difficulty);
    }

    return (
        <div className={`${classes.btn} ${btnContainerClass}`}>
                {props.type == "Flip-all" ? <h3> This button is to be removed </h3> : ''}
                <button className={`${classes.btnButton} ${btnClass}`}
                        onClick={buttonHandler}><span>{props.children}</span>
                </button>
        </div>
    );
};

export default Button;