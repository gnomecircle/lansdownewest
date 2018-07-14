import React from 'react'
import WorkshopFullPage from '../../../../components/pageComponents/WorkshopFullPage/WorkshopFullPage';

const IndexPage = ({ currentLang }) => {
    return (
        <WorkshopFullPage
            currentLang={currentLang}
            workshop={'science'}
        />
    )
}

export default IndexPage
