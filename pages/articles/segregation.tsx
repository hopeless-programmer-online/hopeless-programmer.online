import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/segregation'

export default class Segregation extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
