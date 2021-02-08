import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import ArtificialIntelligenceStartupContent from '../components/CaseStudies/ArtificialIntelligenceStartupContent';

class ArtificialIntelligenceStartupContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ArtificialIntelligenceStartupContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ArtificialIntelligenceStartupContainer;