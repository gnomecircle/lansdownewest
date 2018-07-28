import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Column, StyledSidebar } from '../../_styledComponents/Layout';
import { H2, Text } from '../../_styledComponents/typography';
import { Blockquote, StyledImage } from '../../_styledComponents/Theming';
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
            <H2>{l['title']}</H2>
            <Row>
                <Column expand>
                    <Text thin justify>{l['paragraph1']}</Text>
                    <Text thin justify>{l['paragraph2']}</Text>
                </Column>
                <Column four>
                    <StyledImage
                        image={'karen-kravitz.jpg'}
                        height={'260px'}
                    />
                </Column>

            </Row>
        </div>
    )
}

ReadingPage.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default ReadingPage;