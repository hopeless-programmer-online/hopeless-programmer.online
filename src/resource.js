const s = require(`./documenting`).shortcuts;
const p = require(`./present`);
const fs = require(`fs`);


exports = module.exports = s.document(`Про цей сайт`,
    s.section(`Навіщо потрібен цей сайт?`,
        s.paragraph(
            `Цей маленький сайт є місцем, де я зберігаю свої ідеї, проекти, а також матеріали якими я хочу поділитись зі світом. `,
        ),
        s.code(
            `if (x) {`,
            `    f();`,
            `}`,
        ),
    ),
    s.section(`Чому "безнадійний програміст"?`,
        s.paragraph(
            `Хоча деякі люди вважають мене достатньо кваліфікованим для програмування - я сам ставлюсь до цього досить скептично. `,
            `Писати код в умовах сьогоднішніх мов для мене неймовірно складно. `,
            `Доводиться постійно розриватись між ефективністю коду, його зрозумілістю та розширюваністю. `,
            `Абсолютно будь яка мова зі 100% імовірністю лажає в моїх очах протягом першого дня роботи з нею. `,
            `Жахає не лише кількість тих вад за які ніхто не береться, але й існуючі рішення поширених проблем які ніхто навіть не збирається впроваджувати навіть в нові проекти. `,
        ),
        s.paragraph(
            `В таких умовах моя робота не приносить для мене нічого окрім страждань. `,
            `І від цього потерпаю не лише я. `,
            `Код який я пишу і методи якими я вирішую проблеми часто не до вподоби іншим людям. `,
            `Мене часто критикують за мій підхід до роботи і я з легкістю можу зрозуміти цих людей. `,
            `Адже на відміну від мене їх не так сильно дістає та ситуація яка склалась. `,
            `Вони можуть пристосуватись до реальних умов, а я - ні. `,
            `Схоже, програміст з мене безнадійний. `,
        ),
    ),
    s.section(`Чому ти створив власний сайт, а не використав існуючі платформи?`,
        s.paragraph(
            `Коли я лише почав розмірковувати над публікуванням моїх роздумів та проектів - я дуже скептично поставився до створення власного сайту. `,
            `В мене не було такого досвіду - створення власного сайту - і не було бажання його отримувати. `,
            `З іншого боку - мене не задовільняла в повній мірі якість існуючих рішень. `,
            `Зокрема, оскільки я часто висловлюю ідеї щодо вад тої чи іншої мови - ресурс повинен вміти гарно відображати код. `,
            `Також я часто пропоную власні варіанти синтаксису, а тому дуже важливо забезпечити можливість кастомізації його підсвітки. `,
            `Зрештою, мені завжди хотілось вбудовувати в публікації інтерактивне наповнення, а з цим в існуючих інформаціїних ресурсів найбільше проблем. `,
        ),
        s.paragraph(
            `Минув деякий час і на роботі мені довелось зіштовхнутись з HTML і CSS. `,
            `Вже тоді я непогано знав JavaScript і оскільки мій тодішній робочий проект рухався у напрямку сумісності з NodeJS - я отримав можливість "по дорозі" познайомитись з деякими її бібліотеками. `,
            `Працювати з цими інструментами було легко, а їхня широка популярність лише спрощувала входження. `,
            `Я все ще не знав (а швидше за все - і до тепер не знаю) як влаштовані інші деталі вебу, але краса і легкість створення примітивних сторінок не давала мені спокою. `,
            `Зрештою я переглянув свої погляди, а кількість зібраного матеріалу який я так давно хотів десь забекапити забила останній цвях. `,
            `Я придбав свій перший домен, замовив хостинг і підняв сайт з кількома сторінками на PHP. `,
        ),
        s.paragraph(
            `Окрім цього, моя робота не сильно дозволяє мені розвиватись в технічному плані. `,
            `Тому створення сайту здається мені непоганим способом залишатись в формі. `,
            `Лише до того моменту коли я пишу цей текст я познайомився з безліччю технологій. `,
            `HTML5 та CSS3, TypeScript, JSX, фреймворки Mocha та Jest, SASS та ціла низка пакетів з npm. `,
            `Незалежно від ефективності цього сайту я дізнався багато чого нового. `,
        ),
    ),
    s.section(`Чому деякі статті такі дурнуваті?`,
        s.paragraph(
            `Так вже склалось, що я не зовсім задоволений (а точніше - зовсім не задоволений) сьогоднішньою якістю проектів у сфері інформаційних технологій. `,
            `Програми, ігри, середовища розробки, мови програмування, протоколи та формати даних, файлові та операційні системи - все це викликає в мене глибоке розчарування. `,
            `Я в жодній мірі не применшую досягнення людства в цих областях, але вважаю що ми все ще далекі від межі наших можливостей. `,
            `Світ всередині комп'ютера в значно меншій мірі схильний до тої недосконалості, до якої схильний зовнішній світ в якому ми живемо. `,
            `Робити проекти кращими можна і *ТРЕБА*. `,
        ),
        s.paragraph(
            `Оскільки ці мої погляди розбігаються з поглядами деяких інших людей - я часто опиняюсь втягнутим в дискусію. `,
            `Зазвичай в таких дискусіях доводиться вдаватись до аргументації. `,
            `Дані, зібрані в одному місці (наприклад, на цьому сайті) і доступні в будь який час - значно спрощують цю роботу. `,
            `Також статті допомагають не тримати всю інформацію в голові, а також оновлювати і доповнювати її. `,
            `Ну і сам процес написання дозволяє краще розібратись в темі і підтвердити або спростувати мої висновки. `,
        ),
        s.paragraph(
            `Теми яких я торкаюсь зазвичай є непомітними і я про це в курсі. `,
            `Мені прикро що так мало людей знає про них і ще менша кількість людей переймаються ними. `,
            `Можливо, якщо кількість матеріалів які стосуються цих тем буде більшою - ситуацію можна буде змінити. `,
        ),
    ),
);


const x = p.template(
    exports.Title.Text,
    p.document(exports),
);

fs.createWriteStream(`index.html`).end(x.Html5.toString());
