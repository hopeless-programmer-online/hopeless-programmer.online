import Code from "./code";
import { CodeLanguage } from "./code-language";
import Illustration from "./illustration";
import Lexemes from "./lexemes";
import LinkPhrase, { Href } from "./link-phrase";
import Paragraph from "./paragraph";
import Phrase from "./phrase";
import Phrases from "./phrases";
import Sentence from "./sentence";
import Sentences from "./sentences";
import TextLexeme from "./text-lexeme";
import TextPhrase from "./text-phrase";

type strings = Array<string>

export function sentence(...somethings : Array<string | Phrase>) : Sentence {
    const array = somethings.map(something =>
        something instanceof Phrase ? something :
        new TextPhrase({ text : something })
    )
    const phrases = new Phrases({ array })

    return new Sentence({ phrases })
}
export const sen = sentence

export function paragraph(...somethings : Array<string | Sentence>) : Paragraph {
    const array = somethings.map(something =>
        something instanceof Sentence ? something :
        sentence(something)
    )
    const sentences = new Sentences({ array })

    return new Paragraph({ sentences })
}
export const p = paragraph

export function code(language : CodeLanguage, ...somethings : strings) {
    const lines = somethings.map(text => new Lexemes({ array : [ new TextLexeme({ text }) ] }))

    return new Code({ language, lines })
}

export function illustration(title : string, description : string, target : Code) {
    return new Illustration({
        title : new Sentences({ array : [ sentence(title) ] }),
        description : p(description),
        target,
    })
}

export function link(href : Href, ...somethings : strings) {
    const array = somethings.map(something => new TextPhrase({ text : something }))
    const phrases = new Phrases({ array })

    return new LinkPhrase({ href, phrases })
}
