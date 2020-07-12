const s = require(`../../server/documenting`).shortcuts;
const { cm, lt, v } = s;


exports = module.exports = s.illustration( ...[
    `Приклади суфіксів в QBasic.`,
    s.code(`qb`,
        [ v(`integer%`), ` = `, lt(`1`), `      `, cm(`'ціле число`) ],
        [ v(`real#`), `    = `, lt(`1.2`), `    `, cm(`'дробове число`) ],
        [ v(`string$`), `  = `, lt(`"text"`), ` `, cm(`'стрічка`) ],
    ),
]);
