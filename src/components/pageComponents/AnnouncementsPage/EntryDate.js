import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from '../../../data/siteTheming';

const { lansBeige, lansBlue, lansGreen } = palette;

const monthLabels = [
    {'en': 'Jan', 'fr': 'Jan'}, {'en': 'Feb', 'fr': 'Fev'}, {'en': 'Mar', 'fr': 'Mar'}, {'en': 'Apr', 'fr': 'Avr'},
    {'en': 'May', 'fr': 'Mai'}, {'en': 'Jun', 'fr': 'Jun'}, {'en': 'Jul', 'fr': 'Jui'}, {'en': 'Aug', 'fr': 'Aou'},
    {'en': 'Sep', 'fr': 'Sep'}, {'en': 'Oct', 'fr': 'Oct'}, {'en': 'Nov', 'fr': 'Nov'}, {'en': 'Dec', 'fr': 'Déc'},
];

const StyledDateContainer = styled.div`
    border: 3px solid ${lansBlue};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;
    margin: 5px 10px 10px 0;
    text-align: center;
    width: 60px;
`;
const StyledMonth = styled.p`
    background: ${lansBlue};
    color: #fff;
    font-weight: 700;
    padding: 3px 0;
    text-transform: uppercase;
`
const StyledDay = styled.p`
    color: ${lansGreen};
    font-size: 28px;
    font-weight: 700;
    padding: 9px 0;
`;
// const StyledYear = styled.p`
//     color: ${lansBeige};
//     font-size: 10px;
// `;

const EntryDate = ({ currentLang, date }) => {
    const ParsedDate = date.split('-');
    const day = ParsedDate[0] || '';
    const month = parseInt(ParsedDate[1]) || '';
    // const year = ParsedDate[2] || '';

    return (
        <StyledDateContainer>
            <StyledMonth>{monthLabels[month - 1][currentLang]}</StyledMonth>
            <StyledDay>{day}</StyledDay>
            {/* <StyledYear>{year}</StyledYear> */}
        </StyledDateContainer>
    )
}

EntryDate.propTypes = {
    currentLang: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default EntryDate;