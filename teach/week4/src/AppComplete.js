import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

const Header = ({ logo, links }) => (
  // Hint: Header > H1 + Nav > UL > LI
  <header>
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        {links.map(link => {
          return (
            <li key={link.text}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.string
};

const Aside = ({ logo, links, position }) => (
  <aside id="menu" className={position}>
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        {links.map(link => {
          return (
            <li key={link.text}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </aside>
);

Aside.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.string,
  position: PropTypes.string
};

const Page = ({ content }) => <h1>{content}</h1>;

Page.propTypes = {
  content: PropTypes.string
};

class App extends Component {
  state = {
    menuOpened: false,
    logo: logo,
    links: [
      {
        url: './',
        text: 'Home'
      },
      {
        url: './about',
        text: 'About'
      },
      {
        url: './work',
        text: 'Work'
      },
      {
        url: './contact',
        text: 'Contact'
      }
    ],
    content: {
      home: 'Home Page Content...',
      about: 'About Page Content...',
      work: 'Work Page Content...',
      contact: 'Contact Page Content...'
    }
  };

  animateMenu = () => {
    const { menuOpened } = this.state;
    this.setState({ menuOpened: !menuOpened });
  };

  render() {
    const { menuOpened, links, logo, content } = this.state;
    const menuAnimation = menuOpened === true ? 'open' : '';

    return (
      <Router>
        <div className="wrap">
          <button onClick={this.animateMenu}>Hamburger</button>
          <Aside logo={logo} links={links} position={menuAnimation} />
          <main>
            <Header logo={logo} links={links} />
            <section>
              <Route
                exact
                path="/"
                render={() => <Page content={content.home} />}
              />
              <Route
                path="/about"
                render={() => <Page content={content.about} />}
              />
              <Route
                path="/work"
                render={() => <Page content={content.work} />}
              />
              <Route
                path="/contact"
                render={() => <Page content={content.contact} />}
              />
            </section>
            <footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
