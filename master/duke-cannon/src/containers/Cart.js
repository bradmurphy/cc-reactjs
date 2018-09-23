import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    let total = 0;
    cart.map(item => {
      const price = item.price * item.quantity;
      total += price;
      return total;
    });

    return (
      <div className="cart">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.configuration.cart
});

export default connect(mapStateToProps)(Cart);
