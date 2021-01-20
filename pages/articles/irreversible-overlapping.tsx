import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/irreversible-overlapping'

export default class IrreversibleOverlapping extends React.Component {
    public render() {
        return (
            <Page title='Думки вголос. Незворотне перекриття ідентифікаторів.'>
                <Article model={model}/>
            </Page>
        )
    }
}
