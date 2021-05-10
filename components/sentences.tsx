import React from 'react'
import Sentences from '../classes/sentences'
import SentenceComponent from './sentence'

type Props = { model : Sentences }

export default class SentencesComponent extends React.Component<Props> {
    public render() {
        return (
            <>
                {
                    this.props.model.array.map((sentence, key) =>
                        <SentenceComponent model={sentence} key={key}/>
                    )
                }
            </>
        )
    }
}
