import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts";

const note_attributes = note(`Мається на увазі те, що усі вершини об'єкта повинні володіти одними й тими ж властивостями, при цьому значення цих властивостей можуть відрізнятись. `, `Наприклад, властивість "колір" не може бути надана лише частині вершин об'єкту, нею можуть володіти або всі вершини, або жодної. `, `При цьому можлива ситуація, коли всі вершини об'єкту мають властивість "колір", але для частини вершин вона рівна нулю. `)
const note_gpu = note(`Графічний прискорювач - лише одна з популярних і часто вживаних назв. `, `Також можна зустріти терміни графічний процесор, відеоадаптер або GPU - Graphics Processing Unit. `)
const z_order = ``
const z_fighting = ``
const shadow_aliasing = ``

export default article([ `Програмування комп'ютерної графіки. `, `Вступ. ` ], {}, ...[
    section(`Завдання комп'ютерної графіки.`, ...[
        paragraph(...[
            sentence(`Основним завданням комп'ютерної графіки є побудова зображень з використанням обчислювальної техніки. `),
            sentence(`Існує безліч способів зробити це, тому при виборі конкретного підходу керуються насамперед вимогами до зображення, які бувають дуже різними. `),
            sentence(`Наприклад, графіка в комп'ютерних іграх може мати значно нижчу якість ніж в кінематографі, але при цьому для ігрового сектору важлива стабільність кадрів і швидкодія. `),
            sentence(`На противагу цьому, в кінематографі один кадр може будуватись кілька годин і це повністю прийнятно, адже головним критерієм є якість картинки. `),
            sentence(`Найбільш поширеними критеріями є вже згадані раніше якість зображення та швидкодія але існують й інші. `),
            sentence(`Деколи важлива переносимість обраного підходу на інші платформи або його масштабованість, деколи важливо, щоб зображення виглядало гарно, але не дуже важлива його коректність, а деколи існують обмеження на обсяг пам'яті чи ємність батареї. `),
        ]),
        paragraph(...[
            sentence(`Набір вимог який висувається до кінцевого зображення а також історичний спадок розвитку обчислювальної техніки формують основу для того, як з графікою працюють сьогодні. `),
            sentence(`Основними і найпопулярнішими ідеями які визначають напрямок індустрії є:`),
        ]),
        list(...[
            [
                sentence(`Зображення виводиться на прямокутний екран який складається з квадратних пікселів. `),
                sentence(`Кожен піксель заповнений суцільним кольором і цей колір змінюється одночасно для усіх пікселів, а будь яка ілюзія руху досягається зміною кадрів. `),
                sentence(`Різні екрани відрізняються різною кількістю пікселів, максимальною частотою зміни кадрів, глибиною кольору та іншим. `),
            ],
            [
                sentence(`Графічні об'єкти що виводяться на екран представлені у вигляді набору багатокутників (найчастіше трикутників). `),
                sentence(`Багатокутники формуються з вершин, а вони, в свою чергу, описуються набором властивостей спільних для усього об'єкту`, note_attributes, `. `),
                sentence(`Основне призначення багатокутників - опис форми об'єкту, його контурів. `),
            ],
            [
                sentence(`Для деталізації об'єктів, опису їх поверхні і рельєфу використовуються текстури. `),
                sentence(`Текстури розділяють на 1-, 2- та 3-вимірні а також кубічні текстури. `),
                sentence(`Вони представлені у вигляді набору форматованих даних (наприклад, колір) розбитих на текселі, канали та шари. `),
            ],
            [
                sentence(`Виводом графіки займається графічний прискорювач`, note_gpu, `. `),
                sentence(`Його архітектура спроектована таким чином, щоб дозволяти йому ефективно працювати над завданнями пов'язаними з графічними обчисленнями. `),
                sentence(`Зокрема, до цього можна віднести як паралельний спосіб обробки даних так і спосіб зберігання та звернення до них. `),
            ],
            [
                sentence(`Для програмування графічних операцій використовують графічні інтерфейси. `),
                sentence(`Вони виступають проміжною ланкою між програмою якій необхідно побудувати зображення та апаратним забезпеченням (графічним прискорювачем), яке це зображення безпосередньо будує. `),
                sentence(`Графічні інтерфейси надають доступ до апаратних ресурсів за допомогою набору абстракцій. `),
                sentence(`Ці абстракції дозволяють до певної міри з однієї сторони не залежати від деталей апаратної реалізації графічних обчислень, а з іншої сторони дозволяють апаратній частині виконувати ці обчислення ефективно. `),
            ],
        ]),
    ]),
    section(`Особливості роботи з комп'ютерною графікою. `, ...[
        paragraph(...[
            sentence(`Робота з графікою наповнена великою кількістю особливостей, які не дуже часто зустрічаються в інших областях. `),
            sentence(`В першу чергу сюди можна віднести особливості пов'язані з алгоритмами і структурами даних. `),
            sentence(`Наприклад, через паралельну природу графічного прискорювача не всі алгоритми сортування будуть працювати на ньому настільки ж ефективно, як і на центральному процесорі. `),
            sentence(`З іншого боку, через особливості графічного конвеєра та виводу графіки в цілому, можуть використовуватись деякі нестандартні структури для зберігання даних, зокрема `, link(`Z-порядок`, z_order), `. `),
        ]),
        paragraph(...[
            sentence(`Також робота з графікою потребує деякого знання фізики та математики. `),
            sentence(`Першим необхідним інструментом в цій роботі є базове розуміння лінійної алгебри та знання того, як працювати з векторами та матрицями. `),
            sentence(`Це пов'язано з тим, що майже всі дані в графіці представлені у вигляді векторів, а перетворення у вигляді матриць. `),
            sentence(`Наприклад, колір є вектором з трьох компонент - інтенсивності світла в червоній, зеленій та синій частинах спектрів, а позиція вершини - дво- або трикомпонентний вектор. `),
            sentence(`Розташування та орієнтація об'єктів зазвичай описується у вигляді матриць перетворення, а застосування цих перетворень до вершин є звичайним множенням матриць на вектори. `),
            sentence(`Фізика ж починає бути важливою тоді, коли мова заходить про розрахунок освітлення, адже доводиться проводити розрахунки виходячи з реальних фізичних моделей цих процесів, хоч деколи і спрощених. `),
        ]),
        paragraph(...[
            sentence(`Далеко не останнім є і вміння працювати з людським фактором, адже в кінцевому результаті створене зображення в основному сприймають людські очі. `),
            sentence(`Велика кількість прийомів та трюків націлені в першу чергу на те аби зробити кінцеву картинку привабливішою для людини, при цьому уникнувши складних математичних обчислень. `),
            sentence(`Це можуть бути несправжні тіні від об'єктів задля скорочення витрат на повторне виведення сцени або не деталізовані системи частинок, які виглядають не надто реалістично, але існують настільки недовго і займають настільки невелику частину екрану, що на практиці цей брак деталей ніхто не помічає. `),
            sentence(`Також існує велика кількість вад, які притаманні лише комп'ютерній графіці і вносять значний вклад саме на етапі людського сприйняття. `),
            sentence(`Наприклад, `, link(`z-fighting`, z_fighting), ` або `, link(`ефект зубчатих тіней`, shadow_aliasing), `. `),
        ]),
        paragraph(...[
            sentence(`Зрештою, так чи інакше самі обчислення проводяться саме графічним прискорювачем, який, по-перше, не є центральним процесором, а, по-друге, часто взагалі є фізично відокремленим від нього самостійним компонентом. `),
            sentence(`У нього є своя оперативна пам'ять, свій кеш, свій центральний процесор, свої ядра та своя робоча частота, з чого і випливають особливості роботи з ним. `),
            sentence(`Наприклад, для того аби прискорювач міг звернутись до даних їх потрібно завантажити в його оперативну пам'ять, а для того аби він міг їх обробити - в його оперативну пам'ять потрібно завантажити програму для їх обробки. `),
            sentence(`Сама ідея паралельних обчислень, що лежить в основі графічного прискорювача породжує проблеми синхронізації, коли декілька ядер одночасно звертаються до одних і тих же даних. `),
            sentence(`Ну і не варто забувати, що графічний прискорювач це все ж окремий пристрій, яким до того ж може користуватись не лише ваша програма. `),
            sentence(`Потрібно зважати на потребу його постійної синхронізації з центральним процесором, а також на модель роботи з ним за типом клієнт-сервер. `),
        ]),
    ]),
])
