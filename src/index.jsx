import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
