const TextPhraseTemplate = require(`./text-phrase-template`);
const SentenceTemplate = require(`./sentence-template`);
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
