const TextPhraseTemplate = require(`./text-phrase-template`);
const shortcuts = require(`./shortcuts`);


it(`Should create TextPhraseTemplate on calling phrase with string argument`, () => {
    const template = shortcuts.phrase(`text`);

    expect(template).toBeInstanceOf(TextPhraseTemplate);
    expect(template.String).toBe(`text`);
});
