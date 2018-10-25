import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ content }) => <h1>{content}</h1>;

Page.propTypes = {
  content: PropTypes.string
};

export default Page;
