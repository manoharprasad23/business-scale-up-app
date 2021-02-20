import React from 'react';
import Link from 'next/link';

const ServiceCaseStudiesTwo = () => {
    return (
        <div className="service-case-studies services-section">
            <div className="title">
                <h3>Case Studies</h3>
                <h5>We have the expertise in supporting business across industries</h5>
            </div>
            <div className="row">
                        <div className="col-lg-4 col-md-6">
                        <Link href="/artificial-intelligence-startup">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-it"></i>
                                </div>
                                
                                    <h3>Artificial Intelligence Startup</h3>
                                
                                <p>Product ideas converted into Go To Market models – new Customer pipes</p>
                            </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6">
                        <Link href="/healthcare-company">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                
                                    <h3>Healthcare Company</h3>
                                
                                <p>Building a premium brand</p>
                                <p>Developing new products</p>
                                <p>New channels for growth</p>
                            </div>
                            </Link>
                        </div>
                    </div>
        </div>
    )
}

export default ServiceCaseStudiesTwo;