import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { address, contactInfo, copyright, navItems, siteTitle, siteDescription, socialIcons } from '../../data/siteConfig';
import { H3, Text, StyledFooterText } from '../_styledComponents/typography';
import { Column, Row } from '../_styledComponents/Layout';
import { palette } from '../../data/siteTheming';
import Subscribe from './Subscribe/Subscribe';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaLinkedInSquare from 'react-icons/lib/fa/linkedin-square';
import logoFull from '../Header/HeaderLogo/lanswest-logo-full.png';

const { facebookBlue, twitterBlue, linkedinBlue } = palette;

const StyledFooter = styled.footer`
    background: #3D3933;

    > div {
        display: flex;
        justify-content: space-between;
        max-width: 1168px;
        margin: 0 auto;
        padding: 1.4rem 0 1.6rem;
    }
`;
const StyledH3 = H3.extend`
    background: url(${logoFull}) no-repeat 0 0;
    background-size: contain;
    height: 35px;
    text-indent: -3000px;
    width: 300px;
`;
const StyledSocialList = styled.ul`
    display: flex;
    font-size: 50px;
    margin: 1rem 0 0 -5px;

    li a { 
        margin: right: 15px;
    }

    .facebook { color: ${facebookBlue}; }
    .twitter { color: ${twitterBlue}; }
    .linkedin { color: ${linkedinBlue}; }
`;
const StyledCopyrightText = Text.extend`
    color: #F5F1E5;
    margin: 0;
`;

const Footer = ({ currentLang }) => {
    const { street, city, prov, postalCode } = address;
    const { tel } = contactInfo;
    const { facebookUrl, twitterUrl, linkedinUrl } = socialIcons;
    const title = siteTitle[currentLang];
    const description = siteDescription[currentLang];

    return (
        <StyledFooter data-component="footer">
            <Row data-component="footer-container">
                <Column two>
                    <StyledH3>{title}</StyledH3>
                    <StyledFooterText>{description}</StyledFooterText>
                    {/* <ul className="contact--links">
                        <li><a className="contact--link" href={`/${currentLang}${navItems[currentLang].about.url}`}><FaAngleRight />Learn more about Lansdowne West</a></li>
                        <li><a className="contact--link" href="#"><FaAngleRight />Read our blog</a></li>
                    </ul> */}
                    <Subscribe currentLang={currentLang} />
                    <StyledSocialList>
                        <li><a aria-label="Facebook" className="facebook" href={facebookUrl}><FaFacebookSquare /></a></li>
                        <li><a aria-label="Twitter" className="twitter" href={twitterUrl}><FaTwitterSquare /></a></li>
                        <li><a aria-label="LinkedIn" className="linkedin" href={linkedinUrl}><FaLinkedInSquare /></a></li>
                    </StyledSocialList>
                    <StyledFooterText>{street}<br />{city}, {prov}, {postalCode}</StyledFooterText>
                    <StyledFooterText>{tel}</StyledFooterText>
                </Column>
                <Column two>
                
                </Column>
            </Row>
            <StyledCopyrightText small center>{copyright[currentLang]}</StyledCopyrightText> 
        </StyledFooter>
    )
}

Footer.propTypes = {
    currentLang: PropTypes.string.isRequired,
}

export default Footer;