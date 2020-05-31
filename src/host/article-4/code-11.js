const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Похідний клас JSON лише реалізує абстрактні методи Visitor. Перенаправлення відповідно до типу об'єкта відбувається "за кулісами".`),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Visitor`), ` {` ],
        [ `    `, s.f(`VisitBoolean`), `(`, s.v(`boolean`), `); `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`VisitNumber`), ` (`, s.v(`number`), `);  `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`VisitString`), ` (`, s.v(`string`), `);  `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`VisitArray`), `  (`, s.v(`array`), `);   `, s.cm(`// абстрактний`) ],
        [ `}` ],
        [ `` ],
        [ s.kw(`class`), ` `, s.c(`JSON`), ` `, s.kw(`extends`), ` `, s.c(`Visitor`), ` {` ],
        [ `    `, s.f(`VisitBoolean`), `(`, s.v(`boolean`), `) { `, s.cm(`// реалізація`) ],
        [ `        `, s.f(`print`), `(`, s.lt(`"boolean"`), `);` ],
        [ `    }` ],
        [ `    `, s.f(`VisitNumber`), `(`, s.v(`number`), `) {  `, s.cm(`// реалізація`) ],
        [ `        `, s.f(`print`), `(`, s.lt(`"number"`), `);` ],
        [ `    }` ],
        [ `    `, s.f(`VisitString`), `(`, s.v(`string`), `) {  `, s.cm(`// реалізація`) ],
        [ `        `, s.f(`print`), `(`, s.lt(`"string"`), `);` ],
        [ `    }` ],
        [ `    `, s.f(`VisitArray`), `(`, s.v(`array`), `)  {   `, s.cm(`// реалізація`) ],
        [ `        `, s.f(`print`), `(`, s.lt(`"array"`), `);` ],
        [ `    }` ],
        [ `}` ],
        [ `` ],
        [ s.kw(`let`), ` `, s.v(`json`), `   = `, s.kw(`new`), ` `, s.c(`JSON`), `();` ],
        [ s.kw(`let`), ` `, s.v(`object`), ` = `, s.kw(`new`), ` `, s.c(`Number`), `();` ],
        [ `` ],
        [ s.v(`object`), `.`, s.f(`Accept`), `(`, s.v(`json`), `); `, s.cm(`// json.VisitNumber(object)`) ],
    ),
]);
