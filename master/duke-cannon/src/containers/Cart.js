import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    const items = cart.filter((item, pos, arr) => arr.indexOf(item) === pos);
    let total = 0;
    cart.map(item => {
      total += item.price;
      return total;
    });

    return (
      <div className="cart">
        {items.map((item, index) => {
          const quantity = cart.filter(i => i.key === item.key);
          item.quantity = quantity.length;

          console.log(item);
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
