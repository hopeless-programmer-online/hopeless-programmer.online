import React from 'react'
import CodePhrase from '../classes/code-phrase'
import EmphasisPhrase from '../classes/emphasis-phrase'
import FigurativePhrase from '../classes/figurative-phrase'
import LinkPhrase from '../classes/link-phrase'
import NegationPhrase from '../classes/negation-phrase'
import NotePhrase from '../classes/note-phrase'
import Phrases from '../classes/phrases'
import ReferencePhrase from '../classes/reference-phrase'
import TextPhrase from '../classes/text-phrase'
import CodePhraseComponent from './code-phrase'
import EmphasisPhraseComponent from './emphasis-phrase'
import FigurativePhraseComponent from './figurative-phrase'
import LinkPhraseComponent from './link-phrase'
import NegationPhraseComponent from './negation-phrase'
import NotePhraseComponent from './note-phrase'
import ReferencePhraseComponent from './reference-phrase'
import TextPhraseComponent from './text-phrase'
import TeXPhrase from '../classes/tex-phrase'
import TeXPhraseComponent from './tex-phrase'

type Props = { model : Phrases }

export default class PhrasesComponent extends React.Component<Props> {
    public render() {
        return (
            this.props.model.array.map((phrase, key) =>
                phrase instanceof TextPhrase       ? <TextPhraseComponent       model={phrase} key={key}/> :
                phrase instanceof LinkPhrase       ? <LinkPhraseComponent       model={phrase} key={key}/> :
                phrase instanceof NotePhrase       ? <NotePhraseComponent       model={phrase} key={key}/> :
                phrase instanceof ReferencePhrase  ? <ReferencePhraseComponent  model={phrase} key={key}/> :
                phrase instanceof FigurativePhrase ? <FigurativePhraseComponent model={phrase} key={key}/> :
                phrase instanceof EmphasisPhrase   ? <EmphasisPhraseComponent   model={phrase} key={key}/> :
                phrase instanceof NegationPhrase   ? <NegationPhraseComponent   model={phrase} key={key}/> :
                phrase instanceof CodePhrase       ? <CodePhraseComponent       model={phrase} key={key}/> :
                phrase instanceof TeXPhrase        ? <TeXPhraseComponent        model={phrase} key={key}/> :
                (() => { throw new Error })()
            )
        )
    }
}
