import React, { useContext } from 'react';
import './App.scss';

// import { BrowserRouter, Route } from 'react-router-dom';
// No need for routes or paths

import MenuView from './containers/MenuView/MenuView';
import GameView from './containers/GameView/GameView';
import ModalComponent from './components/ModalComponent/ModalComponent';

import Footer from './containers/Footer/Footer';

import { ViewContext }from './context/GlobalContext';


function App() {


  const [view, setView] = useContext(ViewContext);



  return (
    <div className="App">
       {view ==="Menu" ?  <MenuView/> : ''}
       {view ==="Game" ?   <GameView/> : ''}
        <ModalComponent />

        <Footer/>

    </div>
    
  );
}

export default App;
