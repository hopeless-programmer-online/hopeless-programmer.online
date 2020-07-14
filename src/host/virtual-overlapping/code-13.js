const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Явна вказівка на те, що метод потрібно перекрити, а не замістити.`),
    s.js(
        [ `class CinnamonBaker:` ],
        [ `    public Baker` ],
        [ `{` ],
        [ `    ...` ],
        [ `public:` ],
        [ `    // перекриваємо метод` ],
        [ `    std::shared_ptr<CinnamonPie> Bake() overlap;` ],
        [ `};` ],
    ),
]);
