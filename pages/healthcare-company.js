import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import HealthcareCompanyContent from '../components/CaseStudies/HealthcareCompanyContent';

class ArtificialIntelligenceStartupContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <HealthcareCompanyContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ArtificialIntelligenceStartupContainer;