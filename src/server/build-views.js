const path = require(`path`);
const fs = require(`fs`);
const present = require(`./present`);


function build(root) {
    const source = path.join(__dirname, root);

    if (fs.lstatSync(source).isDirectory()) {
        for (const child of fs.readdirSync(source)) {
            build( path.join(root, child) );
        }
    }
    else if (path.extname(source) === `.js`) {
        const view = require(source);
        const html = present.template(
            view.Title.Text,
            present.document(view),
        );

        const destination = path.join(__dirname, `..`, root);
        const parsed = path.parse(destination);
        const file = path.join(
            parsed.dir,
            parsed.name + `.html`,
        );
        const directory = path.dirname(file);

        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, {});
        }

        fs.writeFileSync(file, html.Html5.toString());
    }
}

build(`views`);
