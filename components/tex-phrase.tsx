import 'katex/dist/katex.min.css';
import React from 'react'
import TeX from '@matejmazur/react-katex'
import Model from '../classes/tex-phrase'
import styles from './tex-phrase.module.scss'

type Props = { model : Model }

export default class TeXPhraseComponent extends React.Component<Props> {
    public render() {
        const { source } = this.props.model

        return (
            <TeX math={source} className={styles.tex}/>
        )
    }
}
