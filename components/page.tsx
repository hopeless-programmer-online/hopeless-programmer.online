import React from 'react'
import Head from 'next/head'
import styles from './page.module.scss'
import Header from './header'
import Footer from './footer'

export type Props = {
    title? : string,
    counter? : number | null,
}

export default class Page extends React.Component<Props> {
    public static defaultProps : Props = {
        title : '',
        counter : null,
    }

    public render() {
        const { props } = this
        const { title, counter, children } = props

        return (
            <>
                <Head>
                    <title>{ `${title ? `${title} | ` : ``}Безнадійний Програміст` }</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <style>{`
                        /* @todo: replace this with scss? */
                        html {
                            height: 100%;
                        }
                        body {
                            margin: 0;
                            height: 100%;
                        }
                        #__next {
                            height: 100%;
                        }
                    `}</style>
                </Head>
                <article className={styles.article}>
                    <Header/>
                    <main>
                        { children }
                    </main>
                    <Footer counter={counter}/>
                </article>
            </>
        )
    }
}
