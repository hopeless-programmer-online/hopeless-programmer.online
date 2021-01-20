import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/symmetry'

export default class Symmetry extends React.Component {
    public render() {
        return (
            <Page title='Думки вголос. Асиметрія аргументів та результатів функції.'>
                <Article model={model}/>
            </Page>
        )
    }
}
