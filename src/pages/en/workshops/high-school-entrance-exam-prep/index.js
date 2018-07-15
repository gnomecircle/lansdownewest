import React from 'react'
import WorkshopFullPage from '../../../../components/pageComponents/WorkshopFullPage/WorkshopFullPage';

const IndexPage = ({ currentLang }) => {
    return (
        <WorkshopFullPage
            currentLang={currentLang}
            workshop={'hsep'}
        />
    )
}

export default IndexPage
