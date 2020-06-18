const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;


exports = module.exports = new h.DocumentResource({
    Document : s.document([ `Метод не дозволений.`, `Код помилки : 405.` ], {},
        s.section(`У чому річ?`,
            s.paragraph(
                `Метод http за допомогою якого ви звертаєтесь до сайту не підтримується. `,
                `Навряд чи таке могло статись випадково... ви точно не хакер? `,
            ),
        ),
    ),
});
