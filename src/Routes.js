import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Thanks from './Thanks';
import history from './History';

const Routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/thanks" component={ Thanks } />
            <Route path="/" component={ Home } history= {history}/>
        </Switch>
    </Router>
)

export default Routes;