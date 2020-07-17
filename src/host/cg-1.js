const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);

/**
 * Звідси можна натягати зображень: https://en.wikipedia.org/wiki/Pixel
 */

const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    sentence,
    note,
    illustration,
} = s;

const resolutions = illustration(`Порівняння роздільних здатностей, популярних сьогодні, в минулому та в найближчому майбутньому.`,
    new documenting.ImageIllustrationContent({ Url : `/media/cg-1/resolutions.svg` }),
);

exports = module.exports = new h.DocumentResource({
    Document : document([sentence(`Програмування комп'ютерної графіки. `), sentence(`Завдання, підходи та інструменти.`) ], {},
        section(`Що це за курс?`, ...[
            paragraph(...[
                sentence(`Цей курс присвячений вивченню сучасної комп'ютерної графіки та її програмуванню. `),
                sentence(`Основна його мета - дати вичерпне розуміння основних принципів та підходів, що використовуються в цій області. `),
                sentence(`Курс наповнений як теоретичними відомостями, так і прикладами програм, що демонструють використання цих знань на практиці.`),
            ]),
        ]),
        section(`Що таке комп'ютерна графіка?`, ...[
            paragraph(...[
                sentence(`Комп'ютерна графіка займається створенням зображень з використанням комп'ютерів. `),
                sentence(`Її можна виділити в окрему область знань і на це є вагомі причини. `),
                sentence(`Робота з зображеннями та, особливо, їх побудова, сильно відрізняються від інших завдань, що зустрічаються в світі програмування. `),
                sentence(`У цих завдань свої власні критерії для оцінки успіху, а тому для їх вирішення часто використовують особливі підходи, алгоритми та навіть апаратне забезпечення. `),
            ]),
            paragraph(...[
                sentence(`Одна з ключових особливостей комп'ютерної графіки - це обробка великої кількості однотипних об'єктів. `),
                sentence(`Основними такими об'єктами є вершини, з яких складаються зображувані фігури та пікселі, з яких складаються екрани моніторів. `),
                sentence(`Якщо мова йде про графіку реального часу, наприклад, в іграх, то з'являється ще одна серйозна особливість - швидкість побудови зображення. `),
                sentence(`Також є й інші чинники, такі як вимоги до якості та реалістичності зображення або обмеження використання пам'яті. `),
                sentence(`Все це сильно відрізняє роботу з графікою від, наприклад, роботи з базою даних, мережевим сервером чи розпізнаванням мови. `),
            ]),
        ]),
        section(`Виклик №1: вершини та пікселі.`, ...[
            paragraph(...[
                sentence(`Навіть старі за сучасними мірками монітори з роздільною здатністю 320х240 усього мають 76 800 пікселів. `),
                sentence(`Відносно стандартні сьогодні FullHD монітори мають роздільну здатність 1920х1080, а це вже 2 073 600 пікселів! `),
                sentence(`Але й це не межа, тому що їх поступово витісняють формати QHD (2560x1440), 4K UHD (3840x2160) та 8K UHD (7680х4320)`, note([ `Як, не дивно, це в першу чергу помітно на ринку мобільних пристроїв та телевізійної техніки. `, `Велика кількість флагманських смартфонів має роздільну здатність QHD або вище, а 4K телевізори поступово стають новим стандартом на ринку.` ]), `. `),
                sentence(`Монітори з такими форматами складаються з 3 686 400, 8 294 400 та 33 177 600 пікселів відповідно `, resolutions, `! `),
            ]),
            resolutions,
            paragraph(...[
                sentence(`Кожен такий піксель є окремим світловим елементом. `),
                sentence(`І для кожного пікселя на кожному кадрі потрібно розрахувати відповідний йому колір. `),
                sentence(`Саме лише зберігання такого зображення в нестисненій формі (а це майже 100Мб для формату 8K зі стандартною глибиною кольору) може бути проблемою, що вже говорити про його побудову. `),
            ]),
            paragraph(...[
                sentence(`Вершини - така ж болюча тема як і пікселі, якщо говорити про їх кількість. `),
                sentence(`Моделі, що використовуються в комп'ютерній графіці сьогодні, містять десятки-сотні тисяч вершин, а подекуди мільйони і навіть мільярди`, note([ `Важливо підкреслити те, що в залежності від напрямку і потреб це число може суттєво змінюватись. `, `Об'єкти переднього плану в іграх можуть мати мільйони вершин, а дрібні, ледь помітні деталі - сотні вершин, або взалагі виводитись спеціальними техніками що їх не потребуюють. `, `У той же час моделі, що використовуються в кінематографі, можуть займати на дисках цілі терабайти. ` ]), `. `),
                sentence(`Самих моделей на екрані теж може бути безліч: тисячі і десятки тисяч. `),
                sentence(`І кожну вершину кожної моделі теж потрібно правильно обробити на кожному кадрі. `),
            ]),
        ]),
    ),
});
