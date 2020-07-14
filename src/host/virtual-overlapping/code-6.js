const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Аби працювати з CinnamonPie нам потрібно виконати приведення типів.`),
    s.js(
        [ `auto baker       = new CinnamonBaker();` ],
        [ `auto pie         = baker->Bake(); // Pie*` ],
        [ `auto cinnamonPie = dynamic_cast<CinnamonPie>(pie);` ],
    ),
]);
