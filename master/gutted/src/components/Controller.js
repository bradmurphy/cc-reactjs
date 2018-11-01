import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import Item from './Item';

const Controller = ({ data, items, add, remove }) => (
  <main>
    <h1>Products</h1>
    {data.map(item => (
      <Product key={item.product} item={item} add={add} />
    ))}
    <hr />
    <h1>Cart</h1>
    {items.map(item => (
      <Item key={item.product} item={item} remove={remove} />
    ))}
  </main>
);

Controller.propTypes = {
  data: PropTypes.array,
  items: PropTypes.array,
  add: PropTypes.func,
  remove: PropTypes.func
};

export default Controller;
