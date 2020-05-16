const s = require(`../../documenting`).shortcuts;
const { cm, kw, lt, v, f } = s;


exports = module.exports = s.illustration( ...[
    `Оголошення змінних та функцій в PHP.`,
    s.code(`php`,
        [ cm(`# оголошення змінних`) ],
        [ v(`$one`), `   = `, lt(`1`), `;` ],
        [ v(`$two`), `   = `, lt(`2`), `;` ],
        [ v(`$three`), ` = `, lt(`3`), `;` ],
        [ `` ],
        [ cm(`# оголошення функцій`) ],
        [ kw(`function`), ` `, f(`first_function`), `()  { ... }` ],
        [ kw(`function`), ` `, f(`second_function`), `() { ... }` ],
        [ kw(`function`), ` `, f(`third_function`), `()  { ... }` ],
    ),
]);
