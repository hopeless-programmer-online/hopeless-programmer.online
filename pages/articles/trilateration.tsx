import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/trilateration'

export default class Keywords extends React.Component {
    public render() {
        return (
            <Page title='Знаходження точки за набором відстаней до неї. Трилатерація. '>
                <Article model={model}/>
            </Page>
        )
    }
}
