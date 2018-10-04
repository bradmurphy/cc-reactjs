import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ data }) => (
  <figure>
    <img src={data.src} alt={data.alt} width="500" />
    <figcaption>
      {data.caption}{' '}
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        {data.linkText}
      </a>
      .
    </figcaption>
  </figure>
);

HelloWorld.propTypes = {
  data: PropTypes.object
};

export default HelloWorld;
