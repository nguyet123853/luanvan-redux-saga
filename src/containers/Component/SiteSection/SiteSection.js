import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SiteSection extends Component {
    render() {
        return (
            <section className="site-section " id="services-section">
                <div className="container">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-6 text-center heading-section mb-5">
                            <div className="intro-text"><h3>Việc kiểm tra yêu cầu Visa, xin thị thực chưa bao giờ đơn giản đến thế</h3></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay>
                            <div className="block_service">
                                <img src="images/smartphone.svg" alt="Image mb-5" />
                                <h3>Di động</h3>
                                <p>Đơn giản, hiệu quả và tiết kiệm thời gian của bạn.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                            <div className="block_service">
                                <img src="images/calendar.svg" alt="Image mb-5" />
                                <h3>Nhận tài liệu du lịch</h3>
                                <p>Cập nhật trạng thái hồ sơ theo thời gian thực, bạn sẽ nhận được thị thực sau một ngày làm việc.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                            <div className="block_service">
                                <img src="images/travel.svg" alt="Image mb-5" />
                                <h3>Du lịch an toàn</h3>
                                <p>VisaGR sẽ đồng hàng cùng bạn suốt thời gian thị thực.</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-warning">Đăng ký ngay</button>
                </div>
            </section>
        );
    }
}

export default SiteSection;