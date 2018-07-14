import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import { address, contactInfo } from '../../data/siteConfig';
import L from './ContactPage.content';
import './ContactPage.css';

const pageTitle = {
    'en': 'Contact Us',
    'fr': 'Contactez-nous'
}

class ContactPage extends Component {
    render() {
        const { currentLang } = this.props;
        const { street, city, prov, postalCode } = address;
        const { tel } = contactInfo;

        return (
            <div className="contact">
                <Banner currentLang={currentLang} pageTitle={pageTitle[currentLang]} />
                <h3>Contact Form</h3>
                {/* <ContactForm /> */}
                <h3>Telephone</h3>
                <p>{tel}</p>
                <h3>Address</h3>			
                <p> 
                    {street}<br />
                    {city}, {prov}, {postalCode}
                </p>
            </div>
        )
    }
};

ContactPage.propTypes = {
    currentLang: PropTypes.string.isRequired,
}

export default ContactPage;