import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { siteTitle } from '../../../data/siteConfig';
import logoShort from './lanswest-logo-short.png';
import logoFull from './lanswest-logo-full.png';

const HeaderLogoStyled = styled.a`
    background: url(${logoShort}) 0 0 no-repeat;
    background-size: contain;
    display: block;
    height: 22px;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    top: 10px;
    width: 40px;

    h1 {
        text-indent: -3000px;
    }

    @media screen and (min-width: 768px) {
        background: url(${logoFull}) 0 0 no-repeat;
        background-size: contain;
        height: 35px;
        left: 0;
        position: relative;
        margin-left: 14px;
        width: 300px;    
    }
`;

const HeaderLogo = ({ currentLang }) => {
    const logoUrl = `/${currentLang}`;

    return (
        <HeaderLogoStyled href={logoUrl}>
            <h1>{siteTitle[currentLang]}</h1>
        </HeaderLogoStyled>
    )
}

export default HeaderLogo