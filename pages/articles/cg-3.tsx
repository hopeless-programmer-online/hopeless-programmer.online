import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/cg-3'

export default class CG3 extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
