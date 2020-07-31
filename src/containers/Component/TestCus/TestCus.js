import React, { Component } from 'react';

class TestCus extends Component {
    render() {
        return (
            <section className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
                <div className="container">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-6 text-center heading-section mb-5">
                            <h2 className="text-black mb-2">Trải nghiệm khách hàng</h2>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={200}>
                        <div className="owl-carousel nonloop-block-13">
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>“The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                                        Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven
                      versalia, put her initial into the belt and made herself on the way.”</p>
                                    </blockquote>
                                    <figure>
                                        <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle mx-auto" />
                                    </figure>
                                    <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost
                                        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to
                      leave for the far World of Grammar.”</p>
                                    </blockquote>
                                    <figure>
                                        <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle mx-auto" />
                                    </figure>
                                    <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>“A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                      mouth.”</p>
                                    </blockquote>
                                    <figure>
                                        <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle mx-auto" />
                                    </figure>
                                    <h3 className="font-size-20 text-black">Mellisa Griffin</h3>
                                </div>
                            </div>
                            <div>
                                <div className="block-testimony-1 text-center">
                                    <blockquote className="mb-4">
                                        <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                      Semantics, a large language ocean.”</p>
                                    </blockquote>
                                    <figure>
                                        <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle mx-auto" />
                                    </figure>
                                    <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestCus;