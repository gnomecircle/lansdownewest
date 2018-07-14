import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav';
import LangSwitcher from './LangSwitcher';

const StyledHeader = styled.header`
    background: #3D3933;
    border-bottom: 1px solid #fff;
    height: 42px;

    > div {
        display: flex;
        justify-content: space-between;
        max-width: 1168px;
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
        height: 56px;
    }
`;

const Header = ({ currentLang, languageToggle }) => (
    <StyledHeader data-component="Header">
        <div>
            <HeaderLogo currentLang={currentLang} />
            {/* TODO Add tel number here */}
            <HeaderNav currentLang={currentLang} />
            <LangSwitcher
                currentLang={currentLang}
                languageToggle={languageToggle}
            />
        </div>
    </StyledHeader>
)

Header.propTypes = {
    currentLang: PropTypes.string.isRequired,
    languageToggle: PropTypes.func.isRequired,
}

export default Header;