import React from 'react';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import MenuView from './containers/MenuView/MenuView';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route path="/" exact component={MenuView}/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
