import React, { useContext, useState, useEffect } from 'react';
import shuffle from 'shuffle-array';

import classes from './GameView.module.scss';

import { ModeContext,
         FlipCountContext,
         FlipAllContext,
         FlipResetContext } from '../../context/GlobalContext';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';


const GameView = () => {


    const [mode, setMode] = useContext(ModeContext); 
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

    let flipCounter = 1;

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



    useEffect(() => {
        //console.log('In flipcount useeffect');
        if (flipCount === mode.numPairs){
            // FLIP ALL TO FALSE
            console.log('FLIPCARD USEEFFECT HAS FOUND THAT FLIPCOUNT EQUALS NUM OF PAIRS! RESET CARDS NOW!');
            setFlipCount(0);
            setFlipReset(true);
        }
    }, [flipCount]);



    useEffect(() => {

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

    

    return (
        <div className={classes.gameView}>
            <Button type="Back">MENU</Button>
            <Button type="Flip-all">FLIP ALL</Button>

            {!isLoading && (
                
                <div className={classes.gameContainer}>
                    <div className={`${classes.grid} ${grid}`}>
                    {cardsArray.map(card => (  
                        <Card card={card} cardSize={cardSize}/>
                    ))}
                    </div>
                </div>

            )}

        </div>
    );
};

export default GameView;