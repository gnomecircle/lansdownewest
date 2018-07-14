import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledHeaderNavItem } from '../_styledComponents/Theming';
import { palette } from '../../data/siteTheming';

const { lansBeige } = palette;
const StyledDropdownContainer = StyledHeaderNavItem.extend`
    position: relative;

    &:hover {
        background: ${lansBeige};

        .dropdown {
            display: flex;
        }
    }
`;
const StyledDropdown = styled.ul`
    display: none;
    flex-direction: column;
    position: absolute;
    right: 0;
    width: 220px;

    li {
        background: ${lansBeige};
        border: none;

        a {
            justify-content: left;
        }

    }
`;

class DropdownNav extends Component {

    render() {
        const { currentLang, label, url, dropdownItems } = this.props;

        return (
            <StyledDropdownContainer>
                <a href={`/${currentLang}${url}`}>{label}</a>
                <StyledDropdown className={'dropdown'}>
                    {Object.keys(dropdownItems).map((item, key) => {
                        const { current, title, infoLink } = dropdownItems[item];
                        if (current) {
                            return <StyledHeaderNavItem key={key}><a href={infoLink}>{title}</a></StyledHeaderNavItem>;
                        }
                    })}
                </StyledDropdown>
            </StyledDropdownContainer>
        )
    }
}

export default DropdownNav;