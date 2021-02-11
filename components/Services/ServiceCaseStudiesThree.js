import React from 'react';
import Link from 'next/link';

const ServiceCaseStudiesThree = () => {
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
                                <Link href="/north-india-technology-retail-chain">
                                    <h3>North India Technology Retail Chain</h3>
                                </Link>
                                <p>Helping reset business operations & drive higher profitability</p>
                                <p>Raising capital</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services mouse-pointer">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <Link href="/government-segment-focused-company">
                                    <h3>Government Segment Focused Company</h3>
                                </Link>
                                <p>Connection with new brands & product lines</p>
                                <p>Increased revenues & profitability</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ServiceCaseStudiesThree;