import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import logo from './logo.svg';
import './App.css';
import Main from './main'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            ws 2018-2-28 redux demo
          </p>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App
