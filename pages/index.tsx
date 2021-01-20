import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import overloading from '../data/result-overloading'
import overlapping from '../data/irreversible-overlapping'
import virtualOverlapping from '../data/virtual-overlapping'
import keywords from '../data/keywords'
import segregation from '../data/segregation'
import symmetry from '../data/symmetry'
import visitor from '../data/visitor'

export default class Index extends React.Component {
    public render() {
        return (
            <Page>
                <ArticleLink model={overloading} href='./articles/result-overloading'/>
                <ArticleLink model={overlapping} href='./articles/irreversible-overlapping'/>
                <ArticleLink model={keywords} href='./articles/keywords'/>
                <ArticleLink model={segregation} href='./articles/segregation'/>
                <ArticleLink model={symmetry} href='./articles/symmetry'/>
                <ArticleLink model={visitor} href='./articles/visitor'/>
                <ArticleLink model={virtualOverlapping} href='./articles/virtual-overlapping'/>
            </Page>
        )
    }
}
