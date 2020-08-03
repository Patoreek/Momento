import React, { useState, createContext, useContext } from 'react';

export const DifficultyContext = createContext();

export const ViewContext = createContext();

export const ModeContext = createContext();

export const FlipAllContext = createContext();




export const GlobalProvider = (props) => {


    const [difficulty, setDifficulty] = useState("Easy");

    const [view, setView] = useState("Menu");

    const [mode, setMode] = useState({
        numPictures: null,
        numPairs: null
    });

    const [flipAll, setFlipAll] = useState(false);

    
    return (

        <DifficultyContext.Provider value = {[difficulty, setDifficulty]}>
            <ViewContext.Provider value = {[view, setView]}>
                <ModeContext.Provider value={[mode, setMode]}>
                    <FlipAllContext.Provider value={[flipAll, setFlipAll]}>

                        {props.children}

                    </FlipAllContext.Provider>
                </ModeContext.Provider>
            </ViewContext.Provider>
        </DifficultyContext.Provider>


    );
}

