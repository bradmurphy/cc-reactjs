import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';

import Home from './Home';
import Shop from './Shop';
import Order from './Order';
import Account from './Account';
import Loader from './Loader';

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="logo" alt="Duke Cannon" />
            </header>
            <nav className="App-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/order" component={Order} />
            <Route path="/account" component={Account} />
          </div>
        </Router>
        <Loader />
      </main>
    );
  }
}

export default App;
