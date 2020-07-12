const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Динамічний вибір формату при перетворенні даних.`),
    s.js(
        [ s.cm(`// type = "json" або "xml"`) ],
        [ s.kw(`function`), ` `, s.f(`f`), `(`, s.v(`object`), `, `, s.v(`type`), `) {` ],
        [ `    `, s.kw(`switch`), ` (`, s.v(`type`), `) {` ],
        [ `        `, s.kw(`case`), ` `, s.lt(`"json"`), `: `, s.kw(`return`), ` `, s.v(`object`), `.`, s.f(`ToJSON`), `();` ],
        [ `        `, s.kw(`case`), ` `, s.lt(`"xml"`), ` : `, s.kw(`return`), ` `, s.v(`object`), `.`, s.f(`ToXML`), `();` ],
        [ `    }` ],
        [ `}` ],
        [ `` ],
        [ s.cm(`// type = \`ToJSON\` або \`ToXML\``) ],
        [ s.kw(`function`), ` `, s.f(`f`), `(`, s.v(`object`), `, `, s.v(`type`), `) {` ],
        [ `    `, s.kw(`return`), ` `, s.v(`object`), `[`, s.v(`type`), `]();` ],
        [ `}` ],
    ),
]);
