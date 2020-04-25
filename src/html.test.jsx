const html = require(`./html`);


it(`Should converts common html page`, () => {
    const page = (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>JSX Test</title>
                <link rel="stylesheet" href="styles.css" />
                <script src="script.js" />
            </head>
            <body>
                <div class='"my-class"' style="'my-style'">
                    <span>
                        Hello, <b>JSX</b>!
                    </span>
                    <hr />
                    <div>
                        <i>&lt;&amp;JavaScript X&amp;&gt;</i>
                    </div>
                </div>
            </body>
        </html>
    );

    expect(page.Html5.toString()).toBe(
        `<!DOCTYPE html><!--\r\n` +
        `--><html lang="en">\r\n` +
        `    <head>\r\n` +
        `        <meta charset="utf-8"><!--\r\n` +
        `        --><meta name="viewport" content="width=device-width, initial-scale=1.0"><!--\r\n` +
        `        --><title>JSX Test</title><!--\r\n` +
        `        --><link rel="stylesheet" href="styles.css"><!--\r\n` +
        `        --><script src="script.js"></script>\r\n` +
        `    </head><!--\r\n` +
        `    --><body>\r\n` +
        `        <div class="&quot;my-class&quot;" style="&#39;my-style&#39;">\r\n` +
        `            <span>Hello, <b>JSX</b>!</span><!--\r\n` +
        `            --><hr><!--\r\n` +
        `            --><div>\r\n` +
        `                <i>&lt;&amp;JavaScript X&amp;&gt;</i>\r\n` +
        `            </div>\r\n` +
        `        </div>\r\n` +
        `    </body>\r\n` +
        `</html>\r\n`,
    );
});
