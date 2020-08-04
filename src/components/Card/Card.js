import React, { useState, useEffect, useContext } from 'react';

import classes from './Card.module.scss';

import {ReactComponent as CardBackSVG} from '../../img/card-texture.svg';

import { FlipAllContext,
         FlipCountContext,
         FlipResetContext,
         ModeContext,
         GuessArrayContext,
         CardArrayContext,
         MatchedContext,
         StartTimerContext,
        } from '../../context/GlobalContext';



const Card = (props) => {

    const [cardBackFlipped,setCardBackFlipped]= useState(classes.cardBack__flipped);
    const [cardFrontFlipped,setCardFrontFlipped]= useState(classes.cardFront__flipped);


    const [flipAll, setFlipAll] = useContext(FlipAllContext);

    const [flipCount, setFlipCount] = useContext(FlipCountContext);

    const [flipReset, setFlipReset] = useContext(FlipResetContext);

    const [mode, setMode] = useContext(ModeContext);

    const [guessArray, setGuessArray] = useContext(GuessArrayContext);

    const [cardArray, setCardArray] = useContext(CardArrayContext);

    const [matched, setMatched] = useContext(MatchedContext);

    const [startTimer, setStartTimer] = useContext(StartTimerContext);






    const [isFlipped, setIsFlipped] = useState(false);

    const [svgClass, setSvgClass]  = useState(null);

    const [isLoading, setIsLoading ] = useState(true);

    const [disappearClass, setDisappearClass] = useState(null);

    const [firstCardFlipped, setFirstCardFlipped] = useState(false);

    
    useEffect(() => {
        //console.log("CardSize -> " + props.cardSize);
        
            if (props.cardSize === 16 ){
                setSvgClass(classes.cardBackSVG__16);
            }
        
            if (props.cardSize === 18 ){
                setSvgClass(classes.cardBackSVG__18);
            }
        
            if (props.cardSize === 36 ){
                setSvgClass(classes.cardBackSVG__36);
            }
            if (props.cardSize === 64 ){
                setSvgClass(classes.cardBackSVG__64);
            }

            setIsLoading(false);

    },[])

    useEffect(() => {
        if (flipAll) {
            setIsFlipped(true);
        } else if (!flipAll) {
            setIsFlipped(false);
    
        }

        setFlipCount(0);
        setGuessArray([]);

    },[flipAll]);

    useEffect(() => {
        if (matched){
            //console.log('INSIDE USE-EFFECT FOR MATCHING!');            
            cardArray.map(id => {
                //console.log(id);
                //console.log(props.card.cardID);
                if (props.card.cardID == id) {
                   // console.log("this cards ID matches the flipped Card.");
                    setTimeout(() => {
                        setDisappearClass(classes.disappear);
                    }, 1000);
                    
                } else {
                    //console.log("Incorrect Card.")
                }
            })
            setMatched(false);
        }

    },[matched]);

    useEffect(() => {

        if (flipReset) {
            setTimeout(() => {
                setIsFlipped(false);
                setFlipReset(false);
            }, 1500);
        } 

    },[flipReset]);

    const flipCard = (givenCard) => {
        //console.log("Flipping card");
        if (!startTimer && !firstCardFlipped){
            setStartTimer(true);
            setFirstCardFlipped(true);
            console.log('First Card of the game has been flipped!');
        }
        
        //console.log(givenCard);

                if (!flipReset){

                    if (!isFlipped){
                        setIsFlipped(true);

                        // TODO: STORE CARD PICTURE ID IN STATE ARRAY THEN CHECK IF THEY ARE === //
                        setGuessArray([...guessArray, givenCard.pictureID]);
                        setCardArray([...cardArray, givenCard.cardID]);

                        setFlipCount(flipCount + 1);
                    } 
                   
                }

        //console.log("GUESS ARRAY");
        //console.log(guessArray);

        //console.log("CARD ARRAY");
        //console.log(cardArray);


    }


    return (
            <div className={`${classes.card} ${disappearClass}`} onClick={() => flipCard(props.card)} id={props.card.cardID}>
            {/* <h3>{card.cardID}</h3> */}

            {!isLoading && (

                <div className={`${classes.cardBack} ${isFlipped ? cardBackFlipped : ''} `}>
                    {/* <div className={`${classes.cardBackSVG} ${cardSize}`}/> */}
                <CardBackSVG className={`${classes.cardBackSVG} ${svgClass}`} />
                 </div>
            )}
            {!isLoading && (
                <div className={`${classes.cardFront} ${isFlipped ? cardFrontFlipped : ''}`}>
                     {/* <div className="cardId">Card ID: {card.cardID}</div>
                     <div className="cardId">Emoji Num: {card.emoji}</div> */}
             
    
                     {props.card.emoji === '1' && (
                             <div className={classes.emojiIcon}>&#x1F94E;</div> // TENNIS BALL
                     )}
                     {props.card.emoji === '2' && (
                             <div className={classes.emojiIcon}>&#x1F4B0;</div> // MONEY BAG
                     )}
                     {props.card.emoji === '3' && (
                             <div className={classes.emojiIcon}>&#x1F32E;</div> // TACO
                     )}
                     {props.card.emoji === '4' && (
                             <div className={classes.emojiIcon}>&#x1F332;</div> // TREE
                     )}
                     {props.card.emoji === '5' && (
                             <div className={classes.emojiIcon}>&#x1F344;</div> // MUSHROOM
                     )}
                     {props.card.emoji === '6' && (
                             <div className={classes.emojiIcon}>&#x1F381;</div> // PRESENT
                     )}
                     {props.card.emoji === '7' && (
                             <div className={classes.emojiIcon}>&#x1F388;</div> // BALOON
                     )}
                     {props.card.emoji === '8' && (
                             <div className={classes.emojiIcon}>&#x1F3B1;</div> // 8BALL
                     )}
                     {props.card.emoji === '9' && (
                             <div className={classes.emojiIcon}>&#x1F3B2;</div> // DICE (DIE)
                     )}
                     {props.card.emoji === '10' && (
                             <div className={classes.emojiIcon}>&#x1F3C8;</div> // FOOT BALL
                     )}
                     {props.card.emoji === '11' && (
                             <div className={classes.emojiIcon}>&#x1F3C6;</div> // TROPHY
                     )}
                     {props.card.emoji === '12' && (
                             <div className={classes.emojiIcon}>&#x1F41E;</div> // LADYBUG
                     )}
                     {props.card.emoji === '13' && (
                             <div className={classes.emojiIcon}>&#x1F423;</div> // HATCHING CHICK
                     )}
                     {props.card.emoji === '14' && (
                             <div className={classes.emojiIcon}>&#x1F433;</div> // WHALE
                     )}
                     {props.card.emoji === '15' && (
                             <div className={classes.emojiIcon}>&#x1F438;</div> // FROG
                     )}
                     {props.card.emoji === '16' && (
                             <div className={classes.emojiIcon}>&#x1F451;</div> // CROWN
                     )}
                     {props.card.emoji === '17' && (
                             <div className={classes.emojiIcon}>&#x1F47D;</div> // ALIEN
                     )}
                     {props.card.emoji === '18' && (
                             <div className={classes.emojiIcon}>&#x1F4F7;</div> // CAMERA
                     )}
                     {props.card.emoji === '19' && (
                             <div className={classes.emojiIcon}>&#x1F525;</div> // FIRE
                     )}
                     {props.card.emoji === '20' && (
                             <div className={classes.emojiIcon}>&#x1F600;</div> // SMILE
                     )}
                     {props.card.emoji === '21' && (
                             <div className={classes.emojiIcon}>&#x1F60E;</div> //SUNGLASSES
                     )}
                     {props.card.emoji === '22' && (
                             <div className={classes.emojiIcon}>&#x1F61C;</div> //WINK&TONGUE
                     )}
                     {props.card.emoji === '23' && (
                             <div className={classes.emojiIcon}>&#x1F680;</div> //ROCKET
                     )}
                     {props.card.emoji === '24' && (
                             <div className={classes.emojiIcon}>&#x1F6CE;</div> //RINGBELL
                     )}
                     {props.card.emoji === '25' && (
                             <div className={classes.emojiIcon}>&#x1F916;</div> // ROBOT
                     )}
                     {props.card.emoji === '26' && (
                             <div className={classes.emojiIcon}>&#x1F920;</div> // COWBOY
                     )}
                     {props.card.emoji === '27' && (
                             <div className={classes.emojiIcon}>&#x1F923;</div> // LAUGHING
                     )}
                     {props.card.emoji === '28' && (
                             <div className={classes.emojiIcon}>&#x1F951;</div> // AVOCADO
                     )}
                     {props.card.emoji === '29' && (
                             <div className={classes.emojiIcon}>&#x1F965;</div> // COCONUT
                     )}
                     {props.card.emoji === '30' && (
                             <div className={classes.emojiIcon}>&#x1F9E2;</div> // HAT
                     )}
                     {props.card.emoji === '31' && (
                             <div className={classes.emojiIcon}>&#x1F9C0;</div> // CHEESE
                     )}
                     {props.card.emoji === '32' && (
                             <div className={classes.emojiIcon}>&#x1F981;</div> // LION
                     )}
                         
                        
                </div>
            )}

            </div>
       
    );
};

export default Card;