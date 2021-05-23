import React from 'react'
import Article from '../../components/article'
import Page from '../../components/page'
import model from '../../data/visitor'
import { Http2ServerRequest } from 'http2'
import queryCounter from '../../components/query-counter'

type Props = {
    counter : number,
}

export default class Visitor extends React.Component<Props> {
    public render() {
        return (
            <Page title='Це можна покращити! Відвідувач та ECMAScript 6.' counter={this.props.counter}>
                <Article model={model}/>
            </Page>
        )
    }
}

export async function getServerSideProps({ req } : { req : Http2ServerRequest }) : Promise<{ props : Props }> {
    return { props : { counter : await queryCounter(req) } }
}
