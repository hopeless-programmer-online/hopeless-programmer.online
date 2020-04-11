const Phrase = require(`./phrase`);
const TextPhrase = require(`./text-phrase`);


it(`Should be function`, () => {
    expect(TextPhrase).toBeInstanceOf(Function);
    expect(Object.getPrototypeOf(TextPhrase.prototype)).toBe(Phrase.prototype);
});
