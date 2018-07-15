import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../_styledComponents/Layout';
import { H2 } from '../../_styledComponents/typography';
import Banner from '../../Banner/Banner';
import Announcement from './Announcement';
import announcements from '../../../content/announcements.content';

const Announcements = ({ currentLang }) => {

    return (
        <div data-component="Announcements">
            <Banner
                currentLang={currentLang}
            />
            <Row><H2>{currentLang === 'en' ? 'Announcements' : 'Annonces'}</H2></Row>
            {announcements.map((announcement, key) => (
                <Announcement
                    key={key}
                    announcement={announcement}
                    currentLang={currentLang}
                />
            ))}
        </div>
    )
}

Announcements.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default Announcements;