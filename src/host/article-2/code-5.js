const s = require(`../../documenting`).shortcuts;
const { cm, kw } = s;


exports = module.exports = s.illustration( ...[
    `Оголошення змінних та функцій в PHP.`,
    s.code(
        [ cm(`# оголошення змінних`) ],
        [ `$one   = 1;` ],
        [ `$two   = 2;` ],
        [ `$three = 3;` ],
        [ `` ],
        [ cm(`# оголошення функцій`) ],
        [ kw(`function`), ` first_function()  { ... }` ],
        [ kw(`function`), ` second_function() { ... }` ],
        [ kw(`function`), ` third_function()  { ... }` ],
    ),
]);
