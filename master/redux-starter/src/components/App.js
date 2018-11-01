import React from 'react';
import { removeItem, addItem } from '../actions';
import { connect } from 'react-redux';

import Controller from './Controller';

const App = ({ data, items, add, remove }) => (
  <Controller data={data} items={items} add={add} remove={remove} />
);

const mapStateToProps = state => ({
  data: state.configuration.data,
  items: state.configuration.items
});

const mapDispatchToProps = (dispatch, props) => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
