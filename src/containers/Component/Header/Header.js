import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import routes from './../../../routes'

class Header extends Component {
    render() {
        return (
            <Router >
                <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-xl-2">
                                <h1 className="mb-0 site-logo"><a href="index.html" className="h2 mb-0"><span className="text-primary"><img src="images/logo.png" alt="Image" className="img-fluid" /></span>
                                </a></h1>
                            </div>
                            {/* Menu */}
                            <Nav />
                            <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: 'relative', top: '3px' }}><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3" /></a></div>
                            {/* Noi dung */}
                            <Switch>
                                { this.showContentMenus(routes)}
                            </Switch>
                        </div>
                    </div>
                </header>
            </Router>
        );
    }
    showContentMenus = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return(
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return result;
    }
}

export default Header;