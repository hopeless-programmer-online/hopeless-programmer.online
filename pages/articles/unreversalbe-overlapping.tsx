import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/unreversalbe-overlapping'

export default class UnreversalbeOverlapping extends React.Component {
    public render() {
        return (
            <Page title='Думки вголос. Незворотне перекриття ідентифікаторів.'>
                <Article model={model}/>
            </Page>
        )
    }
}
