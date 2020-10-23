const s = require(`../../server/documenting`).shortcuts;
const {
    kw,
    f,
    lt,
    v,
    cm,
} = s;

exports = module.exports = s.illustration(`Різниця між поверненням багатьох результатів та поверненням масиву в JavaScript. `, s.js(...[
    [ kw(`function`), ` `, f(`returnThree`), `() {` ],
    [ `    `, cm(`// повернення декількох значень`) ],
    [ `    `, kw(`return`), ` `, lt(`1`), `, `, lt(`2`), `, `, lt(`3`), `;` ],
    [ `}` ],
    [ `` ],
    [ kw(`const`), ` `, v(`x`), `, `, v(`y`), `, `, v(`z`), ` = `, f(`returnThree`), `();` ],
    [ `` ],
    [ kw(`function`), ` `, f(`returnThree`), `() {` ],
    [ `    `, cm(`// повернення масиву`) ],
    [ `    `, kw(`return`), ` [ `, lt(`1`), `, `, lt(`2`), `, `, lt(`3`), ` ];` ],
    [ `}` ],
    [ `` ],
    [ cm(`// деструктуризація`) ],
    [ kw(`const`), ` [ `, v(`x`), `, `, v(`y`), `, `, v(`z`), ` ] = `, f(`returnThree`), `();` ],
]));
