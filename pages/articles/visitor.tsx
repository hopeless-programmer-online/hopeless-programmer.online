import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/visitor'

export default class Visitor extends React.Component {
    public render() {
        return (
            <Page title='Це можна покращити! Відвідувач та ECMAScript 6.'>
                <Article model={model}/>
            </Page>
        )
    }
}
