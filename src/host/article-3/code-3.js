const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`З коду не є очевидно яку саме функцію потрібно викликати. `),
    s.cpp(
        [ `int   f();` ],
        [ `float f();` ],
        [ `` ],
        [ `f(); // неоднозначність` ],
    ),
]);
