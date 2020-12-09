import React from 'react'
import Code from '../classes/code'
import styles from './code.module.scss'
import LexemesComponent from './lexemes'

type Props = { model : Code }

export default class CodeComponent extends React.Component<Props> {
    public render() {
        return (
            <code className={styles.code}>
                {
                    this.props.model.lines.reduce((lines, line, key) => [ ...lines,
                        <span key={`${key}-index`}>{key + 1}</span>,
                        <span key={`${key}-content`}>
                            <LexemesComponent model={line}/>
                        </span>,
                        <br key={`${key}-br`}/>
                    ], [])
                }
            </code>
        )
    }
}
