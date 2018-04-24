import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { Router } from 'react-router';
import App from './pages/';
let mount = document.getElementById('root');
let render = Root => {
    ReactDOM.render(
        <Router history={history}>
            <Root history={history}/>
        </Router>,
        mount
    )
};

render(App);