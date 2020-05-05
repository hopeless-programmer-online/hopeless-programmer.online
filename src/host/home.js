const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


const h = hosting;
const s = documenting.shortcuts;


exports = module.exports = new h.DocumentResource({
    Document : s.document(`Ласкаво просимо!`, {},
        s.section(`Сайт в процесі розробки`,
            s.paragraph(
                `Вітаю на моєму сайті! `,
                `Як ви вже могли помітити, він не готовий і все ще розробляється. `,
                `Багато чого може не працювати, або працювати не так, як було задумано. `,
                `А тому я буду радий за будь-яку інформацію щодо проблем. `,
                `Дякую! `,
            ),
        ),
    ),
});
