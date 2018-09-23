import React from 'react';
import PropTypes from 'prop-types';
import { addItem } from '../actions';
import { connect } from 'react-redux';

const Product = ({ item, onClick }) => (
  <div className="product">
    <div className="media">
      <img src={item.img} alt={item.title} />
      <h3>${item.price.toFixed(2)}</h3>
    </div>
    <div className="content">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button
        onClick={() => {
          onClick(item);
        }}
      >
        Add To Cart
      </button>
    </div>
  </div>
);

Product.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(addItem(props.item))
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
