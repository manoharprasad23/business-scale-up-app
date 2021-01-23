import React from 'react';
import Link from 'next/link';

const ResultContent = () => {
    return (
        <div className="result-container container ptb-100">
            <div className="left-side-box">
                <p>How future ready is your business?</p>
            </div>
            <div className="result-content">
                <p className="thank-you-text">Thank you for checking future readiness of your business</p>
                <h3>Your score was 55 out of 100</h3>
                <div className="score-indicator">
                    <h6>What does this score indicate ?</h6>
                    <p>In this volatile business world, you are facing issues similar to many business around you. It's time for some significant 'surgery'. A detailed business health review is needed to help understand key challenges, prioritize actions and take corrective measures. You will certainly benefit from the advice and assistance of an expert Business advisor to explore and recommend impactful actions to you firmly on the way to stability, growth and success.</p>
                </div>
                <div className="page-report">
                    <h6>Get a detailed 5 page report</h6>
                    <p>Download a detailed 5 page report on the key success factors to help your business strategies and execution succeed.</p>
                </div>
                <div className="download-button">
                    <Link href="/download-result">
                        <button className="download">Download Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultContent;