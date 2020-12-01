import React from 'react'
import styles from './footer.module.scss'
import Year from './year'

export default class Footer extends React.Component {
    public render() {
        const begin = new Date(`2021-01-01T00:00:00.000Z`)
        const end   = new Date(`2021-01-01T00:00:00.000Z`) // @todo replace with current time

        return (
            <footer className={styles.footer}>
                <address>
                    <a href="/">
                        hopeless-programmer.online
                    </a>
                    <br/>
                    <Year date={begin}/> - <Year date={end}/>
                    <br/>
                    за авторством <a href="mailto:me@hopeless-programmer.online">hopeless programmer</a>
                </address>
            </footer>
        )
    }
}
