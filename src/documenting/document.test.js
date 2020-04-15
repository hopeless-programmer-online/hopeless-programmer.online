const Document = require(`./document`);
const shortcuts = require(`./shortcuts`);


it(`Should be function`, () => {
    expect(Document).toBeInstanceOf(Function);
});
it(`Should converts ho html`, () => {
    const document = shortcuts.document(
        `Document title`,
        shortcuts.section(
            `Section title`,
            shortcuts.paragraph(
                `First sentence. `,
                `Second sentence. `,
            ),
        ),
    );

    expect(document.toHtml().toString()).toBe(
        `<article class="document">\r\n` +
        `    <header class="header">\r\n` +
        `        <h1 class="title">\r\n` +
        `            <span class="sentence">\r\n` +
        `                <span class="text-phrase">Document title</span>\r\n` +
        `            </span>\r\n` +
        `        </h1>\r\n` +
        `    </header>\r\n` +
        `    <div id="section-1" class="section">\r\n` +
        `        <h2 class="title">\r\n` +
        `            <span class="sentence">\r\n` +
        `                <span class="text-phrase">Section title</span>\r\n` +
        `            </span>\r\n` +
        `            <a class="link-button" href="#section-1">#</a>\r\n` +
        `        </h2>\r\n` +
        `        <p class="paragraph">\r\n` +
        `            <span class="sentence">\r\n` +
        `                <span class="text-phrase">First sentence. </span>\r\n` +
        `            </span>\r\n` +
        `            <span class="sentence">\r\n` +
        `                <span class="text-phrase">Second sentence. </span>\r\n` +
        `            </span>\r\n` +
        `        </p>\r\n` +
        `    </div>\r\n` +
        `</article>`,
    );
});
