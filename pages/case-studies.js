import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

class CaseStudies extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="case-studies-container">
                    <div className="container header-padding">
                        <div className="section-title">
                            <h2>Case Studies</h2>   
                            <p>We have the expertise in supporting businesses across industries</p>
                            <div className="bar"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/last-mile-rural-distribution">
                                            <a>
                                                <img src={require("../images/case-studies-1.jpg")} alt="image" className="image-custom-border"/>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>
                                            <Link href="/last-mile-rural-distribution">
                                                <a>Last Mile Rural Distribution  & Logistics company</a>
                                            </Link>
                                        </h3>
                                        <p>Helping re draw strategies and execution plans for 10x growth</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/B2B-focused-IT-hardware">
                                            <a>
                                                <img src={require("../images/case-studies-2.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>
                                            <Link href="/B2B-focused-IT-hardware">
                                                <a>B2B focused IT Hardware & Services company </a>
                                            </Link>
                                        </h3>
                                        <p>Covid impact and reinventing the business model</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/artificial-intelligence-startup">
                                            <a>
                                                <img src={require("../images/case-studies-3.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>
                                            <Link href="/artificial-intelligence-startup">
                                                <a>Artificial Intelligence Startup </a>
                                            </Link>
                                        </h3>
                                        <p>Product ideas converted into Go To Market models – new Customer pipes </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/healthcare-company">
                                            <a>
                                                <img src={require("../images/case-studies-4.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>
                                            <Link href="/healthcare-company">
                                                <a>Healthcare company</a>
                                            </Link>
                                        </h3>
                                        <p>Building a premium brand</p>
                                        <p>Developing new products</p>
                                        <p>New channels for growth</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/north-india-technology-retail-chain">
                                            <a>
                                                <img src={require("../images/case-studies-5.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>
                                            <Link href="/north-india-technology-retail-chain">
                                                <a>North India Technology Retail Chain</a>
                                            </Link>
                                        </h3>
                                        <p>Helping reset business operations & drive higher profitability</p>
                                        <p>Raising capital</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/government-segment-focused-company">
                                            <a>
                                                <img src={require("../images/case-studies-6.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content custom-content">
                                        <h3>
                                            <Link href="/government-segment-focused-company">
                                                <a>Government segment focused company</a>
                                            </Link>
                                        </h3>
                                        <p>Connection with new brands & product lines</p>
                                        <p>Increased revenues & profitability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default CaseStudies;