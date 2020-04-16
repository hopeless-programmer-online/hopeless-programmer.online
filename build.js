const path = require(`path`);
const fs = require(`fs`);
const ts = require(`typescript`);


function transpile(root) {
    const stat = fs.statSync(root);

    if (stat.isDirectory()) {
        const ignores = [];

        for (const name of fs.readdirSync(root)) {
            const ignore = transpile( path.join(root, name) );

            if (ignore) {
                ignores.push(ignore);
            }
        }

        if (ignores.length > 0) {
            fs.writeFileSync(
                path.join(root, `.gitignore`),
                `# jsx -> js\n` + ignores.join(`\n`) + `\n`,
            );
        }
    }
    else if (stat.isFile()) {
        if (!path.extname(root).match(/\.jsx$/)) {
            return;
        }

        // console.log(`transpiling : ${root}`);

        const source = fs.readFileSync(root, `utf-8`);
        const output = ts.transpileModule(source, {
            compilerOptions : {
                target          : ts.ScriptTarget.Latest,
                module          : ts.ModuleKind.CommonJS,
                inlineSourceMap : true,
                removeComments  : false,
                jsx             : ts.JsxEmit.React,
                jsxFactory      : `html.createElement`,
            },
        });
        const name = path.parse(root).name + `.js`;
        const destination = path.join( path.dirname(root), name );

        fs.writeFileSync(destination, output.outputText, `utf-8`);

        return name;
    }
}


transpile( path.join(__dirname, `src`) );
