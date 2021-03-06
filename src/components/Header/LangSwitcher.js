import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { translationPaths } from '../../data/siteConfig';

const StyledLangSwitcher = styled.div`
    background: #84BB3C;
    border: none;
    color: #fff;
    font-size: 22px;            
    height: 41px;
    text-transform: uppercase;
    width: 42px;

    &:hover { 
        background: #fc6e38; 
    }
    
    a {
        color: #fff;
        display: flex;
        align-items: center;
        font-family: 'Barlow Condensed', sans-serif;                        
        justify-content: center;
        padding: 0;
        height: 98%;
        width: 100%;
    }

    &.disabled {
        background: #84BB3C;
        opacity: .5;

        a { cursor: not-allowed; }
    }

    @media (min-width: 768px) {
        height: 55px;
        width: 56px;
    }
`;

class LangSwitcher extends Component {
    constructor() {
        super();
        this.state = {
            currentPath: ''
        }
    }

    componentDidMount() {
        const currentPath = window.location.pathname;
        this.setState({ currentPath });
    }
    render() {
        const { currentLang, languageToggle } = this.props;
        const otherLang = currentLang === 'en' ? 'fr' : 'en';
        const translationAvailable = this.state.currentPath.includes('/blog') ? false : true;
        const langTogglePath = translationPaths[this.state.currentPath];

        return (
            <StyledLangSwitcher className={!translationAvailable && 'disabled'}>
                <a
                    href={translationAvailable ? langTogglePath : ''}
                    onClick={translationAvailable ? languageToggle : null}
                >
                    {otherLang}
                </a>
            </StyledLangSwitcher>
        )
    }
}

export default LangSwitcher;