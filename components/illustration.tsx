import React from 'react'
import Code from '../classes/code'
import CodeComparison from '../classes/code-comparison'
import Illustration from '../classes/illustration'
import TeXPhrase from '../classes/tex-phrase'
import CodeComponent from './code'
import CodeComparisonComponent from './code-comparison'
import styles from './illustration.module.scss'
import ParagraphComponent from './paragraph'
import Sentences from './sentences'
import TeXPhraseComponent from './tex-phrase'

type Props = { model : Illustration }

export default class IllustrationComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props
        const { target } = model
        // alias to create component
        const id = `i-${model.id}`

        return (
            <span className={styles.container}>
                <span>
                    <figure id={id}>
                        {
                            target instanceof Code ? <CodeComponent model={target}/> :
                            target instanceof CodeComparison ? <CodeComparisonComponent model={target}/> :
                            target instanceof TeXPhrase ? <TeXPhraseComponent model={target} block/> :
                            target instanceof Function && target.prototype instanceof React.Component ? (() => {
                                const Target = target

                                return <Target/>
                            })() :
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
                </span>
            </span>
        )
    }
}
