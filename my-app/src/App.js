import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      let styles = {
          myStyle1:{
              fontSize:10,
              color:'FF0000'
          },
          myStyle2:{
              fontSize:'11px',
              color:'rgba(100,100,100,0.5)',
              width:'50%'
          }
      }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={styles.myStyle1}>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
