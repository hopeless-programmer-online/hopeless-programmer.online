const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Спроба одночасно і замістити, і перекрити віртуальний метод.`),
    s.js(
        [ `// "корицевий" пекар` ],
        [ `class CinnamonBaker:` ],
        [ `    public Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    // цей метод заміщує віртуальний метод базового класу` ],
        [ `    std::shared_ptr<Pie>          Baker::Bake() override;` ],
        [ `    ` ],
        [ `    // а цей перекриває його, не заміщує` ],
        [ `    std::shared_ptr<CinnamonPie>  Bake();` ],
        [ `};` ],
    ),
]);
