import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import GovernmentSegmentFocusedCompanyContent from '../components/CaseStudies/GovernmentSegmentFocusedCompanyContent';

class GovernmentSegmentFocusedCompanyContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <GovernmentSegmentFocusedCompanyContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GovernmentSegmentFocusedCompanyContainer;