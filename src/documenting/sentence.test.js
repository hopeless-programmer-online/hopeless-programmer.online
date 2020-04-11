const Sentence = require(`./sentence`);
const TextPhrase = require(`./text-phrase`);


it(`Should be function`, () => {
    expect(Sentence).toBeInstanceOf(Function);
});
it(`Should returns object on creating without arguments`, () => {
    expect(new Sentence).toBeInstanceOf(Sentence);
});
it(`Should returns object on creating with empty arguments`, () => {
    expect(new Sentence({})).toBeInstanceOf(Sentence);
});
it(`Should returns object on creating with empty array as "Phrases" argument`, () => {
    expect(new Sentence({ Phrases : [] })).toBeInstanceOf(Sentence);
});
it(`Should throws on creating with non array "Phrases" argument`, () => {
    expect(() => new Sentence({ Phrases : 1 })).toThrowError(Error);
});
it(`Should throws on creating with incorrect "Phrases" argument`, () => {
    expect(() => new Sentence({ Phrases : [ 1 ] })).toThrowError(Error);
});
it(`Should returns object on creating`, () => {
    const phrases = [
        new TextPhrase({
            String : `text`,
        }),
    ];

    expect(new Sentence({ Phrases : phrases })).toBeInstanceOf(Sentence);
});
it(`Should returns empty array on getting "Phrases" after creating without arguments`, () => {
    const sentence = new Sentence;

    expect(sentence.Phrases).toHaveLength(0);
});
it(`Should returns empty array on getting "Phrases" after creating with empty arguments`, () => {
    const sentence = new Sentence({});

    expect(sentence.Phrases).toHaveLength(0);
});
it(`Should returns array of Phrases after creating`, () => {
    const phrases = [
        new TextPhrase({
            String : `text`,
        }),
    ];
    const sentence = new Sentence({
        Phrases : phrases,
    });

    expect(sentence.Phrases).toBe(phrases);
});
