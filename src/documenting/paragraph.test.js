const Paragraph = require(`./paragraph`);
const Sentence = require(`./sentence`);
const Sentences = require(`./sentences`);


it(`Should be function`, () => {
    expect(Paragraph).toBeInstanceOf(Function);
});
it(`Should returns object on creating without arguments`, () => {
    expect(new Paragraph).toBeInstanceOf(Paragraph);
});
it(`Should returns object on creating with empty arguments`, () => {
    expect(new Paragraph({})).toBeInstanceOf(Paragraph);
});
it(`Should throws on creating with non array "Sentences" argument`, () => {
    expect(() => new Paragraph({ Sentences : 1 })).toThrowError(Error);
});
it(`Should throws on creating with incorrect "Sentences" argument`, () => {
    expect(() => new Paragraph({ Sentences : [ 1 ] })).toThrowError(Error);
});
it(`Should returns object on creating`, () => {
    const sentences = new Sentences(
        new Sentence,
    );

    expect(new Paragraph({ Sentences : sentences })).toBeInstanceOf(Paragraph);
});
it(`Should returns empty array on getting "Sentences" after creating without arguments`, () => {
    const paragraph = new Paragraph;

    expect(paragraph.Sentences).toHaveLength(0);
});
it(`Should returns empty array on getting "Sentences" after creating with empty arguments`, () => {
    const paragraph = new Paragraph({});

    expect(paragraph.Sentences).toHaveLength(0);
});
it(`Should returns Sentences after creating`, () => {
    const sentences = new Sentences(
        new Sentence,
    );
    const paragraph = new Paragraph({
        Sentences : sentences,
    });

    expect(paragraph.Sentences).toBe(sentences);
});
