import React from 'react'
import Article from '../components/article'
import Page from '../components/page'
import test from '../data/test'

export default class Index extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={test}/>
            </Page>
        )
    }
}
