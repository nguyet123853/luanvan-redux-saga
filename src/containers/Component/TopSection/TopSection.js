import React, { Component } from 'react';

class TopSection extends Component {
    render() {
        return (
            <section className="site-blocks-cover overflow-hidden bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center text-center text-md-left">
                            <div className="intro-text">
                                <h3>Kiểm tra yêu cầu Visa, nộp đơn xin thị thực - đơn giản và nhanh chóng</h3>
                                <p className="mb-4">Quá trình kiểm tra yêu cầu visa nộp hồ sơ xin thị thực nhanh chóng, đơn giản và tiện lợi hơn bao giờ hết. Chỉ với thiết bị điện thoại di động trên tay, bạn có thể hoàn thành việc nộp đơn xin thị thực trong vài phút.</p>
                            </div>
                        </div>
                        <div className="col-md-5 align-self-end text-center text-md-right">
                            <img src="images/banner.jpg" alt="Image" className="img-fluid cover-img" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TopSection;