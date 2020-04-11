const Document = require(`./document`);
const Paragraph = require(`./paragraph`);
const TextPhrase = require(`./text-phrase`);
const shortcuts = require(`./shortcuts`);


it(`Should create Paragraph on calling paragraph`, () => {
    const paragraph = shortcuts.paragraph(
        `first sentence`,
        `second sentence`,
        `third sentence`,
    );

    expect(paragraph).toBeInstanceOf(Paragraph);
    expect(paragraph.Sentences).toHaveLength(3);
    expect(paragraph.Sentences[0].Phrases).toHaveLength(1);
    expect(paragraph.Sentences[0].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(paragraph.Sentences[0].Phrases[0].String).toBe(`first sentence`);
    expect(paragraph.Sentences[1].Phrases).toHaveLength(1);
    expect(paragraph.Sentences[1].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(paragraph.Sentences[1].Phrases[0].String).toBe(`second sentence`);
    expect(paragraph.Sentences[2].Phrases).toHaveLength(1);
    expect(paragraph.Sentences[2].Phrases[0]).toBeInstanceOf(TextPhrase);
    expect(paragraph.Sentences[2].Phrases[0].String).toBe(`third sentence`);
});
it(`Should create Document on calling document`, () => {
    const document = shortcuts.document(
        `document title`,
        shortcuts.section(
            `section title`,
            shortcuts.paragraph(
                `first sentence`,
                `second sentence`,
                `third sentence`,
            ),
            shortcuts.paragraph(
                `first sentence`,
                `second sentence`,
                `third sentence`,
            ),
        ),
        shortcuts.section(
            `section title`,
            shortcuts.paragraph(
                `first sentence`,
                `second sentence`,
                `third sentence`,
            ),
            shortcuts.code(
                `line #1`,
                `line #2`,
                `line #3`,
            ),
        ),
    );

    expect(document).toBeInstanceOf(Document);
});
