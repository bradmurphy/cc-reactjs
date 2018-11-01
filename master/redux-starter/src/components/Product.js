import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ item, add }) => (
  <div>
    <h1>{item.product}</h1>
    <button onClick={() => add(item)}>Add</button>
  </div>
);

Product.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number
  }),
  add: PropTypes.func
};

export default Product;
