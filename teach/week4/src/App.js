import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header';
import Aside from './components/Aside';
import Page from './components/Page';
import './App.css';

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
    const { menuOpened } = this.state;
    this.setState({ menuOpened: !menuOpened });
  };

  render() {
    // Hint: Destructure your state and set up your menu animation statement.
    const { menuOpened, logo, links, content } = this.state;
    const animation = menuOpened === true ? 'open' : '';

    return (
      <Router>
        <div className="wrap">
          <button onClick={this.animateMenu}>Hamburger</button>
          <Aside logo={logo} links={links} animation={animation} />
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
