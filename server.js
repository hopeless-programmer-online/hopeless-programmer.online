const path = require(`path`);
const fs = require(`fs`);
const express = require(`express`);
const resource = require(`./lib/resource`);
const present = require(`./lib/present`);

const app = express();

app.use(`/css`, express.static( path.join(__dirname, `css`) ));
app.use(`/media`, express.static( path.join(__dirname, `media`) ));
app.get(`/`, (req, res) => {
    const html = present.template(
        resource.Title.Text,
        present.document(resource),
    );
    const file = path.join(__dirname, `views`, `index.html`);
    const directory = path.dirname(file);

    fs.mkdirSync(directory);

    fs.createWriteStream(file).end(html.Html5.toString());
    fs.createReadStream(file).pipe(res);
});
app.listen(3000);
