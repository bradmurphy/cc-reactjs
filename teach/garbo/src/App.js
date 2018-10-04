import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HelloWorld.css';
import './App.css';

const HelloWorld = ({ data }) => (
  <figure className="HelloWorld">
    <img src={data.src} alt={data.alt} />
    <figcaption>
      {data.caption}
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        {data.linkText}
      </a>
    </figcaption>
  </figure>
);

HelloWorld.propTypes = {
  data: PropTypes.object
};

class App extends Component {
  render() {
    const data = {
      src: 'https://i.ytimg.com/vi/Jayhng-GfNc/hqdefault.jpg',
      alt: 'Image Title',
      caption: 'For more awesome dog pics, ',
      url:
        'https://www.google.com/search?q=miniature+schnauzers&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiExe3RsOvdAhVGiqwKHRqOAIQQ_AUIDigB&biw=2133&bih=1042#imgrc=GeXuiYLemlHu4M:',
      linkText: 'click here!'
    };

    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld data={data} />
        </header>
      </div>
    );
  }
}

export default App;
