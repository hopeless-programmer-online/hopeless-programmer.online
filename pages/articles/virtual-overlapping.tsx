import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/virtual-overlapping'

export default class VirtualOverlapping extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
