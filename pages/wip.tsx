import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import projection from '../data/vector-projection'
import reflection from '../data/vector-reflection'
import intersection from '../data/lines-intersection'
import pointCast from '../data/sphere-point-cast'
import lineCast from '../data/sphere-line-cast'
import l0 from '../data/l0'

export default class WIP extends React.Component {
    public render() {
        return (
            <Page>
                <ArticleLink model={projection} href='./articles/vector-projection'/>
                <ArticleLink model={reflection} href='./articles/vector-reflection'/>
                <ArticleLink model={intersection} href='./articles/lines-intersection'/>
                <ArticleLink model={pointCast} href='./articles/sphere-point-cast'/>
                <ArticleLink model={lineCast} href='./articles/sphere-line-cast'/>
                <ArticleLink model={l0} href='./articles/l0'/>
            </Page>
        )
    }
}
