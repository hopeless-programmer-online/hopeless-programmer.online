const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Тепер похідний клас може в деякому розумінні і перекрити і замістити необхідний метод.`),
    s.cpp(
        [ `class CinnamonPie: public Pie` ],
        [ `{` ],
        [ `};` ],
        [ `class CinnamonBaker: public Baker` ],
        [ `{` ],
        [ `protected:` ],
        [ `    std::shared_ptr<Pie> BakePie() override` ],
        [ `    {` ],
        [ `        return std::static_pointer_cast(Bake());` ],
        [ `    }` ],
        [ `public:` ],
        [ `    std::shared_ptr<CinnamonPie> Bake()` ],
        [ `    {` ],
        [ `        return std::make_shared<CinnamonPie>();` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
