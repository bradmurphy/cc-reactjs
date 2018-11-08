import React from 'react';
// Hint: Import actions and connect from 'react-redux'.

import Product from './Product';
import Item from './Item';

// Hint: Add props as parameters.
const App = ({}) => (
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
  // Hint: Add state to props.
});

const mapDispatchToProps = (dispatch, props) => ({
  // Hint: Add actions to props.
});

// Hint: Add mapStateToProps and mapDispatchToProps to App.
export default connect()(App);
