const Phrase = require(`./phrase`);


it(`Should be function`, () => {
    expect(Phrase).toBeInstanceOf(Function);
});
it(`Should throws on creating without inheritance`, () => {
    expect(() => new Phrase).toThrowError(Error);
});
