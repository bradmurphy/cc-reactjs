import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Hint: Import Provider from 'redux' and createStore from 'react-redux' - attach createStore to root reducer.
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
