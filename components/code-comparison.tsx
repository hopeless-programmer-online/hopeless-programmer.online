import React from 'react'
import Comparison from '../classes/code-comparison'
import CodeComponent from './code'
import styles from './code-comparison.module.scss'

type Props = { model : Comparison }

export default class CodeComparisonComponent extends React.Component<Props> {
    public render() {
        const { left, right } = this.props.model

        return (
            <article className={styles.comparison}>
                <section>
                    <CodeComponent model={left}/>
                </section>
                <section>
                    <CodeComponent model={right}/>
                </section>
            </article>
        )
    }
}
