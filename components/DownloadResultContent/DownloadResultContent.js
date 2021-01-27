import React from 'react';
import Link from 'next/link';

const DownloadResultContent = () => {
    return (
        <div className="download-result-content">
            <div className="result-container container ptb-100">
                <div className="left-side-box">
                    <p>How future ready is your business?</p>
                </div>
                <div className="result-content">
                    <div className="download-form-input-field">
                        <input type="text" placeholder="Your Name" className="download-form-input-text" />
                        <input type="text" placeholder="Your Email" className="download-form-input-text" />
                        <input type="text" placeholder="Your Contact Number" className="download-form-input-text" />
                        <input type="text" placeholder="Your Company" className="download-form-input-text" />
                    </div>
                    <div className="download-button">
                        <Link href="/service-details">
                            <button className="download">Download Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadResultContent;