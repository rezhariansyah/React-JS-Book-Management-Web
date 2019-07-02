import React, { Component } from 'react';
import './App.css';
import Navbar from './screen/navbar/navbar';
import Home from './screen/home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    )
  }
}

export default App;
