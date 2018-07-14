import styled from 'styled-components';
import { bodyWidth, palette, fontSize, lineHeight, margins } from '../../data/siteTheming';
const { white, lansBeige, lansBlue, lansBlueLight, lansGreen } = palette;

const StyledHeaderNav = styled.nav`
    height: 42px;
    margin-left: auto;

    > ul {
        display: flex;
        font-size: 18px;
        height: 42px;
    }

    @media (min-width: 768px) {
        height: 56px;
        ul { height: 56px; }
    }
`;
const StyledHeaderNavItem = styled.li`
    border-left: 1px solid #59534b;
    height: 41px;

    a {
        color: #fff;
        display: flex;
        font-family: 'Barlow Condensed', sans-serif;                            
        justify-content: center;
        align-items: center;
        height: 41px;
        padding: 0 16px;
        text-shadow: 1px 1px rgba(0, 0, 0, .7);
        width: 100%;

        &.active {
            background: ${lansBeige};
        }

        &:hover,
        &.active:hover {
            background-color: #fc6e38;                
        }
    }

    @media (min-width: 768px) {
        height: 55px;
        a { height: 55px; }
    }
`;
const Blockquote = styled.blockquote`
    border: 2px dashed ${lansGreen};
    margin: 12px;
    padding: 24px 18px;
`;

// FORMS
// --------------------------------------
const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    .formrow {
        display: flex;
        
        > div {
            flex: 1;
            &:first-child { margin-right: 1rem; }
        }
    }
`;
const Input = styled.input`
    // border: 1px solid ${lansGreen};
    height: 28px;
    font-size: 16px;
    margin: 4px 0 0;
    padding: 5px 12px;
`;
const TextArea = styled.textarea`
    // border: 1px solid ${lansGreen};
    height: 240px;
    font-size: 16px;
    margin: 4px 0 0;
    padding: 5px 12px;
`;
const Label = styled.label`
    font-size: 14px;
    margin-left: 1px;
`;
const Button = styled.button`
    background: ${lansBlue};
    border: none;
    color: ${white};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    margin-left: ${props => props.right ? 'auto' : '2px'};
    margin-right: ${props => props.left && 'auto'};
    padding: 6px 12px;
    text-transform: uppercase;
    transition: ease all 250ms;

    &:hover {
        background: ${lansBlueLight};
        // color: ${lansGreen};
    }

    ${props => props.small && (`
        font-size: 1.2rem;
        padding: 7px 10px;
    `)}

    ${props => props.big && (`
        font-size: 1.8rem;
        padding: 10px 18px;
    `)}

    ${props => props.light && (`
        // background: ${colors.greenLight};
        // color: ${colors.greenDark};

        &:hover {
            // background: ${lansGreen};
            // color: ${white};
        }
    `)}

    ${props => props.med && (`
        // background: ${colors.greenMed};
        // color: ${colors.greenDark};

        // &:hover {
        //     background: ${colors.greenDark};
        //     color: ${colors.white};
        // }
    `)}
`;

export {
    Blockquote,
    Button,
    Form,
    FormField,
    Input,
    Label,
    StyledHeaderNav,
    StyledHeaderNavItem,
    TextArea
};