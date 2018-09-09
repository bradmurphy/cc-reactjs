// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  title: 'Welcome to React',
  intro: 'To get started, edit <code>src/App.js</code> and save to reload.'
};

class App extends Component<Props> {
  render() {
    const { title, intro } = this.props;
    console.log(title, intro, this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <p className="App-intro">{intro}</p>
      </div>
    );
  }
}

export default App;
