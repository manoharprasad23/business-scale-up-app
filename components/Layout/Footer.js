import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <footer className="footer-section pt-100 pb-70">
                    <div className="container">
                        <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="subscribe-content">
                                        <h2>Join Our Newsletter</h2>
                                        <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <form className="newsletter-form">
                                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" required />
                                        <button type="submit">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>About Us</h3>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                                    <ul className="footer-social">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-pinterest"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Important Links</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">
                                                <a>Projects</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">
                                                <a>Blog</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Featured Service</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="#">
                                                <a>IT Management</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a href="#">Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>UI/UX Design</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Support Engineer</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Contact</h3>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-phone-call"></i>
                                        <h3>Phone</h3>
                                        <span>+123(456)123</span>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-envelope"></i>
                                        <h3>Email</h3>
                                        <span>hello@luzon.com</span>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-pin"></i>
                                        <h3>Address</h3>
                                        <span>32 st Kilda Road, Melbourne VIC, 3004 Australia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </footer>

                {/* Copyright area */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-area-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <p>
                                        Copyright @{currentYear} Luzon. All Rights Reserved by <Link href="https://envytheme.com/"><a target="_blank">EnvyTheme</a></Link>
                                    </p>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;