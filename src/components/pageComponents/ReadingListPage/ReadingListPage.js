import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Column, StyledSidebar } from '../../_styledComponents/Layout';
import { H1, Text } from '../../_styledComponents/typography';
import Banner from '../../Banner/Banner';
import L from '../../../content/readingLists.content';
import bannerImg from '../ReadingPage/reading-banner-tutoring-centre.jpg';

const bookPanelWidth = '80px';
const bookPanelHeight = '120px';

const StyledBookList = styled.ol`

`;
const StyledBookRow = styled.li`
    display: flex;
    border-bottom: 1px solid red;
    margin: 6px 0;
    padding: 6px 0 10px;
    &:last-child {
        border-bottom: none;
    }
`;
const StyledBookCover = styled.li`
    background: ${props => props.imgUrl && `url(${props.imgUrl}) no-repeat -2px -2px`};
    background-size: ${`calc(${bookPanelWidth} + 4px) calc(${bookPanelHeight} + 4px)`};
    height: ${bookPanelHeight};
    position: relative;
    width: ${bookPanelWidth};
`;
const StyledRank = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 36px;
    font-weight: 700;
    margin-right: 10px;
    width: 50px;
`;
const ReadingPage = ({ currentLang, list }) => {
    const l = L[currentLang];

    return (
        <div data-component="Reading">
            <Banner
                currentLang={currentLang}
                bannerImg={bannerImg}
                bannerMessage={'A love of reading is one of the greatest gifts you can give a child – it lasts a lifetime.'}
            />
            <Row>
                <StyledSidebar three>
                    
                </StyledSidebar>
                <Column expand>
                <H1>Best Books for grade Five & Six Students</H1>
                <StyledBookList>
                    {l[list].map((book, key) => {
                        const { rank, title, author, blurb, imgUrl } = book;
                        return (
                            <StyledBookRow key={key}>
                                <Column six flex>
                                    <StyledRank>{rank}</StyledRank>
                                    <StyledBookCover imgUrl={imgUrl} />
                                </Column>
                                <Column expand>
                                    <Text bold uppercase>{title}</Text>
                                    <Text>By: {author}</Text>
                                    <Text>{blurb}</Text>
                                </Column>
                            </StyledBookRow>
                        ) 
                    })}
                </StyledBookList>
                </Column>
            </Row>
        </div>
    )
}

ReadingPage.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default ReadingPage;