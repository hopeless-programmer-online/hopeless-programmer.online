const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    sentence,
    figurative,
    emphasis,
    link,
    lexeme,
    code,
    js,
    cs,
} = s;


exports = module.exports = new h.DocumentResource({
    Document : document([ `Думки вголос. `, `Порушення симетрії аргументів функції. ` ],
        {
        },
        section(``, ...[
            paragraph(...[
                sentence(``),
            ]),
        ]),
    ),
});
