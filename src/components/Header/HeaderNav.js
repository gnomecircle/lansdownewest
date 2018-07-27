import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from '../../data/siteTheming';
import { navItems } from '../../data/siteConfig';
import { StyledHeaderNav, StyledHeaderNavItem } from '../_styledComponents/Theming';
import DropdownNav from './DropdownNav';
import workshops from '../../content/workshops.content';

const { lansBeige } = palette;

const HeaderNav = ({ currentLang }) => {
    const navItem = navItems[currentLang];
    const dropdownItems = workshops[currentLang];

    return (
        <StyledHeaderNav data-component="HeaderNav">
            <ul>         
                <DropdownNav
                    currentLang={currentLang}
                    label={navItem.workshops.label}
                    url={navItem.workshops.url}
                    dropdownItems={dropdownItems}
                />
                {/* <StyledHeaderNavItem><a href={`/${currentLang}${navItem.reading.url}`}>{navItem.reading.label}</a></StyledHeaderNavItem> */}
                {/* <StyledHeaderNavItem><a href={`/${currentLang}${navItem.contact.url}`}>{navItem.contact.label}</a></StyledHeaderNavItem> */}
                {/* <StyledHeaderNavItem><a href={`/${currentLang}${navItem.about.url}`}>{navItem.about.label}</a></StyledHeaderNavItem> */}
            </ul>
        </StyledHeaderNav>
    )
};

HeaderNav.propTypes = {
    currentLang: PropTypes.string.isRequired,
}

export default HeaderNav;