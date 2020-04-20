const s = require(`../../documenting`).shortcuts;
const { cm, lt } = s;


exports = module.exports = s.illustration( ...[
    `Приклади суфіксів в QBasic.`,
    s.code(
        [ `integer% = `, lt(`1`), `      `, cm(`'ціле число`) ],
        [ `real#    = `, lt(`1.2`), `    `, cm(`'дробове число`) ],
        [ `string$  = `, lt(`"text"`), ` `, cm(`'стрічка`) ],
    ),
]);
