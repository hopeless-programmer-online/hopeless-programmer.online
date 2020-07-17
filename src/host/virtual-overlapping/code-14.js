const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Перша стратегія обходу даної вади - назвати методи довгими і надмірними іменами.`),
    s.cpp(
        [ `class Pie` ],
        [ `{` ],
        [ `};` ],
        [ `class Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual std::shared_ptr<Pie> BakePie();` ],
        [ `};` ],
        [ `` ],
        [ `class CinnamonPie: public Pie` ],
        [ `{` ],
        [ `};` ],
        [ `class CinnamonBaker: public Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    std::shared_ptr<Pie>         BakePie() override;` ],
        [ `    std::shared_ptr<CinnamonPie> BakeCinnamonPie(); // OK!` ],
        [ `};` ],
    ),
]);
