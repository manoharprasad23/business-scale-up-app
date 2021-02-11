import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import CashFlowContent from '../components/CashFlow/CashFlowContent';
class CashFlow extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <CashFlowContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default CashFlow;