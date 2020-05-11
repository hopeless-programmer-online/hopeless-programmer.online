const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Виклик функції, результат якої збігається з типом аргументу.`),
    s.code(
        [ `int   f();` ],
        [ `float f();` ],
        [ `` ],
        [ `void  g(float);` ],
        [ `` ],
        [ `g(f()); // float f()` ],
    ),
]);
