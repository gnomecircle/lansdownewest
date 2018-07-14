import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { siteTitle } from '../data/siteConfig';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './css/index.css';

class TemplateWrapper extends Component {
    constructor() {
        super();
        this.state = { currentLang: 'fr' };
        this.languageToggle = this.languageToggle.bind(this);
    }

    languageToggle = () => {
        const currentLang = this.state.currentLang;
        this.setState({ 
            currentLang: currentLang === 'en' ? 'fr' : 'en'
        });
    }

    render() {
        const { currentLang } = this.state;

        return (
            <div>
                <Helmet
                    title={siteTitle[currentLang]}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />
                <Header currentLang={currentLang} languageToggle={this.languageToggle} />
                <div className="content">
                    {this.props.children({
                        ...this.props,
                        currentLang: currentLang,
                        languageToggle: this.languageToggle
                    })}
                </div>
                <Footer currentLang={currentLang} />
            </div>
        )
    }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
