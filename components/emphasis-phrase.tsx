import React from 'react'
import EmphasisPhrase from '../classes/emphasis-phrase'
import PhrasesComponent from './phrases'

type Props = { model : EmphasisPhrase }

export default class EmphasisPhraseComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <b>
                {
                    <PhrasesComponent model={model.phrases}/>
                }
            </b>
        )
    }
}
