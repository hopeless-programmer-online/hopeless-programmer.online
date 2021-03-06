const Document = require(`./document`);
const shortcuts = require(`./shortcuts`);


it(`Should be function`, () => {
    expect(Document).toBeInstanceOf(Function);
});
it(`Should converts ho html`, async () => {
    const document = shortcuts.document(
        [ `Document`, `title` ], {},
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
                shortcuts.code(`c`,
                ),
            ),
        ),
    );

    expect((await document.toHtml()).toString()).toBe(
        `<article class="hp-class-document"><!--\r\n` +
        `    --><header><!--\r\n` +
        `        --><h1><!--\r\n` +
        `            --><span class="hp-class-sentence"><!--\r\n` +
        `                --><span class="hp-class-phrase hp-class-text-phrase">Document</span><!--\r\n` +
        `            --></span><!--\r\n` +
        `            --><span class="hp-class-sentence"><!--\r\n` +
        `                --><span class="hp-class-phrase hp-class-text-phrase">title</span><!--\r\n` +
        `            --></span><!--\r\n` +
        `        --></h1><!--\r\n` +
        `    --></header><!--\r\n` +
        `    --><section id="hp-id-section-1"><!--\r\n` +
        `        --><h2><!--\r\n` +
        `            --><a href="#hp-id-section-1">§</a><!--\r\n` +
        `            --><span class="hp-class-sentence"><!--\r\n` +
        `                --><span class="hp-class-phrase hp-class-text-phrase">Section title</span><!--\r\n` +
        `            --></span><!--\r\n` +
        `        --></h2><!--\r\n` +
        `        --><p><!--\r\n` +
        `            --><span class="hp-class-sentence"><!--\r\n` +
        `                --><span class="hp-class-phrase hp-class-text-phrase">First sentence. </span><!--\r\n` +
        `            --></span><!--\r\n` +
        `            --><span class="hp-class-sentence"><!--\r\n` +
        `                --><span class="hp-class-phrase hp-class-text-phrase">Second sentence. </span><!--\r\n` +
        `            --></span><!--\r\n` +
        `        --></p><!--\r\n` +
        `        --><ul><!--\r\n` +
        `            --><li><!--\r\n` +
        `                --><span class="hp-class-sentence"><!--\r\n` +
        `                    --><span class="hp-class-phrase hp-class-text-phrase">one</span><!--\r\n` +
        `                --></span><!--\r\n` +
        `            --></li><!--\r\n` +
        `            --><li><!--\r\n` +
        `                --><span class="hp-class-sentence"><!--\r\n` +
        `                    --><span class="hp-class-phrase hp-class-text-phrase">two</span><!--\r\n` +
        `                --></span><!--\r\n` +
        `            --></li><!--\r\n` +
        `            --><li><!--\r\n` +
        `                --><span class="hp-class-sentence"><!--\r\n` +
        `                    --><span class="hp-class-phrase hp-class-text-phrase">three</span><!--\r\n` +
        `                --></span><!--\r\n` +
        `            --></li><!--\r\n` +
        `        --></ul><!--\r\n` +
        `        --><figure id="hp-id-illustration-1"><!--\r\n` +
        `            --><figure class="hp-class-code" data-hp-language="c"><!--\r\n` +
        `                --><figcaption class="hp-class-code-header"><!--\r\n` +
        `                    --><span class="hp-class-icon" data-hp-type="c">c|</span>example.c</figcaption><!--\r\n` +
        `                --><code></code><!--\r\n` +
        `            --></figure><!--\r\n` +
        `            --><figcaption><!--\r\n` +
        `                --><h3><!--\r\n` +
        `                    --><span class="hp-class-sentence"><!--\r\n` +
        `                        --><span class="hp-class-phrase hp-class-text-phrase">Приклад коду №1</span><!--\r\n` +
        `                    --></span><!--\r\n` +
        `                    --><a href="#hp-id-illustration-1">§</a><!--\r\n` +
        `                --></h3><!--\r\n` +
        `                --><p><!--\r\n` +
        `                    --><span class="hp-class-sentence"><!--\r\n` +
        `                        --><span class="hp-class-phrase hp-class-text-phrase">Illustration description</span><!--\r\n` +
        `                    --></span><!--\r\n` +
        `                --></p><!--\r\n` +
        `            --></figcaption><!--\r\n` +
        `        --></figure><!--\r\n` +
        `    --></section><!--\r\n` +
        `    --><footer><!--\r\n` +
        `        --><table><!--\r\n` +
        `            --><tbody></tbody><!--\r\n` +
        `        --></table><!--\r\n` +
        `    --></footer><!--\r\n` +
        `--></article>`,
    );
});
