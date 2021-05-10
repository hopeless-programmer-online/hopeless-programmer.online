import React from 'react'
import List from '../classes/list'
import styles from './list.module.scss'
import SentencesComponent from './sentences'

type Props = { model : List }

export default class ListComponent extends React.Component<Props> {
    public render() {
        return (
            <ul className={styles.list}>
                {
                    this.props.model.elements.map((model, key) =>
                        <li key={key}>
                            <SentencesComponent model={model}/>
                        </li>
                    )
                }
            </ul>
        )
    }
}
