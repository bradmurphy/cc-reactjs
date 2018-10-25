import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Aside = ({ logo, links, animation }) => (
  // Hint: aside > img + nav > li > Link
  <aside id="menu" className={animation}>
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
  </aside>
);

Aside.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array,
  animation: PropTypes.string
};

export default Aside;
