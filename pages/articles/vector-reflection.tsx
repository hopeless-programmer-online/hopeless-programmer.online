import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/vector-reflection'

export default class VectorReflection extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
