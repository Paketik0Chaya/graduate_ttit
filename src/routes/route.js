import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from '/src/views/App.js';

export default () => (
    <Router history={browserHistory}>
        <Route path='/' component={App} />
    </Router>
);