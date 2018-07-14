import React from 'react';
import styled from 'styled-components';
import subscribeI18n from './Subscribe.content';
import { StyledFooterText } from '../../_styledComponents/typography';

import './Subscribe.css';

const StyledMailChimpFormContainer = styled.div`
    border-top: 1px solid #59534b;

`;

const Subscribe = ({ currentLang }) => {
    const l = subscribeI18n[currentLang];
    const mailchimpBotDivStyle = {
		position: 'absolute',
		left: '-5000px',
    }
    
    return (
		<StyledMailChimpFormContainer id="mc_embed_signup">
			<form
				action="//lansdownewest.us4.list-manage.com/subscribe/post?u=e5cd67fdaf7fc9bbf6d6ad923&amp;id=f209e7c8ec"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="validate"
				target="_blank"
				noValidate
			>
				<div id="mc_embed_signup_scroll">
                    <StyledFooterText>{l['Join.text']}</StyledFooterText>
                    <StyledFooterText>{l['Learn.text']}</StyledFooterText>
					<div className="mc-field-group">
						<input
							type="email"
							value=""
							name="EMAIL"
							className="email"
							id="mce-EMAIL"
							placeholder={l['email']}
							required
						/>
						<div style={mailchimpBotDivStyle}>
                            <input
                                type="text"
                                name="b_e5cd67fdaf7fc9bbf6d6ad923_f209e7c8ec"
                                tabIndex="-1"
                                value=""
                            />
                        </div>
						<input
							type="submit"
							value={l['Subscribe']}
							name="subscribe"
							id="mc-embedded-subscribe"
							className="button"
						/>
					</div>
				</div>
			</form>
		</StyledMailChimpFormContainer>
    )
}

export default Subscribe;