import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import overlapping from '../data/unreversalbe-overlapping'
import overloading from '../data/result-overloading'

export default class Index extends React.Component {
    public render() {
        return (
            <Page>
                <ArticleLink model={overloading}/>
                <ArticleLink model={overlapping}/>
            </Page>
        )
    }
}
