import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FaBullHorn from 'react-icons/lib/fa/bullhorn';
import { Row } from '../../_styledComponents/Layout';
import { Blockquote } from '../../_styledComponents/Theming';
import { Text } from '../../_styledComponents/typography';
import { palette } from '../../../data/siteTheming';
const { lansBlue } = palette;

const StyledIcon = Text.extend`
    color: ${lansBlue};
    font-size: 44px;
    margin: 0 28px;
    transform: rotate(-20deg);
    transform: ${props => props.right && 'scale(-1,1) rotate(-20deg)'};
`;

const HomepageMessage = ({ message }) => {

    return (
        <Row>
            <Blockquote>
                <StyledIcon><FaBullHorn /></StyledIcon>
                <Text>{message}</Text>
                <StyledIcon right><FaBullHorn /></StyledIcon>
            </Blockquote>
        </Row>
    )

}

export default HomepageMessage;