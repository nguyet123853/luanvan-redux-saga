import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className id="contact-section">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 bg-primary">
                            <form action="#" className="p-5 contact-form">
                                <h2 className="h4 mb-5 heading">Bạn không tìm thấy những gì bạn muốn?</h2>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label htmlFor="fname">Tên</label>
                                        <input type="text" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname">Họ</label>
                                        <input type="text" id="lname" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="subject">Chủ đề</label>
                                        <input type="subject" id="subject" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="message"></label>
                                        <textarea name="message" id="message" cols={30} rows={7} className="form-control" placeholder="Viết lời nhắn tại đây..." defaultValue={""} />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                    <button type="button" className="btn btn-warning">Gửi đi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 bg-secondary">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-lg-6 text-center heading-section mb-5 align-self-center">
                                    <h2 className="text-white mb-5">Liên hệ</h2>
                                    <ul className="list-unstyled text-left address">
                                        <li>
                                            <span className="d-block">Địa chỉ:</span>
                                            <p>206A Quận 8, TP. Hồ Chí Minh</p>
                                        </li>
                                        <li>
                                            <span className="d-block">Di động:</span>
                                            <p>304 999 9999</p>
                                        </li>
                                        <li>
                                            <span className="d-block">Email:</span>
                                            <p>visagr@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;