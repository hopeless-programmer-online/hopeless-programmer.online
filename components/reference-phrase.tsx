import React from 'react'
import ReferencePhrase from '../classes/reference-phrase'
import PhrasesComponent from './phrases'

type Props = { model : ReferencePhrase }

export default class ReferencePhraseComponent extends React.Component<Props> {
    public render() {
        const { target, title } = this.props.model

        return (
            <a href={
                // replace with deduction
                `#i-${target.id}`
            }>
                {
                    <PhrasesComponent model={title}/>
                }
            </a>
        )
    }
}
