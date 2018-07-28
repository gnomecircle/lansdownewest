import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { H2, H3, Text } from '../_styledComponents/typography';
import { Button } from '../_styledComponents/Theming';
import { palette } from '../../data/siteTheming';
import WorskhopMeta from './WorkshopMeta';
import WorkshopSchedule from './WorkshopSchedule';
import L from '../../content/global.content';

const subTitles = {
    'en': {
        description: 'Description',
        schedule: 'Schedule',
    },
    'fr': {
        description: 'Description',
        schedule: 'Horaire',
    }
}

const StyledWorkshopTile = styled.div`
    border: 1px solid ${palette.lansLightBrown};
    padding: 8px 15px 18px!important;
    position: relative;
    overflow: hidden;
    &:nth-child(2n) {
        background: ${palette.lansLightBrown};
    }

    @media screen and (min-width: 600px) {
        &:nth-child(2n) { background: none; }
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(7) {
            background: ${palette.lansLightBrown};
        }
    }
`;
const StyledH2 = H2.extend`
    font-size: 2rem;
`;
const StyledH3 = H3.extend`
    margin-top: 2rem;
`;
const StyledText = Text.extend`
    line-height: 1.9rem;
    font-size: 1.4rem;
`;
const StyledDescription = styled.div`
    min-height: 100px;
`;
const StyledButton = Button.extend`
    margin-top: 10px;
    margin-bottom: -8px;
`;
const StyledBanner = styled.div`
    background: ${palette.lansOrange};
    padding: 16px;
    position: absolute;
    top: 25px;
    right: -50px;
    left: auto;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    transform: rotate(45deg);
    width: 200px;

    p { margin: 0; }
`;

const WorkshopTile = ({ currentLang, workshop }) => {
    const l = L[currentLang];
    const {
        current,
        date,
        title,
        infoLink,
        langOffered,
        grade,
        schedule
    } = workshop;

    return (
        <StyledWorkshopTile className="column two">
            {!current && <StyledBanner><Text light uppercase bold>{currentLang === 'en' ? 'Finished!' : 'Terminé!'}</Text></StyledBanner>}
            <WorskhopMeta
                currentLang={currentLang}
                date={date}
                grade={grade}
                langOffered={langOffered}
            />
            <StyledH2>{title}</StyledH2>
            <StyledH3>{subTitles[currentLang].schedule}</StyledH3> 
            <ul>
                <WorkshopSchedule
                    currentLang={currentLang}
                    schedule={schedule}
                />
            </ul>
            <Link to={`${infoLink}`}><StyledButton small right>{l['more.info']}</StyledButton></Link>
        </StyledWorkshopTile>
    )

};

WorkshopTile.propTypes = {
    currentLang: PropTypes.string.isRequired,
    workshop: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        goals: PropTypes.arrayOf(PropTypes.string),
        instructor: PropTypes.string,
        langOffered: PropTypes.arrayOf(PropTypes.string).isRequired,
        grade: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        schedule: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default WorkshopTile;