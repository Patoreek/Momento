import React, { useContext } from 'react';
import shuffle from 'shuffle-array';

import classes from './GameView.module.scss';

import {ModeContext} from '../../context/GlobalContext';

import Button from '../../components/Button/Button';

import {ReactComponent as CardBackSVG} from '../../img/card-texture.svg';


const GameView = () => {


    const [mode, setMode] = useContext(ModeContext); 
    // mode.numPictures
    // mode.numPairs

    const totalNum = mode.numPictures * mode.numPairs;

    let numOfRows = 0;
    let numOfCols = 0;


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

      let cardCount = 0;
      let pictureCount = 0;

      let cardsArray = [];


      
      while(cardCount < totalNum){

          cardsArray.push({
              cardID: cardCount,
              pictureID: pictureCount
          });
          

          if (pictureCount === mode.numPictures - 1){  
              pictureCount = 0;
          }else {
              pictureCount++;
          }

          cardCount++;
      }

      shuffle(cardsArray);

      //console.log(cardsArray);

        let grid;
        let cardSize;
        if (totalNum === 64) {
            grid = classes.grid__64;
            cardSize = classes.cardBackSVG__64;
        } else if (totalNum === 36) {
            grid = classes.grid__36;
            cardSize = classes.cardBackSVG__36;
        } else if (totalNum === 18) {
            grid = classes.grid__18;
            cardSize = classes.cardBackSVG__18;
        } else if (totalNum === 16) {
            cardSize = classes.cardBackSVG__16;
            grid = classes.grid__16;
        }

    return (
        <div className={classes.gameView}>
            <Button type="Back">MENU</Button>

            <div className={classes.gameContainer}>
                <div className={`${classes.grid} ${grid}`}>
                   {cardsArray.map(card => (
                       <div className={classes.card}>
                           {/* <h3>{card.cardID}</h3> */}
                           <CardBackSVG className={`${classes.cardBackSVG} ${cardSize}`} /> 
                        </div>
                   ))}
                </div>



            </div>
        
            

        </div>
    );
};

export default GameView;