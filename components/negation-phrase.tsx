import React from 'react'
import NegationPhrase from '../classes/negation-phrase'
import PhrasesComponent from './phrases'

type Props = { model : NegationPhrase }

export default class NegationPhraseComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <s>
                {
                    <PhrasesComponent model={model.phrases}/>
                }
            </s>
        )
    }
}
