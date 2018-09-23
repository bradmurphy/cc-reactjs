import React, { Component } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';

class Shop extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => {
          return <Product key={item.key} item={item} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.configuration.items
});

export default connect(mapStateToProps)(Shop);
