import React from 'react'
import LinkPhrase from '../classes/link-phrase'
import Phrases from '../classes/phrases'
import TextPhrase from '../classes/text-phrase'
import LinkPhraseComponent from './link-phrase'
import TextPhraseComponent from './text-phrase'

type Props = { model : Phrases }

export default class PhrasesComponent extends React.Component<Props> {
    public render() {
        return (
            this.props.model.array.map((phrase, key) =>
                phrase instanceof TextPhrase ? <TextPhraseComponent model={phrase} key={key}/> :
                phrase instanceof LinkPhrase ? <LinkPhraseComponent model={phrase} key={key}/> :
                (() => { throw new Error })()
            )
        )
    }
}
