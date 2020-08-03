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

                                            {props.children}

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

