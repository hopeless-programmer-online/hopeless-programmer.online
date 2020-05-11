const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Вибір функції без результату за замовчуванням.`),
    s.code(
        [ `void f();` ],
        [ `int  f();` ],
        [ `` ],
        [ `f(); // void f()` ],
    ),
]);
