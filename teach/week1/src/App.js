import React from 'react';
import HelloWorld from './HelloWorld';
import { Bounce, TimelineMax } from 'gsap/TweenMax';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const tl = new TimelineMax({ delay: 0.5 });

    tl.from('#thingy', 1.15, {
      y: '-100vh',
      ease: Bounce.easeOut
    });

    tl.play();
  }

  render() {
    const data = {
      src:
        'https://scontent-iad3-1.cdninstagram.com/vp/5d79e6ec739717a100913dd17b488770/5C429710/t51.2885-15/e35/40473405_2094409900875944_2025660972779060912_n.jpg',
      alt: 'Atlas',
      caption: 'This is a ',
      url: 'http://www.google.com',
      linkText: 'here'
    };

    return (
      <div className="App">
        <header className="App-header">
          <div id="thingy">
            <HelloWorld data={data} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
