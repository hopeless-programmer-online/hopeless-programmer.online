import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/sphere-line-cast'

export default class SphereLineCast extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
