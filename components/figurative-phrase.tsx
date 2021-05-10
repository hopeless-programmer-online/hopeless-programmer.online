import React from 'react'
import FigurativePhrase from '../classes/figurative-phrase'
import PhrasesComponent from './phrases'

type Props = { model : FigurativePhrase }

export default class FigurativePhraseComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <i>
                {
                    <PhrasesComponent model={model.phrases}/>
                }
            </i>
        )
    }
}
