const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Кориця.`),
    s.cpp(
        [ `// пиріг з корицею` ],
        [ `class CinnamonPie:` ],
        [ `    public Pie` ],
        [ `{` ],
        [ `};` ],
        [ `` ],
        [ `// "корицевий" пекар` ],
        [ `class CinnamonBaker:` ],
        [ `    public Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    Pie* Bake() override` ],
        [ `    {` ],
        [ `        return new CinnamonPie();` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
