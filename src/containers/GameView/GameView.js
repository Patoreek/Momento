import React, { useContext, useState, useEffect } from 'react';
import shuffle from 'shuffle-array';

import classes from './GameView.module.scss';

import { ModeContext,
         FlipCountContext,
         FlipAllContext,
         FlipResetContext,
         GuessArrayContext,
         CardArrayContext,
         MatchedContext,
         GuessDisplayContext,
         CorrectCountContext,
         StartTimerContext,
         GameOverContext,
         CardRenderCounterContext } from '../../context/GlobalContext';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Timer from '../../components/Timer/Timer';
import GuessDisplay from '../../components/GuessDisplay/GuessDisplay';
import EndGameModal from '../../components/EndGameModal/EndGameModal';


import { css } from "@emotion/core";
import GridLoader from 'react-spinners/GridLoader';


const GameView = () => {


    const [mode, setMode] = useContext(ModeContext); 

    const [guessArray, setGuessArray] = useContext(GuessArrayContext);
    
    const [cardArray, setCardArray] = useContext(CardArrayContext);

    const [matched, setMatched] = useContext(MatchedContext);

    const [cardRenderCounter, setCardRenderCounter] = useContext(CardRenderCounterContext);



    // mode.numPictures
    // mode.numPairs

    const totalNum = mode.numPictures * mode.numPairs;

    let numOfRows = 0;
    let numOfCols = 0;

    const [cardsArray, setCardsArray] = useState([{
        cardID: null,
        pictureID: null,
        emoji: null,
        flipped: false,
        matched: false
    }]);

    let cardCount = 0;
    let pictureCount = 0;

    let cardsArrayLocal = [];

    let picturesArray =[
        '1','2','3','4','5','6',
        '7','8','9','10','11','12',
        '13','14','15','16','17','18',
        '19','20','21','22','23','24','25',
        '26','27','28','29','30','31','32'
    ];

        
    const [grid, setGrid] = useState(null);
    const [cardSize, setCardSize] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    const [flipCount, setFlipCount] = useContext(FlipCountContext);

    const [flipAll, setFlipAll] = useContext(FlipAllContext);

    const [flipReset, setFlipReset] = useContext(FlipResetContext);

    const [guessDisplay, setGuessDisplay] = useContext(GuessDisplayContext);

    const [correctCount, setCorrectCount] = useContext(CorrectCountContext);

    const [startTimer, setStartTimer] = useContext(StartTimerContext);

    const [gameOver, setGameOver] = useContext(GameOverContext);


    useEffect(() => {
        if (correctCount == mode.numPictures){
            setGameOver(true);
        }
    },[correctCount])


    // FLIP COUNTER AND RESETTER
    useEffect(() => {
        //console.log('In flipcount useeffect');
        if (flipCount === mode.numPairs){
            // FLIP ALL TO FALSE
            console.log('MAX CARDS FLIPPED AT ONCE');
            setGuessDisplay(guessDisplay => guessDisplay + 1);

        // CHECKS IF IT MATCHES THE FIRST CARD WITH EVERY OTHER CARD
            const matching = (currentValue) => currentValue === guessArray[0];
            //console.log(guessArray.every(matching));

            if (guessArray.every(matching)){     // IF THEY MATCH
                //console.log("MATCHED PICTURES");

                setMatched(true);
                setCorrectCount(correctCount => correctCount + 1);
              

            } else {
                //console.log("WRONG TRY AGAIN!");
                setMatched(false);
                setCardArray([]);

            }

            setFlipCount(0);
            setGuessArray([]);
            //setCardArray([]);
            setFlipReset(true);
        }
    }, [flipCount]);


    // CREATE GRID
    useEffect(() => {

        setIsLoading(true);

        if (totalNum === 16){
            numOfRows = 4;
            numOfCols = 4;
          }
          
          if (totalNum === 18){
            numOfRows = 3;
            numOfCols = 6;
          }
          
          if (totalNum === 36){
            numOfRows = 6;
            numOfCols = 6;
          }
    
          if (totalNum === 64){
            numOfRows = 8;
            numOfCols = 8;
          }
    
          
          while(cardCount < totalNum){
    
                cardsArrayLocal.push({
                    cardID: cardCount,
                    pictureID: pictureCount,
                    emoji: picturesArray[pictureCount],
                    flipped: false,
                    matched: false
                });
              
    
                if (pictureCount === mode.numPictures - 1){  
                    pictureCount = 0;
                }else {
                    pictureCount++;
                }
    
                cardCount++;
          }
    
          shuffle(cardsArrayLocal);
    
          setCardsArray(cardsArrayLocal);

            if (totalNum === 64) {
                setGrid(classes.grid__64);
                setCardSize(64);
            } else if (totalNum === 36) {
                setGrid(classes.grid__36);
                setCardSize(36);
            } else if (totalNum === 18) {
                setGrid(classes.grid__18);
                setCardSize(18);
            } else if (totalNum === 16) {
                setGrid(classes.grid__16);
                setCardSize(16);
            }
            
            setIsLoading(false);

    },[]);

    // display: block;
    // margin: 0 auto;

    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;
    

    return (
        <div className={classes.gameView}>
            <Button type="Back" className={classes.menuBtn}>MENU</Button>
            {/* 
                This Button is to help find the matching cards when developing
                <Button type="Flip-all" className={classes.flipAllBtn}>FLIP ALL</Button>
            */}
            <Timer/>
            <GuessDisplay/>

            {correctCount == mode.numPictures ? <EndGameModal/> : ''}
    
            
                <div className={classes.gameContainer}>
                    {!isLoading && (
                        <div className={`${classes.grid} ${grid}`}>
                            {cardRenderCounter != cardsArray.length && (
                                <GridLoader
                                    css={override}
                                    size={25}
                                    color={"#c88e0b"}
                                />
                            )}
                            {cardsArray.map(card => (  
                                <Card card={card} cardSize={cardSize}/>
                            ))}
                        </div>
                    )}

                    {/* {!isLoading && (
                        <div className={`${classes.grid} ${grid}`}>
                            <GridLoader
                                css={override}
                                size={25}
                                color={"#c88e0b"}
                            />
                        </div>
                    )} */}

                </div>



        </div>
    );
};

export default GameView;