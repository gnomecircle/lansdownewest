import React from 'react';
import ReadingPage from '../../../../components/pageComponents/ReadingListPage/ReadingListPage';

const IndexPage = ({ currentLang }) => {
    return (
        <ReadingPage
            currentLang={currentLang}
            list={'gradeFiveAndSix'}
        />

    )
}
export default IndexPage;