import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from '../../data/siteTheming';

const { lansBlue, lansGreen } = palette;

const StyledMetaList = styled.ul`
    color: ${lansBlue};
    display: flex;
    justify-content: space-between;
    font-family: $font-family-heading;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 10px 0;
    text-transform: uppercase;
`;
const StyledDate = styled.li`
    color: ${lansBlue};
`;
const StyledMetaItems = styled.span`
    color: ${props => props.green && lansGreen};
    color: ${props => props.blue && lansBlue};
`;

const WorkshopMeta = ({ currentLang, date, grade, langOffered }) => {
    const languages = `${currentLang === 'en' ? 'offered in ' : 'offert en '} ${langOffered}`;
    
    return (
        <StyledMetaList>
            <StyledDate blue>{date}</StyledDate>
            <li>
                <StyledMetaItems blue>{grade} </StyledMetaItems>
                <StyledMetaItems green>({languages})</StyledMetaItems>
            </li>
        </StyledMetaList>
    );
}

WorkshopMeta.propTypes = {

};

export default WorkshopMeta;