import React from 'react';
import {Route, Switch} from 'react-router-dom';

import '../styles/Header.css';

import header1 from '../images/dog.jpg';
import header2 from '../images/hong-kong.jpg';
import header3 from '../images/homberg.jpg';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={header1} alt="dog"/>
                )} />
                <Route path="/products" render={() => (
                    <img src={header2} alt="hong-kong"/>
                )} />
                <Route path="/contact" render={() => (
                    <img src={header2} alt="hong-kong"/>
                )} />
                <Route path="/admin" render={() => (
                    <img src={header3} alt="homberg"/>
                )} />
                <Route render={() => (
                    <img src={header3} alt="homberg"/>
                )} />
            </Switch>
        </>
    );
}

export default Header;
