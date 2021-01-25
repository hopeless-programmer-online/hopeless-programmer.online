import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/lambertian-reflectance'

export default class Keywords extends React.Component {
    public render() {
        return (
            <Page title='Модель освітлення Ламберта. '>
                <Article model={model}/>
            </Page>
        )
    }
}
