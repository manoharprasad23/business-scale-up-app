import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import QuizContent from '../components/QuizContent/QuizContent';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';

class Quiz extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="How Future Ready Is Your Business?" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="How Future Ready Is Your Business?" 
                /> 
                <QuizContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Quiz;