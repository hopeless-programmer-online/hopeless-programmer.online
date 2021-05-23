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
import linesIntersection from '../data/lines-intersection'
import { Http2ServerRequest } from 'http2'
import queryCounter from '../components/query-counter'

type Props = {
    counter : number,
}

export default class Index extends React.Component<Props> {
    public render() {
        return (
            <Page counter={this.props.counter}>
                <ArticleLink model={overloading} href='./articles/result-overloading'/>
                <ArticleLink model={overlapping} href='./articles/irreversible-overlapping'/>
                <ArticleLink model={keywords} href='./articles/keywords'/>
                <ArticleLink model={segregation} href='./articles/segregation'/>
                <ArticleLink model={symmetry} href='./articles/symmetry'/>
                <ArticleLink model={visitor} href='./articles/visitor'/>
                <ArticleLink model={virtualOverlapping} href='./articles/virtual-overlapping'/>
                <ArticleLink model={linesIntersection} href='./articles/lines-intersection'/>
            </Page>
        )
    }
}

export async function getServerSideProps({ req } : { req : Http2ServerRequest }) : Promise<{ props : Props }> {
    return { props : { counter : await queryCounter(req) } }
}
