import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Last Mile Rural Distribution & Logistics Company" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Last Mile Rural Distribution & Logistics Company" 
                /> 

                <BlogDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetails;