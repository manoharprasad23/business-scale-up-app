import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import LastMileRuralDistributionContent from '../components/CaseStudies/LastMileRuralDistributionContent';

class LastMileRuralDistributionContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <LastMileRuralDistributionContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default LastMileRuralDistributionContainer;