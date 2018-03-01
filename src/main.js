import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app.jsx';
import './scss/index.scss';

render(
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>,
    document.querySelector('#root')
);

if (module.hot) {
    module.hot.accept();
}