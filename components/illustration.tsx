import React from 'react'
import Illustration from '../classes/illustration'
import styles from './illustration.module.scss'
import ParagraphComponent from './paragraph'
import Sentences from './sentences'

type Props = { model : Illustration }

export default class IllustrationComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <figure className={styles.illustration}>
                <figcaption>
                    <h4>
                        {
                            <Sentences model={model.title}/>
                        }
                    </h4>
                </figcaption>
                {
                    <ParagraphComponent model={model.description}/>
                }
            </figure>
        )
    }
}
