import React from 'react'
import CSS3Badge from './css3-badge'
import styles from './footer.module.scss'
import HTML5Badge from './html5-badge'
import NextJSBadge from './nextjs-badge'
import ReactBadge from './react-badge'
import Year from './year'

export default class Footer extends React.Component {
    public render() {
        const begin = new Date('2021-01-01T00:00:00.000Z')
        const end   = new Date('2021-01-01T00:00:00.000Z') // @todo replace with current time

        return (
            <footer className={styles.footer}>
                <address>
                    <a href='/'>
                        hopeless-programmer.online
                    </a>
                    <br/>
                    <Year date={begin}/> - <Year date={end}/>
                    <br/>
                    за авторством <a href='mailto:me@hopeless-programmer.online'>hopeless programmer</a>
                </address>
                <dl>
                    <dt>Ресурс</dt>
                    <dd>
                        <nav>
                            <ul>
                                <li><a href="">Про цей сайт</a></li>
                            </ul>
                        </nav>
                    </dd>
                    <dt>Технології</dt>
                    <dd>
                        <nav>
                            <ul>
                                <li><NextJSBadge/></li>
                                <li><ReactBadge/></li>
                                <li><HTML5Badge/></li>
                                <li><CSS3Badge/></li>
                            </ul>
                        </nav>
                    </dd>
                </dl>
            </footer>
        )
    }
}
