import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import overloading from '../data/result-overloading'
import overlapping from '../data/unreversalbe-overlapping'
import keywords from '../data/keywords'
import segregation from '../data/segregation'
import symmetry from '../data/symmetry'

export default class Index extends React.Component {
    public render() {
        return (
            <Page>
                <ArticleLink model={overloading} href='./articles/result-overloading'/>
                <ArticleLink model={overlapping} href='./articles/unreversalbe-overlapping'/>
                <ArticleLink model={keywords} href='./articles/keywords'/>
                <ArticleLink model={segregation} href='./articles/segregation'/>
                <ArticleLink model={symmetry} href='./articles/symmetry'/>
            </Page>
        )
    }
}
