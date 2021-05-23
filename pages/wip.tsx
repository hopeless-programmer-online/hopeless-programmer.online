import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import projection from '../data/vector-projection'
import reflection from '../data/vector-reflection'
import linePlane from '../data/line-plane-cast'
import pointCast from '../data/sphere-point-cast'
import lineCast from '../data/sphere-line-cast'
import planeCast from '../data/sphere-plane-cast'
import l0 from '../data/l0'
import cg1 from '../data/cg-1'
import cg2 from '../data/cg-2'
import cg3 from '../data/cg-3'
import stereo from '../data/photometric-stereo'
import lambert from '../data/lambertian-reflectance'
import trilateration from '../data/trilateration'
import leastSquares from '../data/least-squares'
import nonlinearStereo from '../data/nonlinear-photometric-stereo'
import singleton from '../data/singleton'
import cosineLaw from '../data/cosine-law'
import { Http2ServerRequest } from 'http2'
import queryCounter from '../components/query-counter'

type Props = {
    counter : number,
}

export default class WIP extends React.Component<Props> {
    public render() {
        return (
            <Page title='В розробці' counter={this.props.counter}>
                <ArticleLink model={projection} href='./articles/vector-projection'/>
                <ArticleLink model={reflection} href='./articles/vector-reflection'/>
                <ArticleLink model={linePlane} href='./articles/line-plane-cast'/>
                <ArticleLink model={pointCast} href='./articles/sphere-point-cast'/>
                <ArticleLink model={lineCast} href='./articles/sphere-line-cast'/>
                <ArticleLink model={planeCast} href='./articles/sphere-plane-cast'/>
                <ArticleLink model={l0} href='./articles/l0'/>
                <ArticleLink model={cg1} href='./articles/cg-1'/>
                <ArticleLink model={cg2} href='./articles/cg-2'/>
                <ArticleLink model={cg3} href='./articles/cg-3'/>
                <ArticleLink model={stereo} href='./articles/photometric-stereo'/>
                <ArticleLink model={lambert} href='./articles/lambertian-reflectance'/>
                <ArticleLink model={trilateration} href='./articles/trilateration'/>
                <ArticleLink model={leastSquares} href='./articles/least-squares'/>
                <ArticleLink model={nonlinearStereo} href='./articles/nonlinear-photometric-stereo'/>
                <ArticleLink model={singleton} href='./articles/singleton'/>
                <ArticleLink model={cosineLaw} href='./articles/cosine-law'/>
            </Page>
        )
    }
}

export async function getServerSideProps({ req } : { req : Http2ServerRequest }) : Promise<{ props : Props }> {
    return { props : { counter : await queryCounter(req) } }
}
