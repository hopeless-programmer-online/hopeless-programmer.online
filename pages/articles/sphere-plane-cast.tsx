import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/sphere-plane-cast'

export default class SpherePlaneCast extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
