import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaStar from 'react-icons/lib/fa/star';
import placeholderImg from './placeholder-banner.jpg';

const StyledBanner = styled.div`
    background: #8CC3EA;
    width: 100%;
`;
const StyledBannerContainer = styled.div`
    background: url(${placeholderImg}) no-repeat center;
    background-size: contain;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    padding: 5px 0 0 0;
`;
const StyledText = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-shadow: 0 0 1px #1daeeb;
`;
const StyledDate = StyledText.extend`
    text-transform: uppercase;

    svg {
        margin: -2px 5px 0;
    }
`;
const StyledMessage = StyledText.extend`
    background: rgba(61, 57, 51, .3);
    width: 100%;
    padding: 12px 0;
    text-align: center;
`;
const StyledPageTitle = styled.h1`
    color: #fff;
    margin-bottom: 10px;
`;

const Banner = ({ currentLang, bannerImg, bannerMessage, pageTitle }) => {
    const since = currentLang === 'en' ? 'since' : 'depuis';

    const StyledBannerContainerImage = StyledBannerContainer.extend`
        background: url(${bannerImg}) no-repeat center;
        background-size: contain;
    `;

    return (
        <StyledBanner data-component="Banner">
		    <StyledBannerContainerImage>
                <StyledDate><FaStar />{`${since} 1972`}<FaStar /></StyledDate>
                {(bannerMessage) && (<StyledMessage>{bannerMessage}</StyledMessage>)}
                {(pageTitle) && (<StyledPageTitle>{pageTitle}</StyledPageTitle>)}
		    </StyledBannerContainerImage>
        </StyledBanner>
    )
}

Banner.propTypes = {
    currentLang: PropTypes.string.isRequired,
    bannerImg: PropTypes.string.isRequired,
    bannerMessage: PropTypes.string,
    pageTitle: PropTypes.string,
}

export default Banner;