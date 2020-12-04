import React from 'react'
import Code from '../classes/code'
import TextLexeme from '../classes/text-lexeme'
import styles from './code.module.scss'
import TextLexemeComponent from './text-lexeme'

type Props = { model : Code }

export default class CodeComponent extends React.Component<Props> {
    public render() {
        return (
            <code className={styles.code}>
                {
                    this.props.model.lines.reduce((lines, line, key) => [ ...lines,
                        <span key={`${key}-index`}>{key + 1}</span>,
                        line.array.map((lexeme, key2) =>
                            lexeme instanceof TextLexeme ? <TextLexemeComponent model={lexeme} key={`${key}-${key2}`}/> :
                            (() => { throw new Error })()
                        ),
                        <br key={`${key}-br`}/>
                    ], [])
                }
            </code>
        )
    }
}
