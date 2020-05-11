import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {
    Route,
   BrowserRouter as Router
  } from 'react-router-dom';
import Prva from './Components/Prva.js';
import Druga from './Components/Druga.js';
import Treca from './Components/Treca.js';
  

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Router>
        <Route exact path="/" component={Prva}></Route>
        <Route path ="/druga" component={Druga}></Route>
        <Route path ="/treca" component={Treca}></Route>

      </Router>
      


      <Footer></Footer>
    </div>
  );
}

export default App;
