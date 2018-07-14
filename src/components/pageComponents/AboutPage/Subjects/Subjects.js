import React from 'react';
import SubjectsPanel from './SubjectsPanel';
import { H2 } from '../../../_styledComponents/typography';
import { subjects, subjectsI18n } from './Subjects.content';
import './Subjects.css';

const Subjects = ({ currentLang }) => {
    const l = subjectsI18n[currentLang];

    return (
        <div className="subjects">
		    <H2>{l['How.We.Teach']}</H2>
			<div className="row how-container">
				<div className="column two"><p>{l['How.We.Teach.text.part.1']}</p></div>
				<div className="column two"><p>{l['How.We.Teach.text.part.2']}</p></div>
			</div>
            <H2>{l['What.We.Teach']}</H2>
            <div className="row">
                {Object.keys(subjects).map(title => (
                    <SubjectsPanel
                        currentLang={currentLang}
                        key={title}
                        title={title} 
                        subjects={subjects[title]} 
                    />
                ))}
            </div>
		</div>
    )
}

export default Subjects;