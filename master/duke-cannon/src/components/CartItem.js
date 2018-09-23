import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item, onClick } = this.props;
    const price = item.price * item.quantity;

    return (
      <div className="cart-item">
        <div className="media">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="content">
          <h1>
            {item.title} <span>x{item.quantity}</span>
          </h1>
          <h3>${price.toFixed(2)}</h3>
          <button
            onClick={() => {
              onClick(item);
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default CartItem;
