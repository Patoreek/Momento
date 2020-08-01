import React, { useState, createContext, useContext } from 'react';

export const DifficultyContext = createContext();




export const GlobalProvider = (props) => {


    const [difficulty, setDifficulty] = useState("Easy");
   
    return (

        <DifficultyContext.Provider value = {[difficulty, setDifficulty]}>
       
        {props.children}

        </DifficultyContext.Provider>


    );
}

