const documenting = require(`./documenting`);


it(`Should be object`, () => {
    expect(documenting).toHaveProperty(`Document`);
    expect(documenting).toHaveProperty(`Paragraph`);
    expect(documenting).toHaveProperty(`Sentence`);
    expect(documenting).toHaveProperty(`Phrase`);
    expect(documenting).toHaveProperty(`TextPhrase`);
});
