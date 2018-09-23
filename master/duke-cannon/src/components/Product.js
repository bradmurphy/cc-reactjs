import React from 'react';
import PropTypes from 'prop-types';
import { addItem } from '../actions';
import { connect } from 'react-redux';

const Product = ({ item }) => (
  <div className="product">
    <div className="media">
      <img src={item.img} alt={item.title} />
      <h3>${item.price}</h3>
    </div>
    <div className="content">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button>Add To Cart</button>
    </div>
  </div>
);

Product.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

Product.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.configuration.cart
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(addItem(props.item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
