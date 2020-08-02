import React, { useState, createContext, useContext } from 'react';

export const DifficultyContext = createContext();

export const ViewContext = createContext();

export const ModeContext = createContext();




export const GlobalProvider = (props) => {


    const [difficulty, setDifficulty] = useState("Easy");

    const [view, setView] = useState("Menu");

    const [mode, setMode] = useState({
        numPictures: null,
        numPairs: null
    });

   
    return (

        <DifficultyContext.Provider value = {[difficulty, setDifficulty]}>
            <ViewContext.Provider value = {[view, setView]}>
                <ModeContext.Provider value={[mode, setMode]}>

                    {props.children}

                </ModeContext.Provider>
            </ViewContext.Provider>
        </DifficultyContext.Provider>


    );
}

