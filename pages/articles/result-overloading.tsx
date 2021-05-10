import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/result-overloading'

export default class ResultOverloading extends React.Component {
    public render() {
        return (
            <Page title='Думки вголос. Перевантаження за результатом.'>
                <Article model={model}/>
            </Page>
        )
    }
}
