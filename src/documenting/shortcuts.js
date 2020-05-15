const Phrase = require(`./phrase`);
const Phrases = require(`./phrases`);
const TextPhrase = require(`./text-phrase`);
const LinkPhrase = require(`./link-phrase`);
const NotePhrase = require(`./note-phrase`);
const EmphasisPhrase = require(`./emphasis-phrase`);
const FigurativePhrase = require(`./figurative-phrase`);
const LexemePhrase = require(`./lexeme-phrase`);
const IllustrationReferencePhrase = require(`./illustration-reference-phrase`);
const Sentence = require(`./sentence`);
const Sentences = require(`./sentences`);
const Note = require(`./note`);
const Paragraph = require(`./paragraph`);
const List = require(`./list`);
const ListItem = require(`./list-item`);
const ListItems = require(`./list-items`);
const SentencesListItemContent = require(`./sentences-list-item-content`);
const Lexeme = require(`./lexeme`);
const Lexemes = require(`./lexemes`);
const TextLexeme = require(`./text-lexeme`);
const CommentLexeme = require(`./comment-lexeme`);
const KeywordLexeme = require(`./keyword-lexeme`);
const LiteralLexeme = require(`./literal-lexeme`);
const LiteralLexemeType = require(`./literal-lexeme-type`);
const IdentifierLexeme = require(`./identifier-lexeme`);
const IdentifierLexemeType = require(`./identifier-lexeme-type`);
const CodeLine = require(`./code-line`);
const CodeLines = require(`./code-lines`);
const Code = require(`./code`);
const CodeLanguage = require(`./code-language`);
const Illustration = require(`./illustration`);
const Illustrations = require(`./illustrations`);
const IllustrationContent = require(`./illustration-content`);
const CodeIllustrationContent = require(`./code-illustration-content`);
const Sections = require(`./sections`);
const SectionPart = require(`./section-part`);
const ParagraphSectionPart = require(`./paragraph-section-part`);
const IllustrationsSectionPart = require(`./illustrations-section-part`);
const ListSectionPart = require(`./list-section-part`);
const Section = require(`./section`);
const Document = require(`./document`);


/**
 * @typedef {string | Illustration | Lexeme | Array<Lexeme>  Code } PhraseSource
 * @typedef {Phrase | PhraseSource}                                 PhraseLike
 * @typedef {PhraseLike}                                            SentenceSource
 * @typedef {Sentence | SentenceSource}                             SentenceLike
 * @typedef {SentenceLike | Array<SentenceLike>}                    SentencesSource
 * @typedef {Sentences | SentencesSource}                           SentencesLike
 * @typedef {SentencesLike}                                         ListItemSource
 * @typedef {ListItem | ListItemSource}                             ListItemLike
 * @typedef {SentenceLike}                                          ParagraphSource
 * @typedef {Paragraph | ParagraphSource | Array<SentenceLike>}     ParagraphLike
 * @typedef {string}                                                LexemeSource
 * @typedef {Lexeme | LexemeSource}                                 LexemeLike
 * @typedef {LexemeLike}                                            CodeLineSource
 * @typedef {CodeLine | CodeLineSource | Array<CodeLineSource>}     CodeLineLike
 * @typedef {Code}                                                  IllustrationContentSource
 * @typedef {IllustrationContent | IllustrationContentSource}       IllustrationContentLike
 * @typedef {Paragraph | Illustration | Array<Illustration> }       SectionPartSource
 * @typedef {SectionPart | SectionPartSource}                       SectionPartLike
 */


/**
 * @param   {string}     string
 * @param   {string}     url
 * @returns {LinkPhrase}
 */
function link(string, url) {
    return new LinkPhrase({
        String : string,
        Url    : url,
    });
}
/**
 * @param   {SentencesLike} something
 * @returns {NotePhrase}
 */
function note(something) {
    return new NotePhrase({
        Note : new Note({
            Sentences : toSentences(something),
        }),
    });
}
/**
 * @param   {string}         string
 * @returns {EmphasisPhrase}
 */
function emphasis(string) {
    return new EmphasisPhrase({
        String : string,
    });
}
/**
 * @param   {string}           string
 * @returns {FigurativePhrase}
 */
function figurative(string) {
    return new FigurativePhrase({
        String : string,
    });
}
/**
 * @param   {PhraseSource} something
 * @returns {Phrase}
 * @throws  {Error}
 */
function phrase(something) {
    if (typeof something === `string`) {
        return new TextPhrase({
            String : something,
        });
    }
    if (something instanceof Illustration) {
        return new IllustrationReferencePhrase({
            Illustration : something,
        });
    }
    if (something instanceof Lexeme) {
        return new LexemePhrase({
            Lexemes : new Lexemes(something),
        });
    }
    if (Array.isArray(something) && something.some(lexeme => lexeme instanceof Lexeme)) {
        return new LexemePhrase({
            Lexemes : toLexemes(something),
        });
    }
    if (something instanceof Code) {
        return new LexemePhrase({
            Language : something.Language,
            Lexemes  : something.Lines.Lexemes,
        });
    }

    throw new Error(`${typeof something} ${something} can't be converted to phrase.`);
}
/**
 * @param   {PhraseLike} something
 * @returns {Phrase}
 * @throws  {Error}
 */
function toPhrase(something) {
    if (something instanceof Phrase) {
        return something;
    }

    return phrase(something);
}
/**
 * @param   {Array<PhraseLike>} somethings
 * @returns {Phrases}
 * @throws  {Error}
 */
function toPhrases(somethings) {
    return new Phrases(...somethings.map(toPhrase));
}
/**
 * @param  {...SentenceSource} somethings
 * @throws {Error}
 */
function sentence(...somethings) {
    const phrases = toPhrases(somethings);

    return new Sentence({
        Phrases : phrases,
    });
}
/**
 * @param   {SentenceLike} something
 * @returns {Sentence}
 * @throws  {Error}
 */
function toSentence(something) {
    if (something instanceof Sentence) {
        return something;
    }

    return sentence(something);
}
/**
 * @param   {SentencesLike} something
 * @returns {Sentences}
 * @throws  {Error}
 */
function toSentences(something) {
    if (something instanceof Sentences) {
        return something;
    }
    if (something instanceof Array) {
        return new Sentences(...something.map(toSentence));
    }

    return new Sentences(toSentence(something));
}
/**
 * @param   {...ParagraphSource} somethings
 * @returns {Paragraph}
 * @throws  {Error}
 */
function paragraph(...somethings) {
    const sentences = toSentences(somethings);

    return new Paragraph({
        Sentences : sentences,
    });
}
/**
 * @param   {ParagraphLike} something
 * @returns {Paragraph}
 * @throws  {Error}
 */
function toParagraph(something) {
    if (something instanceof Paragraph) {
        return something;
    }

    return paragraph(something);
}
/**
 * @param   {Array<ParagraphLike>} somethings
 * @returns {Array<Paragraph>}
 * @throws  {Error}
 */
function toParagraphs(somethings) {
    return somethings.map(toParagraph);
}
/**
 * @param   {...ListItemLike} somethings
 * @returns {List}
 * @throws  {Error}
 */
function list(...somethings) {
    const items = toListItems(somethings);

    return new List({
        Items : items,
    });
}
/**
 * @param   {ListItemSource} something
 * @returns {ListItem}
 * @throws  {Error}
 */
function listItem(something) {
    const sentences = toSentences(something);

    return new ListItem({
        Content : new SentencesListItemContent({
            Sentences : sentences,
        }),
    });
}
/**
 * @param   {ListItemLike} something
 * @returns {ListItem}
 * @throws  {Error}
 */
function toListItem(something) {
    if (something instanceof ListItem) {
        return something;
    }

    return listItem(something);
}
/**
 * @param   {Array<ListItemLike>} somethings
 * @returns {ListItems}
 * @throws  {Error}
 */
function toListItems(somethings) {
    return new ListItems(...somethings.map(toListItem));
}
/**
 * @param   {string}        string
 * @returns {CommentLexeme}
 */
function cm(string) {
    return new CommentLexeme({
        String : string,
    });
}
/**
 * @param   {string}        string
 * @returns {KeywordLexeme}
 */
function kw(string) {
    return new KeywordLexeme({
        String : string,
    });
}
/**
 * @param   {string}        string
 * @returns {LiteralLexeme}
 */
function lt(string) {
    const type =
        (string === `true` || string === false) ? LiteralLexemeType.Boolean :
        !Number.isNaN( parseFloat(string) )     ? LiteralLexemeType.Number  :
        LiteralLexemeType.String;

    return new LiteralLexeme({
        String : string,
        Type   : type,
    });
}
/**
 * @param   {string}           string
 * @returns {IdentifierLexeme}
 */
function a(string) {
    return new IdentifierLexeme({
        String : string,
        Type   : IdentifierLexemeType.Argument,
    });
}
/**
 * @param   {string}           string
 * @returns {IdentifierLexeme}
 */
function v(string) {
    return new IdentifierLexeme({
        String : string,
        Type   : IdentifierLexemeType.Variable,
    });
}
/**
 * @param   {string}           string
 * @returns {IdentifierLexeme}
 */
function f(string) {
    return new IdentifierLexeme({
        String : string,
        Type   : IdentifierLexemeType.Function,
    });
}
/**
 * @param   {string}           string
 * @returns {IdentifierLexeme}
 */
function c(string) {
    return new IdentifierLexeme({
        String : string,
        Type   : IdentifierLexemeType.Class,
    });
}
/**
 * @param   {string}           string
 * @returns {IdentifierLexeme}
 */
function p(string) {
    return new IdentifierLexeme({
        String : string,
        Type   : IdentifierLexemeType.Property,
    });
}
/**
 * @param   {LexemeSource} something
 * @returns {Lexeme}
 * @throws  {Error}
 */
function lexeme(something) {
    if (typeof something === `string`) {
        return new TextLexeme({
            String : something,
        });
    }

    throw new Error(`${something} can't be converted into a lexeme.`);
}
/**
 * @param   {LexemeLike} something
 * @returns {Lexeme}
 * @throws  {Error}
 */
function toLexeme(something) {
    if (something instanceof Lexeme) {
        return something;
    }

    return lexeme(something);
}
/**
 * @param   {Array<LexemeLike>} somethings
 * @returns {Lexemes}
 * @throws  {Error}
 */
function toLexemes(somethings) {
    return new Lexemes(...somethings.map(toLexeme));
}
/**
 * @param   {...CodeLineSource} somethings
 * @returns {CodeLine}
 * @throws  {Error}
 */
function codeLine(...somethings) {
    const lexemes = toLexemes(somethings);

    return new CodeLine({
        Lexemes : lexemes,
    });
}
/**
 * @param   {CodeLineLike} something
 * @returns {CodeLine}
 * @throws  {Error}
 */
function toCodeLine(something) {
    if (something instanceof CodeLine) {
        return something;
    }
    if (something instanceof Array) {
        return new CodeLine({
            Lexemes : toLexemes(something),
        });
    }

    return codeLine(something);
}
/**
 * @param   {Array<CodeLineLike>} somethings
 * @returns {CodeLines}
 * @throws  {Error}
 */
function toCodeLines(somethings) {
    return new CodeLines(...somethings.map(toCodeLine));
}
/**
 * @param   {...CodeLineLike} somethings
 * @returns {Code}
 */
function code(language, ...somethings) {
    language =
        language === `plain` ? CodeLanguage.PlainText  :
        language === `js`    ? CodeLanguage.JavaScript :
        language === `json`  ? CodeLanguage.JSON       :
        language === `c`     ? CodeLanguage.C          :
        language === `c++`   ? CodeLanguage.CPlusPlus  :
        language === `c#`    ? CodeLanguage.CSharp     :
        language === `php`   ? CodeLanguage.PHP        :
        language === `html`  ? CodeLanguage.HTML       :
        language === `css`   ? CodeLanguage.CSS        :
        language === `sass`  ? CodeLanguage.SASS       :
        language === `scss`  ? CodeLanguage.SCSS       :
        language === `xml`   ? CodeLanguage.XML        :
        language === `py`    ? CodeLanguage.Python     :
        language === `llvm`  ? CodeLanguage.LLVM       :
        language === `qb`    ? CodeLanguage.QBasic     :
        language === `tex`   ? CodeLanguage.TeX        :
        language;

    const lines = toCodeLines(somethings);

    return new Code({
        Lines : lines,
    });
}
/**
 * @param   {...CodeLineLike} somethings
 * @returns {Code}
 */
function js(...somethings) {
    const lines = toCodeLines(somethings);

    return new Code({
        Language : CodeLanguage.JavaScript,
        Lines    : lines,
    });
}
/**
 * @param   {...CodeLineLike} somethings
 * @returns {Code}
 */
function cs(...somethings) {
    const lines = toCodeLines(somethings);

    return new Code({
        Language : CodeLanguage.CSharp,
        Lines    : lines,
    });
}
/**
 * @param   {...CodeLineLike} somethings
 * @returns {Code}
 */
function cpp(...somethings) {
    const lines = toCodeLines(somethings);

    return new Code({
        Language : CodeLanguage.CPlusPlus,
        Lines    : lines,
    });
}
/**
 * @param   {IllustrationContentLike} something
 * @returns {IllustrationContent}
 * @throws  {Error}
 */
function toIllustrationContent(something) {
    if (something instanceof IllustrationContent) {
        return something;
    }
    if (something instanceof Code) {
        return new CodeIllustrationContent({
            Code : something,
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {ParagraphLike}           description
 * @param   {IllustrationContentLike} content
 * @returns {Illustration}
 * @throws  {Error}
 */
function illustration(description, content) {
    const illustrationDescription = toParagraph(description);
    const illustrationContent     = toIllustrationContent(content);

    return new Illustration({
        Description : illustrationDescription,
        Content     : illustrationContent,
    });
}
/**
 * @param   {SectionPartSource} something
 * @returns {SectionPart}
 * @throws  {Error}
 */
function sectionPart(something) {
    if (something instanceof Paragraph) {
        return new ParagraphSectionPart({
            Paragraph : something,
        });
    }
    if (something instanceof Illustration) {
        return new IllustrationsSectionPart({
            Illustrations : new Illustrations(something),
        });
    }
    if (something instanceof List) {
        return new ListSectionPart({
            List : something,
        });
    }
    if (something instanceof Array && something.every(x => x instanceof Illustration)) {
        return new IllustrationsSectionPart({
            Illustrations : new Illustrations(...something),
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {SectionPartLike} something
 * @returns {SectionPart}
 * @throws  {Error}
 */
function toSectionPart(something) {
    if (something instanceof SectionPart) {
        return something;
    }

    return sectionPart(something);
}
/**
 * @param   {Array<SectionPartLike>} somethings
 * @returns {Array<SectionPart>}
 * @throws  {Error}
 */
function toSectionParts(somethings) {
    return somethings.map(toSectionPart);
}
/**
 * @param   {ParagraphLike}      title
 * @param   {...SectionPartLike} parts
 * @returns {Section}
 * @throws  {Error}
 */
function section(title, ...parts) {
    const sectionTitle = toParagraph(title).Sentences;
    const sectionParts = toSectionParts(parts);

    return new Section({
        Title : sectionTitle,
        Parts : sectionParts,
    });
}
/**
 * @param   {ParagraphLike} title
 * @param   {Object}        object
 * @param   {Date}          object.Date
 * @param   {...Section}    sections
 * @returns {Document}
 */
function document(title, { Date = new DateClass }, ...sections) {
    const documentTitle = toSentences(title);

    return new Document({
        Title : documentTitle,
        Date,
        Sections : new Sections(...sections),
    });
}


exports.link = link;
exports.note = note;
exports.emphasis = emphasis;
exports.figurative = figurative;
exports.phrase = phrase;
exports.toPhrase = toPhrase;
exports.toPhrases = toPhrases;
exports.sentence = sentence;
exports.toSentence = toSentence;
exports.toSentences = toSentences;
exports.paragraph = paragraph;
exports.toParagraph = toParagraph;
exports.toParagraphs = toParagraphs;
exports.list = list;
exports.listItem = listItem;
exports.toListItem = toListItem;
exports.toListItems = toListItems;
exports.lexeme = lexeme;
exports.cm = cm;
exports.kw = kw;
exports.lt = lt;
exports.a = a;
exports.v = v;
exports.f = f;
exports.c = c;
exports.p = p;
exports.toLexeme = toLexeme;
exports.toLexemes = toLexemes;
exports.codeLine = codeLine;
exports.code = code;
exports.js = js;
exports.cs = cs;
exports.cpp = cpp;
exports.toCodeLine = toCodeLine;
exports.toCodeLines = toCodeLines;
exports.toIllustrationContent = toIllustrationContent;
exports.illustration = illustration;
exports.sectionPart = sectionPart;
exports.toSectionPart = toSectionPart;
exports.toSectionParts = toSectionParts;
exports.section = section;
exports.document = document;


const DateClass = Date;
