import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
