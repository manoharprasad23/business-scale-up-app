import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-box pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box contact-box-custom-height">
                                <i className="flaticon-pin"></i>
                                <div className="content-title">
                                    <h3>Address</h3>
                                    <p>Scaleupinc Services Pvt Ltd, B-24, Sarita Vihar, New Delhi 110076 India</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box contact-box-custom-height">
                                <i className="flaticon-envelope"></i>
                                <div className="content-title">
                                    <h3>Email</h3>
                                    <p>info@scaleup-inc.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-contact-box contact-box-custom-height">
                                <i className="flaticon-phone-call"></i>
                                <div className="content-title">
                                    <h3>Phone</h3>
                                    <p>+91 9810065985</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;