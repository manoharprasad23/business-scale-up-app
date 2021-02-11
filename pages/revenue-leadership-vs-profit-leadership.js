import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import RevenueLeaderShipVsProfitContent from '../components/RevenueLeaderShipVsProfit/RevenueLeaderShipVsProfitContent';

class RevenueLeadershipvsProfitLeadership extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <RevenueLeaderShipVsProfitContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default RevenueLeadershipvsProfitLeadership;