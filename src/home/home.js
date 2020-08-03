import React from 'react';

import logo from '../logo.svg';
import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Hello World! </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
