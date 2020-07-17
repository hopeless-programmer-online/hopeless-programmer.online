const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Ірис.`),
    s.cpp(
        [ `// пиріг з ірисом` ],
        [ `class ButterscotchPie:` ],
        [ `    public Pie` ],
        [ `{` ],
        [ `};` ],
        [ `` ],
        [ `// "ірисовий" пекар` ],
        [ `class ButterscotchBaker:` ],
        [ `    public Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    Pie* Bake() override` ],
        [ `    {` ],
        [ `        return new ButterscotchPie();` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
