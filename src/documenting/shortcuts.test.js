const TextPhraseTemplate = require(`./text-phrase-template`);
const SentenceTemplate = require(`./sentence-template`);
const ParagraphTemplate = require(`./paragraph-template`);
const TextLexemeTemplate = require(`./text-lexeme-template`);
const CodeLineTemplate = require(`./code-line-template`);
const ParagraphSectionPartTemplate = require(`./paragraph-section-part-template`);
const SectionTemplate = require(`./section-template`);
const shortcuts = require(`./shortcuts`);


it(`Should create TextPhraseTemplate on calling phrase with string argument`, () => {
    const template = shortcuts.phrase(`text`);

    expect(template).toBeInstanceOf(TextPhraseTemplate);
    expect(template.String).toBe(`text`);
});
it(`Should create SentenceTemplate on calling sentence with string argument`, () => {
    const template = shortcuts.sentence(`text`);

    expect(template).toBeInstanceOf(SentenceTemplate);
    expect(template.Phrases).toHaveLength(1);
    expect(template.Phrases[0]).toBeInstanceOf(TextPhraseTemplate);
    expect(template.Phrases[0].String).toBe(`text`);
});
it(`Should create ParagraphTemplate on calling paragraph with string arguments`, () => {
    const template = shortcuts.paragraph(`text #1`, `text #2`);

    expect(template).toBeInstanceOf(ParagraphTemplate);
    expect(template.Sentences).toHaveLength(2);
    expect(template.Sentences[0].Phrases).toHaveLength(1);
    expect(template.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhraseTemplate);
    expect(template.Sentences[0].Phrases[0].String).toBe(`text #1`);
    expect(template.Sentences[1].Phrases).toHaveLength(1);
    expect(template.Sentences[1].Phrases[0]).toBeInstanceOf(TextPhraseTemplate);
    expect(template.Sentences[1].Phrases[0].String).toBe(`text #2`);
});
it(`Should create TextLexemeTemplate on calling lexeme with string argument`, () => {
    const template = shortcuts.lexeme(`code`);

    expect(template).toBeInstanceOf(TextLexemeTemplate);
    expect(template.String).toBe(`code`);
});
it(`Should create CodeLineTemplate on calling codeLine with string argument`, () => {
    const template = shortcuts.codeLine(`code`);

    expect(template).toBeInstanceOf(CodeLineTemplate);
    expect(template.Lexemes).toHaveLength(1);
    expect(template.Lexemes[0]).toBeInstanceOf(TextLexemeTemplate);
    expect(template.Lexemes[0].String).toBe(`code`);
});
it(`Should create SectionTemplate on calling section`, () => {
    const template = shortcuts.section(`section title`,
        shortcuts.paragraph(
            `sentence #1`,
        ),
    );

    expect(template).toBeInstanceOf(SectionTemplate);
    expect(template.Title.Sentences).toHaveLength(1);
    expect(template.Title.Sentences[0].Phrases).toHaveLength(1);
    expect(template.Title.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhraseTemplate);
    expect(template.Title.Sentences[0].Phrases[0].String).toBe(`section title`);
    expect(template.Parts).toHaveLength(1);
    expect(template.Parts[0]).toBeInstanceOf(ParagraphSectionPartTemplate);
    expect(template.Parts[0].Paragraph.Sentences).toHaveLength(1);
    expect(template.Parts[0].Paragraph.Sentences[0].Phrases).toHaveLength(1);
    expect(template.Parts[0].Paragraph.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhraseTemplate);
    expect(template.Parts[0].Paragraph.Sentences[0].Phrases[0].String).toBe(`sentence #1`);
});
