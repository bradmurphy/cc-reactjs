import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ logo, links }) => (
  // Hint: header > img + nav > ul > li > Link
  <header>
    <img src={logo} alt="logo" />
    <nav>
      <ul>
        {links.map(link => {
          return (
            <li key={link.url}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array
};

export default Header;
