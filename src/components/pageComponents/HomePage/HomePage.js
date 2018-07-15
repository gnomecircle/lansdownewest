import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../_styledComponents/Layout';
import { H2, Text, H3 } from '../../_styledComponents/typography';
import { palette } from '../../../data/siteTheming';
import bannerImg from './banner-tutoring-centre.jpg';
import Banner from '../../Banner/Banner';
import HomePageMessage from './HomePageMessage';
import Subjects from '../AboutPage/Subjects/Subjects';
import Announcement from '../AnnouncementsPage/Announcement';

// Content
import L from '../../../content/HomePage.content';
import announcements from '../../../content/announcements.content';
import workshops from '../../../content/workshops.content';

const StyledH3 = H3.extend`
    margin-top: 16px;
    text-align: center;
`;
const StyledWorkshopContainer = Column.extend`
    background: ${palette.lansLightBrown};
    border-radius: 6px;

    li {
        margin: 6px 0;
    }
`;

const HomePage = ({ currentLang }) => {
    const l = L[currentLang];
    const currentWorkshops = workshops[currentLang];

    return (
        <div data-component="Home">
            <Banner
                currentLang={currentLang}
                bannerImg={bannerImg}
                bannerMessage={l['banner.message']}
            />
            <HomePageMessage
                message={l['main.message']}
            />
            <Row><H2>Recent News</H2></Row>
            <Row>
                <Column expand>
                    <StyledH3>{currentLang === 'en' ? 'Announcements' : 'Annonces'}</StyledH3>
                    <Announcement
                        key={0}
                        announcement={announcements[0]}
                        currentLang={currentLang}
                    />
                    <Announcement
                        key={1}
                        announcement={announcements[1]}
                        currentLang={currentLang}
                    />
                    {/* add link to announcements page */}
                </Column>
                <StyledWorkshopContainer three>
                    <StyledH3>{currentLang === 'en' ? 'Upcoming Workshops' : 'Ateliers à venir'}</StyledH3>
                    <ul>
                        {Object.keys(currentWorkshops).map((item, key) => {
                            const { current, title, infoLink } = currentWorkshops[item];
                            if (current) {
                                return <li key={key}><Text bold center><Link to={`${infoLink}`}>{title}</Link></Text></li>
                            }
                        })}
                    </ul>
                </StyledWorkshopContainer>
            </Row>
            {/* ==== WORKSHOPS ===
            <Row>
                <StyledSidebar three>
                    <H2>Workshops</H2>
                    <ul>
                        {Object.keys(currentWorkshops).map((item, key) => {
                            const { current, title, infoLink } = currentWorkshops[item];
                            if (current) {
                                return <li key={key}><Text bold center><Link to={`${infoLink}`}>{title}</Link></Text></li>
                            }
                        })}
                    </ul>
                </StyledSidebar>
            </Row>
            === WORKSHOPS === */}
            <Subjects currentLang={currentLang} />
        </div>
    )
}

HomePage.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default HomePage;