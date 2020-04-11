const documenting = require(`./documenting`);


it(`Should be object`, () => {
    expect(documenting).toHaveProperty(`Document`);
});
