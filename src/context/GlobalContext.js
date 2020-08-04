import React, { useState, createContext } from 'react';

export const DifficultyContext = createContext();

export const ViewContext = createContext();

export const ModeContext = createContext();

export const FlipAllContext = createContext();

export const FlipCountContext = createContext();

export const FlipResetContext = createContext();

export const GuessArrayContext = createContext();

export const CardArrayContext = createContext();

export const MatchedContext = createContext();

export const StartTimerContext = createContext();

export const GuessDisplayContext = createContext();

export const ShowModalContext = createContext();

export const ModalContentContext = createContext();

export const CorrectCountContext = createContext();

export const GameOverContext = createContext();

export const TimerContext = createContext();









export const GlobalProvider = (props) => {


    const [difficulty, setDifficulty] = useState("Easy");

    const [view, setView] = useState("Menu");

    const [mode, setMode] = useState({
        numPictures: null,
        numPairs: null
    });

    const [flipAll, setFlipAll] = useState(false);

    //const [flipCount, setFlipCount] = useState(mode.numPairs);
    const [flipCount, setFlipCount] = useState(0);

    const [flipReset, setFlipReset] = useState(false);

    const [guessArray, setGuessArray] = useState([]);

    const [cardArray, setCardArray] = useState([]);


    const [matched, setMatched] = useState(false);

    const [startTimer, setStartTimer] = useState(false);

    const [guessDisplay, setGuessDisplay] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const [modalContent, setModalContent] = useState(null);

    const [correctCount, setCorrectCount] = useState(8); // Change this value to test endgameModal testing

    const [gameOver, setGameOver] = useState(false);

    const [ timer, setTimer ] = useState(0);



    return (

        <DifficultyContext.Provider value = {[difficulty, setDifficulty]}>
        <ViewContext.Provider value = {[view, setView]}>
        <ModeContext.Provider value={[mode, setMode]}>
        <FlipAllContext.Provider value={[flipAll, setFlipAll]}>
        <FlipCountContext.Provider value={[flipCount, setFlipCount]}>
        <FlipResetContext.Provider value={[flipReset, setFlipReset]}>
        <GuessArrayContext.Provider value={[guessArray, setGuessArray]}>
        <CardArrayContext.Provider value={[cardArray, setCardArray]}>
        <MatchedContext.Provider value={[matched, setMatched]}>
        <StartTimerContext.Provider value={[startTimer, setStartTimer]}>
        <GuessDisplayContext.Provider value={[guessDisplay, setGuessDisplay]}>
        <ShowModalContext.Provider value={[showModal, setShowModal]}>
        <ModalContentContext.Provider value={[modalContent, setModalContent]}>
        <CorrectCountContext.Provider value={[correctCount, setCorrectCount]}>
        <GameOverContext.Provider value={[gameOver, setGameOver]}>
        <TimerContext.Provider value={[timer, setTimer]}>
            
            {props.children}
        
        </TimerContext.Provider>                                      
        </GameOverContext.Provider>
        </CorrectCountContext.Provider>
        </ModalContentContext.Provider>
        </ShowModalContext.Provider>
        </GuessDisplayContext.Provider>
        </StartTimerContext.Provider>
        </MatchedContext.Provider>
        </CardArrayContext.Provider>
        </GuessArrayContext.Provider>
        </FlipResetContext.Provider>
        </FlipCountContext.Provider>
        </FlipAllContext.Provider>
        </ModeContext.Provider>
        </ViewContext.Provider>
        </DifficultyContext.Provider>


    );
}

