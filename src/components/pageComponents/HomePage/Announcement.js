import React from 'react';
import styled from 'styled-components';
import { Blockquote } from '../../_styledComponents/Theming';
import { H2, Text } from '../../_styledComponents/typography';

const content = {
    en: {
        headline: 'Start now to prepare for June Exams',
        message: 'Our experienced tutors are ready to help. Science and technology, as well as history (final exam will be a prototype) and Math. Call us for details 514-697-4133.'
    },
    fr: {
        headline: 'Commencer dès maintenant votre préparation des examens de fin d\'année',
        message: 'Our experienced tutors are ready to help. Science and technology, as well as history (final exam will be a prototype) and Math. Call us for details 514-697-4133.'
    }
}

const Announcement = ({ currentLang }) => {

    return (
        <Blockquote>
            <Text bold center uppercase>{content[currentLang].headline}</Text>
            <Text bold center>{content[currentLang].message}</Text>
        </Blockquote>
    )
}

export default Announcement;