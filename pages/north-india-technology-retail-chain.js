import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import NorthIndiaTechnologyRetailChainContent from '../components/CaseStudies/NorthIndiaTechnologyRetailChainContent';

class ArtificialIntelligenceStartupContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <NorthIndiaTechnologyRetailChainContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ArtificialIntelligenceStartupContainer;