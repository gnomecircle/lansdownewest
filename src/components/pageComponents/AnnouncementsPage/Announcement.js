import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Column, Row } from '../../_styledComponents/Layout';
import { H1, H2, H3, Text } from '../../_styledComponents/typography';
import { Button } from '../../_styledComponents/Theming';
import { palette } from '../../../data/siteTheming';
import EntryDate from './EntryDate';
import L from '../../../content/global.content';

const { lansBlue, lansLightBrown } = palette;
const StyledRow = Row.extend`
    border-bottom: 1px solid ${lansLightBrown};
    margin-bottom: 14px;
    padding-bottom: 14px;
`;
const StyledImg = styled.div`
    background: ${props => props.image && `url(/images/${props.image}) no-repeat center`};
    background-size: cover;
    border: 1px solid ${lansBlue};
    border-radius: 3px;
    height: 120px;
    width: 100px;
`;
const StyledH3 = H3.extend`
    margin: 0 0 6px;
`;
const StyledText = Text.extend`
    font-size: 16px;
`;

const Announcement = ({ currentLang, announcement }) => {
    const l = L[currentLang];
    const { date, image } = announcement;
    const { title, description, imageDescription, url } = announcement[currentLang];
    
    function insertHtml(string) {
        return {__html: string};
    }

    return (
        <StyledRow>
            <EntryDate currentLang={currentLang} date={date} />
            <Column expand>
                <StyledH3>{title}</StyledH3>
                <StyledText dangerouslySetInnerHTML={insertHtml(description)} />
                {url && <a href={`${url}`}><Button small right>{l['more.info']}</Button></a>}
            </Column>
            {image && <StyledImg image={image} alt={imageDescription} />}
        </StyledRow>
    )
}

Announcement.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default Announcement;