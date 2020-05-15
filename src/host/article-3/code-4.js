const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`З коду не є очевидно з котрого з просторів імен потрібно викликати функцію. `),
    s.cpp(
        [ `namespace A {` ],
        [ `    void f();` ],
        [ `}` ],
        [ `namespace B {` ],
        [ `    void f();` ],
        [ `}` ],
        [ `` ],
        [ `using namespace A;` ],
        [ `using namespace B;` ],
        [ `` ],
        [ `f();    // неоднозначність` ],
        [ `A::f(); // вирішення` ],
    ),
]);
