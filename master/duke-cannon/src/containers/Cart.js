import React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';

const Cart = ({ cart }) => (
  <div>
    {cart.map(item => {
      return <Product key={item.key} item={item} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  cart: state.configuration.cart
});

export default connect(mapStateToProps)(Cart);
