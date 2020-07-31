import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-5">
                                    <h1 className="mb-0 site-logo"><a href="index.html" className="h2 mb-0">VISAGR<span
                                        className="text-primary"></span>
                                    </a></h1>
                                </div>
                                <div className="col-md-3 ml-auto">
                                    <ul className="list-unstyled">
                                        <h2 className="footer-heading mb-4">Điều khoản sử dụng</h2>
                                        <h2 className="footer-heading mb-4">Chính sách bảo mật</h2>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h2 className="footer-heading mb-4">Tải ứng dụng về điện thoại</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="pl-3 pr-3"><img src="images/apple-store.svg" alt="Image mb-5" /></a></li>
                                        <li><a href="#" className="pl-3 pr-3"><img src="images/android-store.svg" alt="Image mb-5" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;