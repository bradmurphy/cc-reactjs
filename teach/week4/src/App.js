import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

const Header = ({ logo, links }) => (
  // Hint: header > img + nav > ul > li
  <header></header>
);

const Aside = ({ logo, links, animation }) => (
  // Hint: aside > img + nav > li > Link
  <aside id="menu"></aside>
);

const Page = ({ content }) => <h1>{content}</h1>;

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
        url: '/about',
        text: 'About'
      },
      {
        url: '/work',
        text: 'Work'
      },
      {
        url: '/contact',
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
    // Hint: this.setState({});
  };

  render() {
    // Hint: Destructure your state and set up your menu animation statement.
    const animation = undefined === true ? 'open' : '';

    return (
      <Router>
        <div className="wrap">
          <button>Hamburger</button>
          <Aside />
          <main>
            <Header />
            <section>
              <Route
                exact
                path={}
                render={() => <Page />}
              />
              <Route
                path={}
                render={() => <Page />}
              />
              <Route
                path={}
                render={() => <Page />}
              />
              <Route
                path={}
                render={() => <Page />}
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
