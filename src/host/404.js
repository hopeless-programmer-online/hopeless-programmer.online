const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;


exports = module.exports = new h.DocumentResource({
    Document : s.document([ `Сторінку не знайдено.`, `Код помилки : 404.` ], {},
        s.section(`У чому річ?`,
            s.paragraph(
                `Сторінка на яку ви намагаєтесь перейти не існує. `,
                `Можливо вона була видалена, переміщена, або ніколи не існувала. `,
            ),
        ),
    ),
});
