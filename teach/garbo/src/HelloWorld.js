import React from 'react';
import PropTypes from 'prop-types';
import './HelloWorld.css';

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

export default HelloWorld;
