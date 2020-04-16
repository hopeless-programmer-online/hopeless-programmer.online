const PhraseTemplate = require(`./phrase-template`);


it(`Should throws on creating without extending`, () => {
    expect(() => new PhraseTemplate).toThrowError(Error);
});
