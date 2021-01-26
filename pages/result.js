import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import ResultContent from '../components/ResultContent/ResultContent';
import Footer from '../components/Layout/Footer';

class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <ResultContent />
            </React.Fragment>
        );
    }
}

export default Result;