import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/cg-1'

export default class ComputerGraphics1 extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
