import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Column, StyledSidebar } from '../../_styledComponents/Layout';
import { H1, Text } from '../../_styledComponents/typography';
import Banner from '../../Banner/Banner';
import L from '../../../content/ReadingPage.content';
import bannerImg from './reading-banner-tutoring-centre.jpg';

const ReadingPage = ({ currentLang }) => {
    const l = L[currentLang];

    return (
        <div data-component="Reading">
            <Banner
                currentLang={currentLang}
                bannerImg={bannerImg}
                bannerMessage={'A love of reading is one of the greatest gifts you can give a child – it lasts a lifetime.'}
            />
            <Row>
                <Column expand>
                    <H1>{l['title']}</H1>
                    <Text>{l['paragraph1']}</Text>
                    <Text>{l['paragraph2']}</Text>
                </Column>
                <StyledSidebar three>
                    
                </StyledSidebar>
            </Row>
        </div>
    )
}

ReadingPage.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default ReadingPage;