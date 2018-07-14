import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from '../../data/siteTheming';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaClockO from 'react-icons/lib/fa/clock-o';
import L from '../../content/global.content';

const { lansLightBrown, lansBlue, lansGreen, lansOrange, white } = palette;

const StyledItem = styled.li`
    border-bottom: 1px solid ${lansGreen};
    display: flex;
    font-size: 1.6rem;
    justify-content: space-between;
    padding: 8px 0;

    svg { margin: -3px 4px 0 0; }
`;
const StyledDate = styled.span`
    width: 60%;
`;
const StyledTime = styled.span`
    text-align: right;
    width: 40%;
`;
const StyledBadge = styled.span`
    border-radius: 3px;
    padding: 3px 8px 5px;
    margin-left: 6px;
    color: ${white};
    background: ${lansOrange};

    ${props => props.open === true && (`
        background: ${lansGreen};
    `)}
`;

const WorskhopSchedule = ({ currentLang, schedule }) => {
    const l = L[currentLang];

    return (
        <div>
            {schedule.map((item, key) => {
                const { date, time, open } = item;
                return (
                    <StyledItem key={key}>
                        <StyledDate><FaCalendar />{date}</StyledDate>
                        <StyledTime>
                            <FaClockO />{time}
                            <StyledBadge open={open}>{open ? l['open'] : l['full']}</StyledBadge>
                        </StyledTime>
                    </StyledItem>
                )}
            )}
        </div>
    )
}

export default WorskhopSchedule;