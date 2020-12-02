import React from 'react'
import Head from 'next/head'
import styles from './page.module.scss'
import Header from './header'
import Footer from './footer'

export default class Page extends React.Component {
    public render() {
        return (
            <>
                <Head>
                    <title>Безнадійний Програміст</title>
                </Head>
                <article className={styles.article}>
                    <Header/>
                    <main>
                        {this.props.children}
                    </main>
                    <Footer/>
                </article>
            </>
        )
    }
}
