import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import App from './App';
import Notfound from './Notfound';

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)

export default Routing;