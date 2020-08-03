import React, { useContext, useState, useEffect } from 'react';
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
    const [cardSize, setCardSize] = useState(null);

    const [cardIDFlipped1, setCardIDFlipped1] = useState(null);
    const [cardIDFlipped2, setCardIDFlipped2] = useState(null);
    const [cardIDFlipped3, setCardIDFlipped3] = useState(null);
    const [cardIDFlipped4, setCardIDFlipped4] = useState(null);

    const [cardBackFlipped,setCardBackFlipped]= useState(classes.cardBack__flipped);
    const [cardFrontFlipped,setCardFrontFlipped]= useState(classes.cardFront__flipped);

    const [isFlipped, setIsFlipped] = useState(false);



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
    
                // setCardsArray({...cardsArray}, {
                //           cardID: cardCount,
                //     pictureID: pictureCount,
                //     emoji: picturesArray[pictureCount],
                //     flipped: false,
                //     matched: false
                // })
              
    
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
                setCardSize(classes.cardBackSVG__64);
            } else if (totalNum === 36) {
                setGrid(classes.grid__36);
                setCardSize(classes.cardBackSVG__36);
            } else if (totalNum === 18) {
                setGrid(classes.grid__18);
                setCardSize(classes.cardBackSVG__18);
            } else if (totalNum === 16) {
                setGrid(classes.grid__16);
                setCardSize(classes.cardBackSVG__16);
            }
    

    },[]);


    
    
    const flipCard = (givenCard) => {
        // console.log("Flipping card");
        // console.log(cardsArray);
        console.log(givenCard);
        //console.log(givenCard);
        if (!isFlipped){
            setIsFlipped(true);
        } else {
            setIsFlipped(false);

        }


        //givenCard.flipped = true;



    }


    const renderCards = () => {



    }



    return (
        <div className={classes.gameView}>
            <Button type="Back">MENU</Button>

            <div className={classes.gameContainer}>
                <div className={`${classes.grid} ${grid}`}>
                   {cardsArray.map(card => (
                       
                       <div className={`${classes.card}`} onClick={() => flipCard(card)} id={card.cardID}>
                       {/* <h3>{card.cardID}</h3> */}
                       <div className={`${classes.cardBack} ${isFlipped ? cardBackFlipped : ''} `}>
                               {/* <div className={`${classes.cardBackSVG} ${cardSize}`}/> */}
                           <CardBackSVG className={`${classes.cardBackSVG} ${cardSize}`} />
                            </div>
                           <div className={`${classes.cardFront} ${isFlipped ? cardFrontFlipped : ''}`}>
                                {/* <div className="cardId">Card ID: {card.cardID}</div>
                                <div className="cardId">Emoji Num: {card.emoji}</div> */}
                        

                                {card.emoji === '1' && (
                                        <div className={classes.emojiIcon}>&#x1F94E;</div> // TENNIS BALL
                                )}
                                {card.emoji === '2' && (
                                        <div className={classes.emojiIcon}>&#x1F4B0;</div> // MONEY BAG
                                )}
                                {card.emoji === '3' && (
                                        <div className={classes.emojiIcon}>&#x1F32E;</div> // TACO
                                )}
                                {card.emoji === '4' && (
                                        <div className={classes.emojiIcon}>&#x1F332;</div> // TREE
                                )}
                                {card.emoji === '5' && (
                                        <div className={classes.emojiIcon}>&#x1F344;</div> // MUSHROOM
                                )}
                                {card.emoji === '6' && (
                                        <div className={classes.emojiIcon}>&#x1F381;</div> // PRESENT
                                )}
                                {card.emoji === '7' && (
                                        <div className={classes.emojiIcon}>&#x1F388;</div> // BALOON
                                )}
                                {card.emoji === '8' && (
                                        <div className={classes.emojiIcon}>&#x1F3B1;</div> // 8BALL
                                )}
                                {card.emoji === '9' && (
                                        <div className={classes.emojiIcon}>&#x1F3B2;</div> // DICE (DIE)
                                )}
                                {card.emoji === '10' && (
                                        <div className={classes.emojiIcon}>&#x1F3C8;</div> // FOOT BALL
                                )}
                                {card.emoji === '11' && (
                                        <div className={classes.emojiIcon}>&#x1F3C6;</div> // TROPHY
                                )}
                                {card.emoji === '12' && (
                                        <div className={classes.emojiIcon}>&#x1F41E;</div> // LADYBUG
                                )}
                                {card.emoji === '13' && (
                                        <div className={classes.emojiIcon}>&#x1F423;</div> // HATCHING CHICK
                                )}
                                {card.emoji === '14' && (
                                        <div className={classes.emojiIcon}>&#x1F433;</div> // WHALE
                                )}
                                {card.emoji === '15' && (
                                        <div className={classes.emojiIcon}>&#x1F438;</div> // FROG
                                )}
                                {card.emoji === '16' && (
                                        <div className={classes.emojiIcon}>&#x1F451;</div> // CROWN
                                )}
                                {card.emoji === '17' && (
                                        <div className={classes.emojiIcon}>&#x1F47D;</div> // ALIEN
                                )}
                                {card.emoji === '18' && (
                                        <div className={classes.emojiIcon}>&#x1F4F7;</div> // CAMERA
                                )}
                                {card.emoji === '19' && (
                                        <div className={classes.emojiIcon}>&#x1F525;</div> // FIRE
                                )}
                                {card.emoji === '20' && (
                                        <div className={classes.emojiIcon}>&#x1F600;</div> // SMILE
                                )}
                                {card.emoji === '21' && (
                                        <div className={classes.emojiIcon}>&#x1F60E;</div> //SUNGLASSES
                                )}
                                {card.emoji === '22' && (
                                        <div className={classes.emojiIcon}>&#x1F61C;</div> //WINK&TONGUE
                                )}
                                {card.emoji === '23' && (
                                        <div className={classes.emojiIcon}>&#x1F680;</div> //ROCKET
                                )}
                                {card.emoji === '24' && (
                                        <div className={classes.emojiIcon}>&#x1F6CE;</div> //RINGBELL
                                )}
                                {card.emoji === '25' && (
                                        <div className={classes.emojiIcon}>&#x1F916;</div> // ROBOT
                                )}
                                {card.emoji === '26' && (
                                        <div className={classes.emojiIcon}>&#x1F920;</div> // COWBOY
                                )}
                                {card.emoji === '27' && (
                                        <div className={classes.emojiIcon}>&#x1F923;</div> // LAUGHING
                                )}
                                {card.emoji === '28' && (
                                        <div className={classes.emojiIcon}>&#x1F951;</div> // AVOCADO
                                )}
                                {card.emoji === '29' && (
                                        <div className={classes.emojiIcon}>&#x1F965;</div> // COCONUT
                                )}
                                {card.emoji === '30' && (
                                        <div className={classes.emojiIcon}>&#x1F9E2;</div> // HAT
                                )}
                                {card.emoji === '31' && (
                                        <div className={classes.emojiIcon}>&#x1F9C0;</div> // CHEESE
                                )}
                                {card.emoji === '32' && (
                                        <div className={classes.emojiIcon}>&#x1F981;</div> // LION
                                )}
                                    
                                   
                           </div>
                        </div>
                   ))}
                </div>



            </div>
        
            

        </div>
    );
};

export default GameView;