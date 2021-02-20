import React, { Component } from 'react';
import Link from 'next/link';

class InnovationContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <section className="innovation-page-content ptb-100 service-case-studies services-section">
                <div className="container">
                <div className="section-title">
                    <h2>Innovation</h2>
                    <h4>Tips to help your business grow</h4>
                    <div className="bar"></div>






                    <div className="row">
                            <div className="col-lg-5 col-md-6 mrg-50">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/how-future-ready-is-your-business">
                                            <a>
                                                <img src={require("../../images/case-studies-1.jpg")} alt="image" className="image-custom-border"/>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>How Future Ready is your Business?</h3>
                                        <p>How do you stay on track to ensure your business stays relevant and profitable ?</p>
                                        <Link href="/how-future-ready-is-your-business">
                                            <button className="default-btn">Continue reading</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6 mrg-50">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/cashflow">
                                            <a>
                                                <img src={require("../../images/case-studies-2.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                    <h3>Cashflow</h3>
                                    <h5>Major Success factor in Business</h5>
                                        <p>Why is cashflow so important for a business’ continued success?</p>
                                        <Link href="/cashflow">
                                            <button className="default-btn">Continue reading</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/revenue-leadership-vs-profit-leadership">
                                            <a>
                                                <img src={require("../../images/case-studies-3.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                    <h3>Revenue Leadership vs Profit Leadership</h3>
                                        <p>”Revenue is vanity, Profit is sanity” and this is a rule all businesses should follow</p>
                                        <Link href="/revenue-leadership-vs-profit-leadership">
                                            <button className="default-btn">Continue reading</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/customer-stratergy">
                                            <a>
                                                <img src={require("../../images/case-studies-4.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                    <h3>How to rejig your Customer Strategy?</h3>
                                    <h5>Increase Revenues & Profits</h5>
                                        <p>Work with the right customer for business growth</p>
                                        <Link href="/customer-stratergy">
                                            <button className="default-btn">Continue reading</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>















                </div>
                </div>
            </section>
        );
    }
}

export default InnovationContent;