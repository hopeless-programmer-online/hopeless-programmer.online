import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/symmetry'

export default class Symmetry extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
