import React from 'react';
import { removeItem, addItem } from '../actions';
import { connect } from 'react-redux';

import Product from './Product';
import Item from './Item';

const App = ({ data, items, add, remove }) => (
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

const mapStateToProps = state => ({
  data: state.configuration.data,
  items: state.configuration.items
});

const mapDispatchToProps = (dispatch, props) => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
