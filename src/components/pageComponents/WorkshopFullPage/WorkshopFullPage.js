import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column, StyledSidebar } from '../../_styledComponents/Layout';
import { Blockquote } from '../../_styledComponents/Theming';
import { H2, H3, Text } from '../../_styledComponents/typography';
import { palette } from '../../../data/siteTheming';
import FaCheckSquare from 'react-icons/lib/fa/check-square';
import Banner from '../../Banner/Banner';
import WorkshopTile from '../../Workshops/WorkshopTile';
import WorkshopMeta from '../../Workshops/WorkshopMeta';
import WorkshopSchedule from '../../Workshops/WorkshopSchedule';
import bannerImg from './workshops-banner.jpg';
import workshops from '../../../content/workshops.content';
import L from '../../../content/global.content';

const { lansBeige, lansBeigeLight, lansBlue, lansGreen, white } = palette;

const StyledWorkshopMetaContainer = styled.div`
    border-top: 1px solid ${lansBlue};
    border-bottom: 1px solid ${lansBlue};
    padding: 8px 0;
`;
const StyledDetails = styled.ul`
    margin: 0 24px;

    li {
        margin: 6px 0;

        span {
            font-weight: 700;
        }
    }
`;

const WorkshopFullPage = ({ currentLang, workshop }) => {
    const l = L[currentLang];
    const {
        date,
        description,
        examDate,
        goals,
        grade,
        instructor,
        langOffered,
        price,
        schedule,
        title
    } = workshops[currentLang][workshop];

    return (
        <div data-component="workshop-fullpage">
            <Banner
                currentLang={currentLang}
                bannerImg={bannerImg}
                // bannerMessage={l['banner.message']}
            />
            <Row>
                <Column expand>
                    <H2>{title}</H2>
                    <StyledWorkshopMetaContainer>
                        <WorkshopMeta
                            currentLang={currentLang}
                            date={date}
                            grade={grade}
                            langOffered={langOffered}
                        />
                    </StyledWorkshopMetaContainer>
                    <H3>{l['description']}</H3>
                    <Text>{description}</Text>
                    <H3>{l['details']}</H3>
                    <StyledDetails>
                        <li><Text><span>{l['cost']}:</span> {price}</Text></li>
                        <li><Text><span>{l['instructor']}:</span> {instructor}</Text></li>
                        <li><Text><span>{l['exam.date']}:</span> {examDate}</Text></li>
                    </StyledDetails>
                    <H3>{l['schedule']}</H3>
                    <WorkshopSchedule
                        currentLang={currentLang}
                        schedule={schedule}
                    />
                    <Blockquote>
                        <Text center bold>{l['register.today']}</Text>
                    </Blockquote>
                </Column>
                <StyledSidebar three>
                    <H2>{l['goals']}</H2>
                    <ul>
                        {goals.map((goal, key) => (
                            <li key={key}><span><FaCheckSquare /></span><Text>{goal}</Text></li>
                        ))}
                    </ul>
                    <Blockquote>
                        <Text center uppercase bold light>{l['max.students']}</Text>
                    </Blockquote>
                </StyledSidebar>
            </Row>
        </div>
    );
}

WorkshopFullPage.propTypes = {
    currentLang: PropTypes.string.isRequired,
}

export default WorkshopFullPage;