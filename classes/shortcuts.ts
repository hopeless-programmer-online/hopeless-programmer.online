import Article from "./article";
import Code from "./code";
import { CodeLanguage } from "./code-language";
import FigurativePhrase from "./figurative-phrase";
import Illustration from "./illustration";
import Lexemes from "./lexemes";
import LinkPhrase, { Href } from "./link-phrase";
import List from "./list";
import NegationPhrase from "./negation-phrase";
import NotePhrase from "./note-phrase";
import Paragraph from "./paragraph";
import Phrase from "./phrase";
import Phrases from "./phrases";
import ReferencePhrase, { Target as ReferenceTarget } from "./reference-phrase";
import Section, { SectionPart, SectionParts } from "./section";
import Sentence from "./sentence";
import Sentences from "./sentences";
import TextLexeme from "./text-lexeme";
import TextPhrase from "./text-phrase";

type strings = Array<string>

function error<T>(message : string = '') : T {
    throw new Error(message)
}

export type PhraseLike = Phrase | string
export function toPhrase(something : PhraseLike) : Phrase {
    return (
        something instanceof Phrase   ? something                            :
        typeof something === 'string' ? new TextPhrase({ text : something }) :
        error<Phrase>(`Can't convert ${typeof something} ${something} to phrase.`)
    )
}
export type PhrasesLike = PhraseLike | Array<PhraseLike>
export function toPhrases(somethings : PhrasesLike) : Phrases {
    const array = (
        Array.isArray(somethings)
            ? somethings
            : [ somethings ]
    ).map(toPhrase)

    return new Phrases({ array })
}

export type SentenceLike = Sentence | PhraseLike
export function toSentence(something : SentenceLike) : Sentence {
    return something instanceof Sentence
        ? something
        : sentence(something)
}
export type SentencesLike = SentenceLike | Array<SentenceLike>
export function toSentences(something : SentencesLike) : Sentences {
    const array = (
        Array.isArray(something)
            ? something
            : [ something ]
    ).map(toSentence)

    return new Sentences({ array })
}
export function sentence(...somethings : Array<PhraseLike>) : Sentence {
    const phrases = toPhrases(somethings)

    return new Sentence({ phrases })
}
export const sen = sentence

export type ParagraphLike = Paragraph | SentenceLike
export function toParagraph(something : ParagraphLike) : Paragraph {
    return something instanceof Paragraph
        ? something
        : paragraph(something)
}
export function paragraph(...somethings : Array<SentenceLike>) : Paragraph {
    const sentences = toSentences(somethings)

    return new Paragraph({ sentences })
}
export const p = paragraph

export function code(language : CodeLanguage, ...somethings : strings) {
    const lines = somethings.map(text => new Lexemes({ array : [ new TextLexeme({ text }) ] }))

    return new Code({ language, lines })
}

export function illustration(description : string, target : Code) {
    return new Illustration({
        description : p(description),
        target,
    })
}

export function note(sentencesLike : SentencesLike, ) : NotePhrase {
    const sentences = toSentences(sentencesLike)

    return new NotePhrase({ sentences })
}

export function link(somethings : PhrasesLike, href : Href) {
    const phrases = toPhrases(somethings)

    return new LinkPhrase({ href, phrases })
}

export type SectionPartLike = Illustration | List | ParagraphLike
export function toSectionPart(something : SectionPartLike) : SectionPart {
    return (
        something instanceof Illustration ? something :
        something instanceof List         ? something :
        toParagraph(something)
    )
}
export type SectionPartsLike = SectionPartLike | Array<SectionPartLike>
export function toSectionParts(somethings : SectionPartsLike) : SectionParts {
    return (
        Array.isArray(somethings)
            ? somethings
            : [ somethings ]
    ).map(toSectionPart)
}

export function section(titleLike : SentencesLike, ...something : Array<SectionPartLike>) : Section {
    const title = toSentences(titleLike)
    const parts = toSectionParts(something)

    return new Section({ title, parts })
}

export function article(titleLike : SentenceLike, ...sections : Array<Section>) {
    const title = toSentences(titleLike)

    return new Article({
        title,
        sections,
    })
}

export function list(...somethings : Array<SentencesLike>) : List {
    const elements = somethings.map(toSentences)

    return new List({ elements })
}

export function fig(...somethings : Array<PhraseLike>) {
    const phrases = toPhrases(somethings)

    return new FigurativePhrase({ phrases })
}

export function neg(...somethings : Array<PhraseLike>) {
    const phrases = toPhrases(somethings)

    return new NegationPhrase({ phrases })
}

export function ref(target : ReferenceTarget) {
    return new ReferencePhrase({ target })
}
