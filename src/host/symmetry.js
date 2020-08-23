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


const antimatter = `https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D1%8F#%D0%A1%D0%B8%D0%BC%D0%B5%D1%82%D1%80%D1%96%D1%8F_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D1%97_%D1%96_%D0%B0%D0%BD%D1%82%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D1%97`;


exports = module.exports = new h.DocumentResource({
    Document : document([ `Думки вголос. `, `Порушення симетрії аргументів функції. ` ],
        {
        },
        section(`Асиметрія.`, ...[
            paragraph(...[
                sentence(`У той час як астрономи та фізики ламають голову над `, link(`порушенням симетрії`, antimatter),` між звичайною матерією та антиматерією, мені не дає спокою інший різновид порушення симетрії. `),
                sentence(`Мене непокоїть те, що функції зазвичай приймають багато аргументів, але повертають лише один результат. `),
                // sentence(`І це тупо, я не бачу для цього жодних вагомих підстав. `),
                sentence(`Хоча, здавалося б, немає підстав проводити між ними якусь вагому різницю. `),
                sentence(`Це дуже тупо. `),
                sentence(`Я б навіть сказав, що це один з найпоказовіших прецедентів безпідставних та безглуздих особливостей як в колишніх, так і в сучасних мовах. `),
                sentence(`І зараз я поясню чому. `),
            ]),
            paragraph(...[
                sentence(``),
                sentence(``),
                sentence(``),
            ]),
            paragraph(...[
                sentence(``),
                sentence(``),
                sentence(``),
            ]),
        ]),
        section(``, ...[
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
