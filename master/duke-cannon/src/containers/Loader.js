import React, { Component } from 'react';
import { Expo, TimelineMax } from 'gsap/TweenMax';

import image from '../assets/images/loading-duke.png';

class Home extends Component {
  componentDidMount() {
    const wait = ms => new Promise((r, j) => setTimeout(r, ms));
    const promise = wait(3500);

    promise.then(() => {
      const tl = new TimelineMax();

      tl.to('#loader', 0.25, {
        opacity: 0.5,
        ease: Expo.easeOut
      }).to('#loader', 0.15, {
        y: '100%',
        ease: Expo.easeIn
      });

      tl.play();
    });
  }

  render() {
    return (
      <div id="loader" className="loader">
        <img src={image} alt="Duke cannon" />
      </div>
    );
  }
}

export default Home;
