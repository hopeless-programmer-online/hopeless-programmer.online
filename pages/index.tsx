import React from 'react'
import ArticleLink from '../components/article-link'
import Page from '../components/page'
import overloading from '../data/result-overloading'
import overlapping from '../data/irreversible-overlapping'
import virtualOverlapping from '../data/virtual-overlapping'
import keywords from '../data/keywords'
import segregation from '../data/segregation'
import symmetry from '../data/symmetry'
import visitor from '../data/visitor'
import linesIntersection from '../data/lines-intersection'
import connect from '../components/database'

type Props = {
    counter : number,
}

export default class Index extends React.Component<Props> {
    public render() {
        const { counter } = this.props

        return (
            <Page>
                {counter}
                <ArticleLink model={overloading} href='./articles/result-overloading'/>
                <ArticleLink model={overlapping} href='./articles/irreversible-overlapping'/>
                <ArticleLink model={keywords} href='./articles/keywords'/>
                <ArticleLink model={segregation} href='./articles/segregation'/>
                <ArticleLink model={symmetry} href='./articles/symmetry'/>
                <ArticleLink model={visitor} href='./articles/visitor'/>
                <ArticleLink model={virtualOverlapping} href='./articles/virtual-overlapping'/>
                <ArticleLink model={linesIntersection} href='./articles/lines-intersection'/>
            </Page>
        )
    }
}

export async function getServerSideProps({ req }) : Promise<{ props : Props }> {
    const { pathname } = new URL(`http://x.com${req.url}`)
    const client = await connect()

    try {
        const { rows } = await client.query(`SELECT value FROM counters WHERE id = $1;`, [ pathname ])

        // console.log(rows)

        if (rows.length !== 1) {
            await client.query(`INSERT INTO counters VALUES ($1, 1);`, [ pathname ])

            return { props : { counter : 1 } }
        }

        await client.query(`UPDATE counters SET value = value + 1 WHERE id = \$1;`, [ pathname ])

        const { value } = rows[0]

        // console.log(value)

        return {
            props : {
                counter : value + 1,
            },
        }
    }
    catch (error) {
        console.log(error)

        return { props : { counter : 0 } }
    }
}
