import 'katex/dist/katex.min.css';
import React from 'react'
import TeX from '@matejmazur/react-katex'
import Model from '../classes/tex-phrase'
import styles from './sentence.module.scss'
import styles2 from './illustration.module.scss'

type Props = { model : Model, block? : boolean }

export default class TeXPhraseComponent extends React.Component<Props> {
    public render() {
        const { model : { source }, block } = this.props

        return (
            <TeX math={source} className={`${styles.tex} ${styles2.tex}`} block={block || false}/>
        )
    }
}
