import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AuthorizationPage from '../containers/Authorization';
import RegistrationPage from '../containers/Registration';

import Home from '../components/Home';

const Main = ({title}) => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/auth-page" component={AuthorizationPage}/>
            <Route path="/registration-page" component={RegistrationPage}/>
        </Switch>
    </main>
);

export default Main;