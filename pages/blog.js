import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
          
                <section className="blog-section case-studies-container ptb-100">
                    <div className="container">
                        <div className="text">
                            <h2>Case Studies</h2>    
                            <h6 className="case-studies-sub-headline">We have the expertise in supporting businesses across industries</h6>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../images/blog/blog1.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/blog-details">
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
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../images/blog/blog2.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/blog-details">
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
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../images/blog/blog3.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>Artifical Intelligence startup </a>
                                            </Link>
                                        </h3>
                                        <p>Product ideas converted into Go To Market models – new Customer pipes </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../images/blog/blog4.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/blog-details">
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
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../images/blog/blog5.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/blog-details">
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
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../images/blog/blog6.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>Government segment focused company</a>
                                            </Link>
                                        </h3>
                                        <p>Connection with new brands & product lines</p>
                                        <p>Increased revenues & profitability</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pagination */}
                            {/* <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <Link href="#">
                                        <a className="prev page-numbers">
                                            <i className="flaticon-left"></i>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="page-numbers">1</a>
                                    </Link>

                                    <span className="page-numbers current" aria-current="page">2</span>

                                    <Link href="#">
                                        <a className="page-numbers">3</a>
                                    </Link>

                                    <Link href="#">
                                        <a className="page-numbers">4</a>
                                    </Link>

                                    <Link href="#">
                                        <a className="next page-numbers">
                                            <i className="flaticon-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;