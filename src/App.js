import React from "react";
import Header from "./components/Header.js";
import CharList from './components/CharacterList'
import WelcomePage from './components/WelcomePage';
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default function App() {
  return (
    <Router>
      <Header/>
      
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/" component={CharList}/>

    </Router>
  );
}
