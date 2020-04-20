const s = require(`../../documenting`).shortcuts;
const { cm } = s;


exports = module.exports = s.illustration( ...[
    `Приклади суфіксів в QBasic.`,
    s.code(
        [ `integer% = 1      `, cm(`'ціле число`) ],
        [ `real#    = 1.2    `, cm(`'дробове число`) ],
        [ `string$  = "text" `, cm(`'стрічка`) ],
    ),
]);
