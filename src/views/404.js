const s = require(`../documenting`).shortcuts;


exports = module.exports = s.document(`Сторінку не знайдено`,
    s.section(`Код помилки: 404.`,
        s.paragraph(
            `Сторінка, яку ви шукаєте, була видалена, переміщена, або ніколи не існувала. `,
        ),
    ),
);
