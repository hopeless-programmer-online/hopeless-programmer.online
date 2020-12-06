import React from 'react'
import Code from '../classes/code'
import Illustration from '../classes/illustration'
import CodeComponent from './code'
import styles from './illustration.module.scss'
import ParagraphComponent from './paragraph'
import Sentences from './sentences'

type Props = { model : Illustration }

export default class IllustrationComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props
        const { target } = model
        const id = `i-${model.id}`

        return (
            <figure id={id} className={styles.illustration}>
                {
                    target instanceof Code ? <CodeComponent model={target}/> :
                    (() => { throw new Error })()
                }
                <figcaption>
                    <h4>
                        <a href={`#${id}`}>§</a>
                        {
                            <Sentences model={model.title}/>
                        }
                    </h4>
                    {
                        <ParagraphComponent model={model.description}/>
                    }
                </figcaption>
            </figure>
        )
    }
}
