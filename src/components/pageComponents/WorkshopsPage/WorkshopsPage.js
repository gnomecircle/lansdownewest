import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../_styledComponents/Layout';
import { H2 } from '../../_styledComponents/typography';
import Banner from '../../Banner/Banner';
import WorkshopTile from '../../Workshops/WorkshopTile';
import bannerImg from './workshops-banner.jpg';
import L from '../../../content/WorkshopsPage.content';
import workshops from '../../../content/workshops.content';

const WorkshopsPage = ({ currentLang }) => {
    const l = L[currentLang];
    const workshopsContent = workshops[currentLang];

    return (
        <div data-component="workshops-page">
            <Banner
                currentLang={currentLang}
                bannerImg={bannerImg}
                bannerMessage={l['banner.message']}
            />
            <Row><H2>{l['upcoming.workshops']}</H2></Row>
            <Row>
                {Object.keys(workshopsContent).map((item, key) => {
                    const workshop = workshopsContent[item];
                    return (
                        <WorkshopTile
                            key={key}
                            currentLang={currentLang}
                            workshop={workshop}
                            infoLink={'www.google.ca'}
                        />
                    )
                })}
            </Row>
        </div>
    );
}

WorkshopsPage.propTypes = {
    currentLang: PropTypes.string.isRequired,
}

export default WorkshopsPage;