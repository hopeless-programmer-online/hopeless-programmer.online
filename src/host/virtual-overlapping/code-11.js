const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Ось як це могло б працювати.`),
    s.cpp(
        [ `void process_interface(Baker* baker)` ],
        [ `{` ],
        [ `    // тут ми отримуємо Pie` ],
        [ `    std::shared_ptr<Pie>         type = baker.Bake();` ],
        [ `}` ],
        [ `void process_implementation(CinnamonBaker* baker)` ],
        [ `{` ],
        [ `    // а тут - CinnamonPie` ],
        [ `    std::shared_ptr<CinnamonPie> type = baker.Bake();` ],
        [ `}` ],
        [ `` ],
        [ `void main()` ],
        [ `{` ],
        [ `    // створюємо "корицевого" пекаря` ],
        [ `    CinnamonBaker* baker = new CinnamonBaker(type);` ],
        [ `    ` ],
        [ `    // в цій функції буде отримано std::shared_ptr<CinnamonPie>` ],
        [ `    process_implementation(baker);` ],
        [ `    ` ],
        [ `    // а в цій - std::shared_ptr<Pie>` ],
        [ `    process_interface(baker);` ],
        [ `}` ],
    ),
]);
