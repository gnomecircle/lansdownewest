import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../_styledComponents/Layout';
import { H2, Text } from '../../_styledComponents/typography';
import { palette } from '../../../data/siteTheming';
import bannerImg from './banner-tutoring-centre.jpg';
import Banner from '../../Banner/Banner';
import Announcement from './Announcement';
import Subjects from '../AboutPage/Subjects/Subjects';
import L from '../../../content/HomePage.content';
import workshops from '../../../content/workshops.content';

const StyledSidebar = Column.extend`
    background: ${palette.lansLightBrown};
    border-radius: 6px;
    margin: 14px 0 14px 14px;
    h2 { margin-top: 0; }
    li {
        margin: 6px 0;
    }
`;

const HomePage = ({ currentLang }) => {
    const l = L[currentLang];
    const currentWorkshops = workshops[currentLang];
    return (
        <div data-component="Home" className="home">
            <Banner
                currentLang={currentLang}
                bannerImg={bannerImg}
                bannerMessage={l['banner.message']}
            />
            {/* <Row>
                <Column expand>
                    <Announcement currentLang={currentLang} />
                </Column>
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
            </Row> */}
            <Subjects currentLang={currentLang} />
        </div>
    )
}

HomePage.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default HomePage;