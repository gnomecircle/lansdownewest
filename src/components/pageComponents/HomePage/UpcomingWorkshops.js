import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2, SubHeading } from '../../_styledComponents/typography';
import Workshop from '../../Workshops/Workshop';
import tempImg from './high-school-entrance-exams-students.png';

const L = {
    en: {
        'Upcoming.Workshops': 'Upcoming Workshops',
		'Workshops.subheading': 'Our experienced tutors can help you prepare with our highly successful workshops.',

    },
    fr: {
        'Upcoming.Workshops': 'Ateliers à venir',
		'Workshops.subheading': 'Nos enseignants d\'expérience peuvent vous aidez avec nos ateliers.',

    }
}

const TempImage = styled.div`
    background: url(${tempImg}) no-repeat;
    background-size: cover;
    border-radius: 20px;
    margin-top: 12px;
    opacity: .7;
    width: 100%;
    height: 100%;
`;

const UpcomingWorkshops = ({ currentLang }) => {
    const l = L[currentLang];

    return (
        <div>
            <H2 center>{l['Upcoming.Workshops']}</H2>
            <SubHeading>{l['Workshops.subheading']}</SubHeading>
            <div className="row">
                <Workshop
                    currentLang={currentLang}
                />                
                <div className="column two"><TempImage /></div>
            </div>
        </div>
    )
};

UpcomingWorkshops.propTypes = {

}

export default UpcomingWorkshops;