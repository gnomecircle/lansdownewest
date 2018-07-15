import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Column, Row } from '../../_styledComponents/Layout';
import { H1, H2, H3, Text } from '../../_styledComponents/typography';
import { palette } from '../../../data/siteTheming';
import EntryDate from './EntryDate';

const StyledRow = Row.extend`
    border-bottom: 1px solid red;
    margin-bottom: 14px;
    padding-bottom: 14px;
`;
const StyledH3 = H3.extend`
    margin: 0 0 6px;
`;

const Announcement = ({ currentLang, announcement }) => {
    const { date, imageUrl } = announcement;
    const { title, description, imageDescription, url } = announcement[currentLang];

    return (
        <StyledRow>
            <EntryDate currentLang={currentLang} date={date} />
            <Column expand>
                <StyledH3>{title}</StyledH3>
                <Text>{description}</Text>
                {url && <a href={url}>More Info</a>}
            </Column>
        </StyledRow>
    )
}

Announcement.propTypes = {
    currentLang: PropTypes.string.isRequired,
 }

export default Announcement;