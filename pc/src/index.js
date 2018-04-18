import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './pages/';
let mount = document.getElementById('root');

let render = Root => {
    ReactDOM.render(
        <BrowserRouter>
            <Root/>
        </BrowserRouter>,
        mount
    )
};
render(App);