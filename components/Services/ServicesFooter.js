import React from 'react';
import Link from 'next/link';

const ServicesFooter = () => {
    return (
        <div className="service-footer">
            <h2>Think we can help you?</h2>
            <Link href="/service-details">
                <button>Enquire Now</button>
            </Link>
        </div>
    )
}

export default ServicesFooter;