import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/nonlinear-photometric-stereo'

export default class Keywords extends React.Component {
    public render() {
        return (
            <Page title='Нелінійне фотометричне стерео.'>
                <Article model={model}/>
            </Page>
        )
    }
}
