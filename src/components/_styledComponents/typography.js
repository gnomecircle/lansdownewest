import styled from 'styled-components';
import { bodyWidth, palette, fontSize, lineHeight, margin } from '../../data/siteTheming';

// Note:
// base fonts size is set in the css-reset.css file (10px)

const { lansDarkBrown, lansBeigeLight } = palette;

const defaultHeadingStyle = `
    color: ${lansDarkBrown};
    font-weight: 700;
    text-transform: uppercase;
`;
const H1 = styled.h1`
    ${defaultHeadingStyle}
    font-size: ${fontSize.h1};
    line-height: ${lineHeight.h1};
    margin-top: ${fontSize.h1};
    margin-bottom: ${fontSize.h1};
`;
const H2 = styled.h2`
    ${defaultHeadingStyle}
    font-size: ${fontSize.h2};
    // line-height: ${lineHeight.h2};
    margin: ${fontSize.h2} auto 0;
    text-align: ${props => props.center && 'center'};
`;
const H3 = styled.h3`
    ${defaultHeadingStyle}
    font-size: ${fontSize.h3};
    margin: calc(${fontSize.h3 }* 2.5) 0 ${fontSize.h3};
`;
const H4 = styled.h4`
    ${defaultHeadingStyle}
    font-size: ${fontSize.h4};
    margin: ${fontSize.h4} 0;
`;
const H5 = styled.h5`
    ${defaultHeadingStyle}
    font-size: ${fontSize.h5};
`;
const H6 = styled.h6`
    ${defaultHeadingStyle}
    font-size: ${fontSize.h6};
`;
const Text = styled.p`
    color: ${props => props.light ? lansBeigeLight : lansDarkBrown};
    font-size: ${props => props.small ? '1rem' : fontSize.p};
    font-weight: ${props => props.bold ? '700' : '300'};
    line-height: ${lineHeight.p};
    margin: ${margin.p};
    text-align: ${props => props.center && 'center'};
    text-align: ${props => props.justify && 'justify'};
    text-transform: ${props => props.uppercase && 'uppercase'};
`;
const SubHeading = Text.extend`
    text-align: center;
    text-transform: uppercase;
`;
const StyledFooterText = Text.extend`
    color: ${lansBeigeLight};
    font-size: 1.7rem;
    font-weight: 200;
    margin: .8rem 0 .8rem 3px;
    text-shadow: none;
`;

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Text,
    SubHeading,
    StyledFooterText
};