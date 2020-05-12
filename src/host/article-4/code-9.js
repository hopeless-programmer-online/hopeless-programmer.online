const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Клас Visitor зосереджує в собі методи, які будуть опрацьовувати відповідні типи даних в похідних класах.`),
    s.code(
        [ s.kw(`class`), ` `, s.c(`Visitor`), ` {` ],
        [ `    `, s.f(`VisitBoolean`), `(`, s.v(`boolean`), `); `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`VisitNumber`), ` (`, s.v(`number`), `);  `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`VisitString`), ` (`, s.v(`string`), `);  `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`VisitArray`), `  (`, s.v(`array`), `);   `, s.cm(`// абстрактний`) ],
        [ `}` ],
    ),
]);
