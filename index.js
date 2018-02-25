import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app.js';
import './index.scss';

render(
    <App />,
    document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}
