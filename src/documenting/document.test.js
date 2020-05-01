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
            shortcuts.list(
                `one`,
                `two`,
                `three`,
            ),
            shortcuts.illustration(
                `Illustration description`,
                shortcuts.code(
                ),
            ),
        ),
    );

    expect(document.toHtml().toString()).toBe(
        `<article class="document"><!--\r\n` +
        `    --><header class="header"><!--\r\n` +
        `        --><h1 class="title"><!--\r\n` +
        `            --><span class="sentence"><!--\r\n` +
        `                --><span class="text-phrase">Document title</span><!--\r\n` +
        `            --></span><!--\r\n` +
        `        --></h1><!--\r\n` +
        `    --></header><!--\r\n` +
        `    --><div class="sections"><!--\r\n` +
        `        --><div id="section-1" class="section"><!--\r\n` +
        `            --><h2 class="title"><!--\r\n` +
        `                --><a class="link-button" href="#section-1">#</a><!--\r\n` +
        `                --><span class="sentence"><!--\r\n` +
        `                    --><span class="text-phrase">Section title</span><!--\r\n` +
        `                --></span><!--\r\n` +
        `            --></h2><!--\r\n` +
        `            --><div class="parts"><!--\r\n` +
        `                --><p class="paragraph"><!--\r\n` +
        `                    --><span class="sentence"><!--\r\n` +
        `                        --><span class="text-phrase">First sentence. </span><!--\r\n` +
        `                    --></span><!--\r\n` +
        `                    --><span class="sentence"><!--\r\n` +
        `                        --><span class="text-phrase">Second sentence. </span><!--\r\n` +
        `                    --></span><!--\r\n` +
        `                --></p><!--\r\n` +
        `                --><ul><!--\r\n` +
        `                    --><li><!--\r\n` +
        `                        --><span class="sentence"><!--\r\n` +
        `                            --><span class="text-phrase">one</span><!--\r\n` +
        `                        --></span><!--\r\n` +
        `                    --></li><!--\r\n` +
        `                    --><li><!--\r\n` +
        `                        --><span class="sentence"><!--\r\n` +
        `                            --><span class="text-phrase">two</span><!--\r\n` +
        `                        --></span><!--\r\n` +
        `                    --></li><!--\r\n` +
        `                    --><li><!--\r\n` +
        `                        --><span class="sentence"><!--\r\n` +
        `                            --><span class="text-phrase">three</span><!--\r\n` +
        `                        --></span><!--\r\n` +
        `                    --></li><!--\r\n` +
        `                --></ul><!--\r\n` +
        `                --><div class="illustrations"><!--\r\n` +
        `                    --><div id="illustration-1" class="illustration"><!--\r\n` +
        `                        --><h3 class="title"><!--\r\n` +
        `                            --><span class="sentence"><!--\r\n` +
        `                                --><span class="text-phrase">Приклад коду №1</span><!--\r\n` +
        `                            --></span><!--\r\n` +
        `                            --><a class="link-button" href="#illustration-1">#</a><!--\r\n` +
        `                        --></h3><!--\r\n` +
        `                        --><div class="description"><!--\r\n` +
        `                            --><span class="sentence"><!--\r\n` +
        `                                --><span class="text-phrase">Illustration description</span><!--\r\n` +
        `                            --></span><!--\r\n` +
        `                        --></div><!--\r\n` +
        `                        --><div class="content"><!--\r\n` +
        `                            --><table class="code"><!--\r\n` +
        `                                --><tbody></tbody><!--\r\n` +
        `                            --></table><!--\r\n` +
        `                        --></div><!--\r\n` +
        `                    --></div><!--\r\n` +
        `                --></div><!--\r\n` +
        `            --></div><!--\r\n` +
        `        --></div><!--\r\n` +
        `    --></div><!--\r\n` +
        `--></article>`,
    );
});
