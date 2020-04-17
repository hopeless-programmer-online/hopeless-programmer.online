const TextPhrase = require(`./text-phrase`);
const Sentence = require(`./sentence`);
const Paragraph = require(`./paragraph`);
const TextLexeme = require(`./text-lexeme`);
const CodeLine = require(`./code-line`);
const ParagraphSectionPart = require(`./paragraph-section-part`);
const Section = require(`./section`);
const shortcuts = require(`./shortcuts`);


it(`Should create TextPhrase on calling phrase with string argument`, () => {
    const template = shortcuts.phrase(`text`);

    expect(template).toBeInstanceOf(TextPhrase);
    expect(template.String).toBe(`text`);
});
it(`Should create Sentence on calling sentence with string argument`, () => {
    const template = shortcuts.sentence(`text`);

    expect(template).toBeInstanceOf(Sentence);
    expect(template.Phrases).toHaveLength(1);
    expect(template.Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(template.Phrases[0].String).toBe(`text`);
});
it(`Should create Paragraph on calling paragraph with string arguments`, () => {
    const template = shortcuts.paragraph(`text #1`, `text #2`);

    expect(template).toBeInstanceOf(Paragraph);
    expect(template.Sentences).toHaveLength(2);
    expect(template.Sentences[0].Phrases).toHaveLength(1);
    expect(template.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(template.Sentences[0].Phrases[0].String).toBe(`text #1`);
    expect(template.Sentences[1].Phrases).toHaveLength(1);
    expect(template.Sentences[1].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(template.Sentences[1].Phrases[0].String).toBe(`text #2`);
});
it(`Should create TextLexeme on calling lexeme with string argument`, () => {
    const template = shortcuts.lexeme(`code`);

    expect(template).toBeInstanceOf(TextLexeme);
    expect(template.String).toBe(`code`);
});
it(`Should create CodeLine on calling codeLine with string argument`, () => {
    const template = shortcuts.codeLine(`code`);

    expect(template).toBeInstanceOf(CodeLine);
    expect(template.Lexemes).toHaveLength(1);
    expect(template.Lexemes[0]).toBeInstanceOf(TextLexeme);
    expect(template.Lexemes[0].String).toBe(`code`);
});
it(`Should create Section on calling section`, () => {
    const template = shortcuts.section(`section title`,
        shortcuts.paragraph(
            `sentence #1`,
        ),
    );

    expect(template).toBeInstanceOf(Section);
    expect(template.Title.Sentences).toHaveLength(1);
    expect(template.Title.Sentences[0].Phrases).toHaveLength(1);
    expect(template.Title.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(template.Title.Sentences[0].Phrases[0].String).toBe(`section title`);
    expect(template.Parts).toHaveLength(1);
    expect(template.Parts[0]).toBeInstanceOf(ParagraphSectionPart);
    expect(template.Parts[0].Paragraph.Sentences).toHaveLength(1);
    expect(template.Parts[0].Paragraph.Sentences[0].Phrases).toHaveLength(1);
    expect(template.Parts[0].Paragraph.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(template.Parts[0].Paragraph.Sentences[0].Phrases[0].String).toBe(`sentence #1`);
});
