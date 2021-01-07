import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/l0'

export default class L0 extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
