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
        const langTogglePath = translationPaths[this.state.currentPath] || '/fr';
        
        return (
            <StyledLangSwitcher>
                <Link
                    to={langTogglePath}
                    className="lang-switcher--link"
                    onClick={languageToggle}
                >
                    {otherLang}
                </Link>
            </StyledLangSwitcher>
        )
    }
}

export default LangSwitcher;