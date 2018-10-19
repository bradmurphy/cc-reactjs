import React, { Component } from 'react';
import './App.css';
import MurrayRules from './MurrayRules';

class App extends Component {
  render() {
    const data = {
      src: 'https://www.fillmurray.com/640/320',
      width: 640,
      height: 320,
      alt: 'Bill Murray',
      caption:
        '"Whatever you do, always give 100%.  Unless you’re donating blood."'
    };

    return (
      <div className="App">
        <header className="App-header">
          <MurrayRules data={data} />
        </header>
      </div>
    );
  }
}

export default App;
