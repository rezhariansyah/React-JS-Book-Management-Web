import React, { Component } from 'react';
import './App.css';
import Navbar from './screen/navbar/navbar';
import Home from './screen/home/home';
import { Route } from 'react-router-dom';
import BookDetail from './screen/bookDetail/bookDetail'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route path='/' component={Home} exact/>
        <Route path='/bookDetail' component={BookDetail} exact/>
        
      </div>
    )
  }
}

export default App;
