const path = require(`path`);
const express = require(`express`);

const app = express();

app.use(`/css`, express.static( path.join(__dirname, `css`) ));
app.use(`/media`, express.static( path.join(__dirname, `media`) ));



app.get(`/`, (req, res) => {
    res.sendFile( path.join(__dirname, `views`, `home.html`) );
});
app.get(`/home`, (req, res) => {
    res.sendFile( path.join(__dirname, `views`, `home.html`) );
});
app.get(`/about`, (req, res) => {
    res.sendFile( path.join(__dirname, `views`, `about.html`) );
});
app.use((req, res) => {
    res.status(404);
    res.sendFile( path.join(__dirname, `views`, `404.html`) );
});


app.listen(3000);
