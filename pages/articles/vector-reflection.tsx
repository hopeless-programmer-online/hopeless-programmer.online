import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/vector-reflection'
import { Http2ServerRequest } from 'http2'
import queryCounter from '../../components/query-counter'

type Props = {
    counter : number,
}

export default class VectorReflection extends React.Component<Props> {
    public render() {
        return (
            <Page counter={this.props.counter}>
                <Article model={model}/>
            </Page>
        )
    }
}

export async function getServerSideProps({ req } : { req : Http2ServerRequest }) : Promise<{ props : Props }> {
    return { props : { counter : await queryCounter(req) } }
}
