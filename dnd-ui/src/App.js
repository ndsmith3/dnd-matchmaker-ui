import React, { Component } from 'react';
import './App.css';

import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://10.0.0.8:4000/socket/websocket');

class App extends Component {
  constructor() {
    super()
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }
  
  render() {
    return (
      <div>
        <h1>Hello World!</h1>  
        Practical Intro To WebSockets.
        Source: https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/
      </div>
    );
  }
}
export default App;
