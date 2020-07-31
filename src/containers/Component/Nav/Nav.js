import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Thị thực',
        to: '/check-visa',
        exact: false
    }
]

const Menuink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={(match) => {
                var active = match ? 'active abc' : '';
                return (
                    <li className={active}>
                        <Link to={to} className="nav-link">
                            {lable}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Nav extends Component {
    render() {
        return (
            <div className="col-12 col-md-10 d-none d-xl-block">
                <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                        {/* <a href="/" className="nav-link">Trang chủ</a> */}
                        {this.showMenus(menus)}
                        <li><a href="#trainers-section" className="nav-link">Đại lí/Công ty</a></li>
                        <li><a href="#pricing-section" className="nav-link">Lãnh sự quán</a></li>
                        <li><a href="#services-section" className="nav-link">
                            <button type="button" className="btn btn-warning">Đăng nhập</button>
                            <button type="button" className="btn btn-primary">Đăng ký</button>
                        </a></li>
                    </ul>
                </nav>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <Menuink
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}

export default Nav;