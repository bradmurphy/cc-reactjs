import React from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';

const Shop = ({ items }) => (
  <div>
    {items.map((item, index) => {
      return <Product key={index} item={item} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  items: state.configuration.items
});

export default connect(mapStateToProps)(Shop);
