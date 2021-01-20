import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/keywords'

export default class Keywords extends React.Component {
    public render() {
        return (
            <Page title='Думки вголос. Зарезервовані слова.'>
                <Article model={model}/>
            </Page>
        )
    }
}
