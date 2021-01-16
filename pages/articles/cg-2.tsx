import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/cg-2'

export default class CG2 extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
