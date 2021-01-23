import React from 'react';
import Link from 'next/link';

const GrowthTipsContent = () => {
    return (
        <div className="growth-tips pt-100 pb-100">
            <div className="container">
                    <div className="services-details">
                        <div className="text">
                            <h3>Business Growth Tips</h3>
                        </div>
                        <div className="banner-heading">
                            <div className="left-side-heading">
                                <h3>How future ready is your business?</h3>
                            </div>
                            <div className="right-side-content">
                                <div className="text-content">
                                    <p>Business dynamics are always changing - more so today than ever before and every business leader or owner is planning and executing strategies to survive, grow and thrive!</p>
                                    <p>Our "How future ready is your business ?" template helps you assess your readiness !</p>
                                    <p>To assure you that you are indeed on the right track for the future or spot areas to help your plans & execution more robust to succeed in the future.</p>
                                </div>
                                <div className="banner-bottom-content">
                                    <h6>How future ready is your business?</h6>
                                    <Link href="/quiz">
                                        <button className="check-now-button">Check Now - Free</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default GrowthTipsContent;