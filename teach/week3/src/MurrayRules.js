import React from 'react';
import PropTypes from 'prop-types';

const MurrayRules = ({ data }) => (
  <figure>
    <img
      src={data.src}
      alt={data.alt}
      width={data.width}
      height={data.height}
    />
    <figcaption>{data.caption}</figcaption>
  </figure>
);

MurrayRules.propTypes = {
  data: PropTypes.object
};

export default MurrayRules;
