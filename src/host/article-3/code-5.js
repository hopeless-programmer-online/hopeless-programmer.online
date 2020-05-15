const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Явне приведення перевантаженої функції до певної сигнатури. `),
    s.cpp(
        [ `void f();` ],
        [ `void f();` ],
        [ `` ],
        [ `auto g = f;                              // неоднозначність` ],
        [ `auto h = static_cast<void(*)(float)>(f); // вирішення` ],
    ),
]);
