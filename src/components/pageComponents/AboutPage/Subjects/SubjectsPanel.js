import React from 'react';
import { subjectsI18n } from './Subjects.content';

const SubjectsPanel = ({ currentLang, title, subjects }) => {
    const l = subjectsI18n[currentLang];

    return (
		<div className="column four subjects__panel">
            <h3 className="subjects__panel--heading">{l[title]}</h3>
            <ul>
                {
                    subjects.map(item => {
                        return <li key={item} className="subjects__panel--item">{l[item]}</li>
                    })
                }
            </ul>
		</div>
    );
}

export default SubjectsPanel;