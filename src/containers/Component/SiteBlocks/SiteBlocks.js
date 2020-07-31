import React, { Component } from 'react';

class SiteBlocks extends Component {
    render() {
        return (
            <section className="site-blocks-cover overflow-hidden bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center text-center text-md-left">
                            <div className="intro-text">
                                <h4>Dịch vụ làn ưu tiên tại sân bay</h4>
                                <h3>DỊCH VỤ NHẬP CẢNH VÀ XUẤT CẢNH THEO LÀN ƯU TIÊN</h3>
                                <p className="mb-4">Bạn sẽ tiết kiệm thời gian mà không cần chờ xếp hàng khi nhập cảnh hay xuất cảnh tại sân bay khi sử dụng dịch vụ làn ưu tiên của chúng tôi! Nhân viên hỗ trọ VisaGR sẽ hướng dẫn bạn nhận thị thực nhanh tại sân.<span className="d-block"></span></p>
                            </div>
                        </div>
                        <div className="col-md-5 align-self-end text-center text-md-right">
                            <img src="images/visa_img_big_1.jpg" alt="Image" className="img-fluid cover-img" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SiteBlocks;