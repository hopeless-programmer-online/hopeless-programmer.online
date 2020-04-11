const Phrase = require(`./phrase`);
const TextPhrase = require(`./text-phrase`);


it(`Should be function`, () => {
    expect(TextPhrase).toBeInstanceOf(Function);
});
it(`Should extends Phrase`, () => {
    expect(Object.getPrototypeOf(TextPhrase.prototype)).toBe(Phrase.prototype);
});
it(`Should throws on creating without arguments`, () => {
    expect(() => new TextPhrase).toThrowError(Error);
});
it(`Should throws on creating without "String" argument`, () => {
    expect(() => new TextPhrase({})).toThrowError(Error);
});
it(`Should throws on creating with not string "String" argument`, () => {
    expect(() => new TextPhrase({ String : 5 })).toThrowError(Error);
});
it(`Should returns object on creating`, () => {
    expect(new TextPhrase({ String : `text` })).toBeInstanceOf(TextPhrase);
});
it(`Should returns "String" argument passed into constructor on getting "String"`, () => {
    const phrase = new TextPhrase({ String : `text` });

    expect(phrase.String).toBe(`text`);
});
