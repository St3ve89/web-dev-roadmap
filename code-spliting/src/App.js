import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'page1'
    }
  }

  onRouteChange = (route) => {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Page1 onRouteChange={this.onRouteChange}/>
        <Page2 />
        <Page3 />
      </div>
    );
  }
}

export default App;
