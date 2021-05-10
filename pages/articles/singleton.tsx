import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/singleton'

export default class Singleton extends React.Component {
    public render() {
        return (
            <Page title='Що не так з одинаком? '>
                <Article model={model}/>
            </Page>
        )
    }
}
