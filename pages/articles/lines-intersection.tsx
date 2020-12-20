import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/lines-intersection'

export default class LinesIntersection extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
