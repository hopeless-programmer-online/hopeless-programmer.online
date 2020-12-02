import React from 'react'
import Article from '../components/article'
import Page from '../components/page'

export default class Index extends React.Component {
    public render() {
        return (
            <Page>
                <Article/>
            </Page>
        )
    }
}
