import React from 'react';
import Link from 'next/link';

const ServiceCaseStudies = () => {
    return (
        <div className="service-case-studies services-section">
            <div className="title">
                <h3>Case Studies</h3>
                <h5>We have the expertise in supporting business across industries</h5>
            </div>
            <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-it"></i>
                                </div>
                                <Link href="/last-mile-rural-distribution">
                                    <h3>Last Mile Rural Distribution and Logistics Company</h3>
                                </Link>
                                <p>Helped re draw strategies and execution plans for 10x growth</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <Link href="/B2B-focused-IT-hardware">
                                    <h3>B2B Focused IT Hardware & Services Company</h3>
                                </Link>
                                <p>Covid impact and reinventing the business model</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ServiceCaseStudies;