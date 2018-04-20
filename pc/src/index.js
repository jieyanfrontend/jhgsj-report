import React from 'react';
import ReactDOM from 'react-dom';
import hisotry from './history';
import { Router } from 'react-router';
import App from './pages/';
let mount = document.getElementById('root');
let render = Root => {
    ReactDOM.render(
        <Router history={hisotry}>
            <Root/>
        </Router>,
        mount
    )
};

render(App);