import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import projection from '../data/vector-projection'
import reflection from '../data/vector-reflection'
import intersection from '../data/lines-intersection'
import pointCast from '../data/sphere-point-cast'
import lineCast from '../data/sphere-line-cast'
import l0 from '../data/l0'
import cg1 from '../data/cg-1'
import cg2 from '../data/cg-2'
import cg3 from '../data/cg-3'

export default class WIP extends React.Component {
    public render() {
        return (
            <Page title='В розробці'>
                <ArticleLink model={projection} href='./articles/vector-projection'/>
                <ArticleLink model={reflection} href='./articles/vector-reflection'/>
                <ArticleLink model={intersection} href='./articles/lines-intersection'/>
                <ArticleLink model={pointCast} href='./articles/sphere-point-cast'/>
                <ArticleLink model={lineCast} href='./articles/sphere-line-cast'/>
                <ArticleLink model={l0} href='./articles/l0'/>
                <ArticleLink model={cg1} href='./articles/cg-1'/>
                <ArticleLink model={cg2} href='./articles/cg-2'/>
                <ArticleLink model={cg3} href='./articles/cg-3'/>
            </Page>
        )
    }
}
