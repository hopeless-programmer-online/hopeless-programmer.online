import React from 'react'
import CSS3Badge from './badges/css3-badge'
import HTML5Badge from './badges/html5-badge'
import NextJSBadge from './badges/nextjs-badge'
import ReactBadge from './badges/react-badge'
import SASSBadge from './badges/sass-badge'
import Year from './year'
import styles from './footer.module.scss'
import GMailBadge from './badges/gmail-badge'
import GithubBadge from './badges/github-badge'
import FacebookBadge from './badges/facebook-badge'
import TwitterBadge from './badges/twitter-badge'
import InstagramBadge from './badges/instagram-badge'
import TelegramBadge from './badges/telegram-badge'
import TypescriptBadge from './badges/typescript-badge'
import NPMBadge from './badges/npm-badge'
import NodeJSBadge from './badges/nodejs-badge'

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
                    <dt>
                        <h3>Ресурс</h3>
                    </dt>
                    <dd>
                        <nav>
                            <ul>
                                <li><a href="">Про цей сайт</a></li>
                                <li><a href="">Про автора</a></li>
                            </ul>
                        </nav>
                    </dd>
                    <dt>
                        <h3>Технології</h3>
                    </dt>
                    <dd>
                        <nav>
                            <ul>
                                <li><NextJSBadge/></li>
                                <li><NodeJSBadge/></li>
                                <li><NPMBadge/></li>
                                <li><TypescriptBadge/></li>
                                <li><ReactBadge/></li>
                                <li><HTML5Badge/></li>
                                <li><CSS3Badge/></li>
                                <li><SASSBadge/></li>
                            </ul>
                        </nav>
                    </dd>
                    <dt>
                        <h3>Контакти</h3>
                    </dt>
                    <dd>
                        <nav>
                            <ul>
                                <li><GMailBadge/></li>
                                <li><GithubBadge/></li>
                                <li><FacebookBadge/></li>
                                <li><TwitterBadge/></li>
                                <li><InstagramBadge/></li>
                                <li><TelegramBadge/></li>
                            </ul>
                        </nav>
                    </dd>
                </dl>
            </footer>
        )
    }
}
