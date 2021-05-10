import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/least-squares'

export default class Keywords extends React.Component {
    public render() {
        return (
            <Page title='Метод найменших квадратів.'>
                <Article model={model}/>
            </Page>
        )
    }
}
