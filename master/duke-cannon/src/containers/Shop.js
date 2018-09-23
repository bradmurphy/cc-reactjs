import React from 'react';
import Product from '../components/Product';
import { addItem } from '../actions';
import { connect } from 'react-redux';

const Shop = ({ items, onClick }) => (
  <div>
    {items.map((item, index) => {
      return <Product key={index} item={item} onClick={onClick} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  items: state.configuration.items
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: item => dispatch(addItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
