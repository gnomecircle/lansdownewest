import React from 'react';
import Banner from '../../Banner/Banner';
import Subjects from './Subjects/Subjects';

const pageTitle = {
    'en': 'About',
    'fr': 'À propos'
}

const AboutPage = ({ currentLang }) => {

    return (
        <div className="about">
            <Banner
                currentLang={currentLang}
                pageTitle={pageTitle[currentLang]}
            />

            <Subjects currentLang={currentLang} />
        </div>
    );
}

export default AboutPage;