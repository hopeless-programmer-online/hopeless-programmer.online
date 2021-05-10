import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/cosine-law'

export default class CosineLaw extends React.Component {
    public render() {
        return (
            <Page title='Закон косинуса Ламберта.'>
                <Article model={model}/>
            </Page>
        )
    }
}
