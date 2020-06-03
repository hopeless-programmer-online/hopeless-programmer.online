const hosting = require(`hopeless-programmer.online/hosting`);
const documenting = require(`hopeless-programmer.online/documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    list,
    sentence,
    emphasis,
    figurative,
    link,
    note,
    illustration,
    js,
    kw,
    v,
    f,
    c,
    p,
    lt,
    cm,
} = s;


exports = module.exports = new h.DocumentResource({
    Document : document(sentence(`Мова \u03DF (Коппа). `), {},
        section(`Викидаємо зайве.`, ...[
            paragraph(...[
                sentence(``),
            ]),
        ]),
        section(``, ...[
            paragraph(...[
                sentence(``),
            ]),
        ]),
    ),
});
