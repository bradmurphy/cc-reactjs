import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import { removeItem } from '../actions';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart, onClick } = this.props;
    let total = 0;
    cart.map(item => {
      const price = item.price * item.quantity;
      total += price;
      return total;
    });

    return (
      <div className="cart">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} onClick={onClick} />;
        })}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.configuration.cart
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
