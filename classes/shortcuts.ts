import Article from "./article";
import Code from "./code";
import { CodeLanguage } from "./code-language";
import CodePhrase from "./code-phrase";
import CommentLexeme from "./comment-lexeme";
import EmphasisPhrase from "./emphasis-phrase";
import FigurativePhrase from "./figurative-phrase";
import IdentifierLexeme from "./identifier-lexeme";
import Illustration, { Target as IllustrationTarget } from "./illustration";
import KeywordLexeme from "./keyword-lexeme";
import Lexeme from "./lexeme";
import Lexemes from "./lexemes";
import LinkPhrase, { Href } from "./link-phrase";
import List from "./list";
import LiteralLexeme, { Type as LiteralType } from "./literal-lexeme";
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
import TeXPhrase from "./tex-phrase";
import { ComponentType } from "react";
import ReactPhrase from "./react-phrase";
import Person from "./person";
import Quote from "./quote";
import ArticleDetails from "./article-details";
import persons from "../data/persons";

function error<T>(message : string = '') : T {
    throw new Error(message)
}

export type PhraseLike = Phrase | Code | Illustration | string | ComponentType
export function toPhrase(something : PhraseLike) : Phrase {
    if (something instanceof Code) {
        return new CodePhrase({
            language : something.language,
            lexemes  : something.lines[0],
        })
    }

    return (
        something instanceof Phrase       ? something                               :
        something instanceof Illustration ? ref(something)                          :
        typeof something === 'string'     ? new TextPhrase({ text : something })    :
        something instanceof Function     ? new ReactPhrase({ target : something }) :
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

export function quote(author : Person, ...somethings : Array<SentenceLike>) : Paragraph {
    const sentences = toSentences(somethings)

    return new Quote({ author, sentences })
}

export type LexemeLike = Lexeme | string
export function toLexeme(something : LexemeLike) {
    return something instanceof Lexeme
        ? something
        : new TextLexeme({ text : something })
}
export type LexemesLike = LexemeLike | Array<LexemeLike>
export function toLexemes(something : LexemesLike) : Lexemes {
    const array = (
        Array.isArray(something)
            ? something
            : [ something ]
    ).map(toLexeme)

    return new Lexemes({ array })
}
export function code(language : CodeLanguage, ...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language, lines })
}
export function cpp(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : `C++`, lines })
}
export function js(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : `JavaScript`, lines })
}
export function jsx(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : `JavaScriptXML`, lines })
}
export function cs(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : `C#`, lines })
}
export function lua(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : 'Lua', lines })
}
export function py(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : 'Python', lines })
}
export function l0(...somethings : Array<LexemesLike>) {
    const lines = somethings.map(toLexemes)

    return new Code({ language : 'L0', lines })
}

export function illustration(description : ParagraphLike, target : IllustrationTarget) {
    return new Illustration({
        description : toParagraph(description),
        target,
    })
}

export function note(...sentencesLike : Array<SentenceLike>) : NotePhrase {
    const sentences = toSentences(sentencesLike)

    return new NotePhrase({ sentences })
}

export function link(somethings : PhrasesLike, href : Href) {
    const phrases = toPhrases(somethings)

    return new LinkPhrase({ href, phrases })
}

export type SectionPartLike = Illustration | List | ParagraphLike | Quote
export function toSectionPart(something : SectionPartLike) : SectionPart {
    return (
        something instanceof Illustration ? something :
        something instanceof List         ? something :
        something instanceof Quote        ? something :
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

export function article(titleLike : SentenceLike, { created } : { created? : Date }, ...sections : Array<Section>) {
    const title = toSentences(titleLike)

    return new Article({
        details : new ArticleDetails({
            created,
            author : persons.hopeless,
        }),
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

export function emp(...somethings : Array<PhraseLike>) {
    const phrases = toPhrases(somethings)

    return new EmphasisPhrase({ phrases })
}

export function neg(...somethings : Array<PhraseLike>) {
    const phrases = toPhrases(somethings)

    return new NegationPhrase({ phrases })
}

export function tex(source : string) {
    return new TeXPhrase({ source })
}

export function ref(target : ReferenceTarget) {
    return new ReferencePhrase({ target })
}

export function kw(text : string) {
    return new KeywordLexeme({ text })
}
export function cm(text : string) {
    return new CommentLexeme({ text })
}
export function c(text : string) {
    return new IdentifierLexeme({ text, role : `class` })
}
export function f(text : string) {
    return new IdentifierLexeme({ text, role : `function` })
}
export function v(text : string) {
    return new IdentifierLexeme({ text, role : `variable` })
}
export function ns(text : string) {
    return new IdentifierLexeme({ text, role : 'namespace' })
}
export function lt(text : string) {
    let type = (() => {
        try {
            const parsed = JSON.parse(text)
            const type = typeof parsed

            switch (type) {
                case 'boolean':
                case 'number':
                case 'string':
                    return type
            }
        }
        catch(error) {
            // do nothing
        }

        return 'number'
    })()

    return new LiteralLexeme({ text, type })
}
