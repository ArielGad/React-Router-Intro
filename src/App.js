import React, { Component } from 'react';

import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
