const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    link,
    list,
    sentence,
    // emphasis,
    // figurative,
    // link,
    note,
    // illustration,
    // js,
    // kw,
    // v,
    // f,
    // c,
    // p,
    // lt,
    // cm,
} = s;

const ageia = `https://en.wikipedia.org/wiki/Ageia`;
const tpu = `https://en.wikipedia.org/wiki/Tensor_processing_unit`;
const epyc = `https://www.amd.com/en/processors/epyc-7002-series`;
const threadripper = `https://www.amd.com/en/products/cpu/amd-ryzen-threadripper-3990x`;
const dx = `https://uk.wikipedia.org/wiki/DirectX`;
const d3d = `https://uk.wikipedia.org/wiki/Direct3D_10`;
const ogl = `https://uk.wikipedia.org/wiki/OpenGL`;
const gles = `https://uk.wikipedia.org/wiki/OpenGL_ES`;
const glsc = `https://en.wikipedia.org/wiki/OpenGL_SC`;
const webgl = `https://uk.wikipedia.org/wiki/WebGL`;
const vk = `https://uk.wikipedia.org/wiki/Vulkan_(API)`;


exports = module.exports = new h.DocumentResource({
    Document : document([sentence(`Програмування комп'ютерної графіки. `), sentence(`Вступ.`) ], {},
        section(`Завдання та підходи.`, ...[
            paragraph(...[
                sentence(`Сьогодні комп'ютерну графіку можна розглядати як окрему область знань і на це є вагомі причини. `),
                sentence(`Завдання, які стоять перед розробниками цієї сфери дуже специфічні і вимагають особливих підходів для свого вирішення. `),
                sentence(`Можна висловитись так: цієї роботи дуже багато, вона дуже одноманітна, виконувати її потрібно швидко, але в багатьох місцях можна піти на хитрощі. `),
                sentence(`Зараз поясню. `),
            ]),
            paragraph(...[
                sentence(`Почнемо з кількості. `),
                sentence(`Основними різновидами примітивів з якими сьогодні працює графіка є вершини та пікселі. `),
                sentence(`З вершин складаються об'єкти, що виводяться на екран, а той, в свою чергу, складається з пікселів. `),
                sentence(`В тій чи іншій мірі кожну вершину потрібно обробити, а для коженого пікселя встановити потрібний колір. `),
                sentence(`І кількість цих вершин та пікселів - величезна! `),
            ]),
            paragraph(...[
                sentence(`Навіть старі за сучасними мірками монітори з роздільною здатністю 320х240 усього мали 76 800 пікселів. `),
                sentence(`Відносно стандартні сьогодні FullHD монітори мають роздільну здатність 1920х1080, а це вже 2 073 600 пікселів! `),
                sentence(`Але й це не межа, тому що їх поступово витісняють формати QHD (2560x1440), 4K UHD (3840x2160) та 8K UHD (7680х4320)`, note([ `Як, не дивно, це в першу чергу помітно на ринку мобільних пристроїв та телевізійної техніки. `, `Велика кількість флагманських смартфонів має роздільну здатність QHD або вище, а 4K телевізори поступово стають новим стандартом на ринку.` ]), `. `),
                sentence(`Монітори з такими форматами складаються з 3 686 400, 8 294 400 та 33 177 600 пікселів відповідно! `),
                sentence(`І для кожного пікселя на кожному кадрі потрібно розрахувати відповідний йому колір. `),
            ]),
            paragraph(...[
                sentence(`Вершини - така ж болюча тема як і пікселі, якщо говорити про їх кількість. `),
                sentence(`Моделі, що використовуються в комп'ютерній графіці сьогодні, містять десятки-сотні тисяч вершин, а подекуди мільйони і навіть мільярди`, note([ `Важливо підкреслити те, що в залежності від напрямку і потреб це число може суттєво змінюватись. `, `Об'єкти переднього плану в іграх можуть мати мільйони вершин, а дрібні, ледь помітні деталі - сотні вершин, або взалагі виводитись спеціальними техніками що їх не потребуюють. `, `У той же час моделі, що використовуються в кінематографі, можуть займати на дисках цілі терабайти. ` ]), `. `),
                sentence(`Самих моделей на екрані теж може бути безліч: тисячі і десятки тисяч. `),
                sentence(`І кожну вершину кожної моделі теж потрібно правильно обробити на кожному кадрі. `),
            ]),
            paragraph(...[
                sentence(`Друга важлива особливість - це швидкість. `),
                sentence(`Монітори оновлюють зображення на екрані десятки і сотні разів в секунду. `),
                sentence(`Нижня межа сьогодні - це 30 FPS (Frames Per Second - кадрів у секунду), або 30 Гц `, note([ `З цим також пов'язаний міф про те, що людське око не здатне вловлювати більше ніж 24 кадри за секунду. `, `Це далеко не так. ` ]), `. `),
                sentence(`Але вона дуже погано ілюструє справжню ситуацію на ринку, адже охоплює лише старі телевізори та ігрові консолі які й виводили на них зображення. `),
                sentence(`Також, потребу у високій частоті оновлення може поставити під сумнів той факт, що деякі сучасні браузери не здатні забезпечити плавну прокрутку на деяких сайтах, але це вже тема іншої розмови... `),
            ]),
            paragraph(...[
                sentence(`Сьогодні умовним стандартом (і то у певній мірі застарілим) можна вважати частоту оновлення екрану в 60 Гц. `),
                sentence(`Але для багатьох динамічних ігор, таких як стрілялки, гонки або боротьба - цього може бути катастрофічно мало. `),
                sentence(`Такі жанри часто вимагають частоту близьку до 100-120 Гц і навіть особливі пристрої вводу `, note([ `Наприклад, ігрові миші з високою точністю і зменшеною затримкою реакції, або клавіатури що підтримують одночасне зчитування великої кількості клавіш. ` ]), ` які здатні забезпечити достатньо швидку реакцію. `),
                sentence(`Але сьогоднішні ігрові монітори йдуть ще далі, пропонуючи частоту 144 Гц, 240 Гц та шалені 360 Гц. `),
                sentence(`Можна лише уявити собі комп'ютерну графіку майбутнього, де стандартом є 8К монітор з частотою 360 Гц. `),
                sentence(`А це, увага, заповнення кольором 11 943 936 000 пікселів в секунду! `),
                sentence(`12 мільярдів, Карл! `),
            ]),
            paragraph(...[
                sentence(`Але не все так погано. `),
                sentence(`Це були дві не надто приємні особливості, які погіршують нам життя, але є й хороші. `),
                sentence(`По-перше, на щастя для нас, алгоритми для розрахунку кольору пікселя та перетворення вершин об'єкта не сильно відрізняються для різних пікселів та вершин. `),
                sentence(`Іншими словами, в більшості випадків переважна більшість вершин чи пікселів обробляються одним і тим же алгоритмом. `),
                sentence(`Часто, навіть кількість кроків алгоритму для різних пікселів збігається, відрізняються лише вхідні дані. `),
                sentence(`Ще доволі часто ці алгоритми або не вимагають для обробки одного пікселя чи вершини інформацію про їх сусідів, або потребують її в дуже обмеженій мірі. `),
                sentence(`Така особливість - коли колір одного пікселя не залежить від кольору іншого - дозволяє зробити їх обробку паралельною. `),
            ]),
            paragraph(...[
                sentence(`Друга хороша новина пов'язана з тим, що в переважній більшості випадків споживачами кінцевого продукту є звичайні люди. `),
                sentence(`Можливості людей, а особливо їх увага, дуже обмежені. `),
                sentence(`Якщо відтінок кольору чи розташування об'єкта на екрані будуть відрізнятись від "правильних" не надто сильно, ніхто цього не помітить. `),
                sentence(`Навіть якщо тінь від персонажа на землі не буде повторювати його контури досконало, або навіть просто буде розмитою плямою - зображення в цілому може виглядати досить прийнятно. `),
                sentence(`Навіть якщо розсіяне світло на об'єктах буде розраховане за спрощеною формулою або в зниженій точності - всім буде байдуже, адже більшість навіть не знає терміну розсіяне світло. `),
                sentence(`Такі занижені вимоги до процесу обчислення суттєво спрощують роботу, адже дозволяють використовувати простіші з точки зору продуктивності алгоритми. `),
            ]),
            paragraph(...[
                sentence(`Отже, підсумуємо. `),
                sentence(`Програмування комп'ютерної графіки пов'язане з обробкою великої кількості об'єктів багато разів за секунду. `),
                sentence(`На щастя, часто ці обчислення є дуже однотипними, легко розпаралелюються та не вимагають високої точності. `),
                sentence(`Такі особливості призвели до того, що сьогодні для роботи з графікою використовують спеціалізоване обладняння - графічні прискорювачі. `),
                sentence(`Або, по-простому, відеокарти. `),
            ]),
        ]),
        section(`Графічний прискорювач.`, ...[
            paragraph(...[
                sentence(`Попри те, що графічні прискорювачі створювались з розрахунком на графіку, сьогодні вже дуже важко називати їх "графічними". `),
                sentence(`На противагу CPU `, note(`Central Processing Unit - центральний обчислюючий пристрій`), ` графічні прискорювачі та GPU `, note(`Graphics Processing Unit - пристрій обчислення графіки`), ` на їх борту в першу чергу націлені на активне використання паралельних обчислень та спеціальних апаратних можливостей. `),
                sentence(`Але окрім графіки, з кожним роком відеокарти беруть на себе все більше зобов'язань. `),
            ]),
            paragraph(...[
                sentence(`У 2004 році `, link(`Ageia`, ageia), ` почала роботу над спеціалізованим апаратним забезпеченням для обчислення фізики - PPU `, note(`Physics Processing Unit - пристрій обчислення фізики`), `. `),
                sentence(`Вже у 2008 їх поглинула NVidia і розрахунком фізики почав займатись PhysX на їх відеокартах. `),
                sentence(`У 2015 Google почала роботу над `, link(`TPU`, tpu), note(`Tensor Processing Unit - пристрій обчислення тензорів`), ` для прискорення обчислень у сфері машинного навчання, але сьогодні відеокарти вміють і це. `),
                sentence(`Однією з останніх областей в яких графічні прискорювачі пустили своє коріння стала технологія трасування променів, як альтернатива популярним сьогодні підходам до побудови зображень. `),
                sentence(`А ще на них можна відносно ефективно майнити деякі криптовалюти. `),
            ]),
            paragraph(...[
                sentence(`Такий стан справ пов'язаний з архітектурою GPU, яка сильно відрізняється від архітектури CPU. `),
                sentence(`В першу чергу GPU відрізняються кількістю і якістю своїх ядер. `),
                sentence(`Навіть найсучасніші CPU складаються з відносно невеликої кількості ядер - кількох десятків. `),
                sentence(`Станом на початок 2020 року одними з найбагатших на ядра процесорами що доступні широкій аудиторії можна вважати `, link(`EPYC`, epyc), ` та `, link(`Threadripper`, threadripper), ` від AMD, кожен з них складається з 64-ох ядер. `),
                sentence(`Але це важко порівнювати з сучасними GPU, кількість ядер у яких вимірюється тисячами. `),
                sentence(`Так, наприклад, NVidia RTX TITAN усього містить 4608 ядер CUDA. `),
            ]),
            paragraph(...[
                sentence(`Звичайно, говорячи про GPU мова йде про зовсім інші ядра, призначені для іншого роду обчислень. `),
                sentence(`Ядра CPU в першу чергу багатофункціональні і добре підходять для послідовних обчислень. `),
                sentence(`І це важливо для CPU, адже в число його обов'язків входить обробка вводу, керування периферією (у тому числі й відеокартою), дисками, мережею та інше. `),
                sentence(`З цієї точки зору ярда CPU можна вважати дорогими і швидкими, а тому, не зважаючи на здатність виконувати дуже різні завдання, розмістити велику їх кількість на одному процесорі не вийде . `),
                sentence(`Натомість, GPU бере кількістю. `),
                sentence(`Їх ядра зазвичай підтримують коротші набори інструкцій, мають нижчу частоту, зате набагато дешевші, а отже і розмістити їх можна більше. `),
                sentence(`Вони можуть виконувати одну і ту ж інструкцію паралельно, синхронізувати їх легше, а це означає, що доки одне ядро CPU обчислить суму двох чисел, сотня ядер GPU обчислить сотню таких сум. `),
                sentence(`Навіть якщо ці ядра будуть повільніші в 10 разів, разом вони все одно виконають за однаковий час в десятеро більшу роботу. `),
            ]),
            paragraph(...[
                sentence(`Графічні прискорювачі можна умовно розділити на дві категорії: дискретні та інтегровані. `),
                sentence(`Дискретні - виконані як окремі пристрої з власною пам'яттю, доволі часто з додатковим живленням і охолодженням. `),
                sentence(`Зазвичай вони з'єднані з CPU через материнську плату за допомогою швидкісного інтерфейсу (наприклад, PCIe), на відміну від жорстких дисків (HDD), що часто під'єднані через значно повільніші канали передачі даних (наприклад, SATA). `),
                sentence(`Таку відеокарту відносно легко замінити, а також вона не обмежена енергетичними ресурсами CPU, тому що сама може себе живити і охолоджувати. `),
                sentence(`Дискретні відеокарти зазвичай є дуже продуктивними, дорогими і переважно встановлюються там, де енергоефективність не є пріоритетною. `),
                sentence(`Їх часто використовують в ігрових комп'ютерах, консолях а також в інформаційних центрах і суперкомп'ютерах. `),
            ]),
            paragraph(...[
                sentence(`Інтегровані відеокарти розміщуються на материнській платі або на одному кристалі з CPU. `),
                sentence(`Вони, буквально, вбудовані в систему, а тому їх не можна замінити і вони майже завжди використовують для роботи ту ж оперативну пам'ять, що і CPU. `),
                sentence(`Це накладає багато обмежень, оскільки на такій невеликій ділянці простору вже не вийде вмістити багато обчислювальної потужності. `),
                sentence(`Також, інтегровані відеокарти не можуть споживати стільки ж енергії і розсіювати стільки ж тепла як дискретні, тому що "конкурують" за ці ресурси з CPU. `),
                sentence(`Попри це вони часто бувають компактні, тихі, енергоефективні, а використання спільної пам'яті не вимагає витрат на передачу даних між різними фізичними пристроями, як у випадку дискретних відеокарт. `),
                sentence(`Такі відеокарти використовуються в ноутбуках, смартфонах та офісних комп'ютерах, тобто в системах де важлива енергоефективність, невеликі розміри та не вимагається висока продуктивність. `),
            ]),
            paragraph(...[
                sentence(`Тут теж варто підбити проміжні підсумки. `),
                sentence(`Зокрема, відеокарти - це спеціальні пристрої обладнані графічними процесорами (GPU). `),
                sentence(`Вони призначені для проведення паралельних обчислень, що й дозволяє застосовувати їх в графіці, але не обмежує лише цим. `),
                sentence(`Дуже часто відеокарти є фізично відокремлені від CPU, а це потребує додаткових витрат на синхронізацію та передачу даних. `),
                sentence(`Зрештою, відеокарти бувають дуже різними і працюють на різних платформах. `),
                sentence(`Було б дуже неефективно писати окремий код для роботи з різними відеокартами, а тому для роботи з графікою ми будемо використовувати графічні інтерфейси. `),
            ]),
        ]),
        section(`Графічний інтерфейс.`, ...[
            paragraph(...[
                sentence(`Сьогодні комп'ютерна графіка використовується майже всюди, і перед тим як рухатись далі хотілося б окреслити це "всюди" трохи конкретніше. `),
                sentence(`Існує безліч факторів які відрізняють одну кінцеву платформу на якій виводиться графіка від іншої, ось лише деякі з них:`),
            ]),
            list(...[
                [
                    sentence(`Виробник відеокарти. `),
                    sentence(`Сьогодні на ринку існує три компанії що займаються розробкою відеокарт, це NVidia, AMD та Intel. `),
                    sentence(`Усі вони в більшій чи меншій мірі відрізняються за призначенням та можливостями. `),
                    sentence(`У той час як NVidia займається лише дискретними відеокартами, AMD випускають як дискретні відеокарти, так і власні процесори з інтегрованою енергоефективною графікою. `),
                    sentence(`Intel, натомість, працюють лише над центральними процесорами, деякі з яких мають інтегровані GPU. `),
                ],
                [
                    sentence(`Апаратне устаткування. `),
                    sentence(`Графіка потрібна і на настільних комп'ютерах, і на ноутбуках, і на планшетах, і на ігрових консолях, і на смартфонах, і навіть на телевізорах чи спеціалізованому обладнанні. `),
                    sentence(`Усі ці різновиди техніки сильно відрізняються за продуктивністю та апаратними можливостями. `),
                    sentence(`Ноутбуки, планшети та смартфони в силу своєї мобільності стараються бути ощадливими в плані енергозатрат, ігрові консолі мають незмінне апаратне забезпечення, а настільні комп'ютери можуть бути як офісними, так й ігровими. `),
                ],
                [
                    sentence(`Операційна система. `),
                    sentence(`В цю категорію потрапляють не лише ОС для настільних комп'ютерів, такі як Windows, Linux та MacOS, але й ОС для мобільних пристроїв: Android та iOS. `),
                    sentence(`Також сюди можна включити браузери Firefox, Opera, Chrome та інші, оскільки в них теж існує потреба у високопродуктивній графіці. `),
                ],
            ]),
            paragraph(...[
                sentence(`Таким чином, кількість всеможливих комбінацій досить велика. `),
                sentence(`Графіка потрібна як на настільному комп'ютері з дискретною відеокартою NVidia, так і на ноутбуці з інтегрованою Intel, а також на Play Station 4, смартфоні з Android чи iOS, або навіть у браузері всередині майже будь-якої з перерахованих платформ. `),
                sentence(`Звичайно, в деяких випадках у нас просто немає виходу окрім як переписати існуючий код під іншу платформу. `),
                sentence(`Але якщо мова йде лише про різні моделі відеокарт, різних виробників, або, у деяких випадках, різні ОС - можна піти навпростець. `),
                sentence(`Для цього і потрібні графічні інтерфейси. `),
            ]),
            paragraph(...[
                sentence(`Згрубша, графічний інтерфейс (GAPI) це набір абстракцій - зазвичай функцій і структур даних - з якими розробники працюють замість того, щоб працювати з відеокартою напряму. `),
                sentence(`Реалізація цих абстракцій зазвичай забезпечується або розробниками драйверів відеокарти, або розробниками бібліотек, таких як DirectX. `),
                sentence(`Після цього, ми можемо, скажімо, попросити графічний інтерфейс намалювати трикутник, а його реалізація в драйвері виконає за нас усі потрібні дії на GPU. `),
            ]),
            paragraph(...[
                sentence(`Сьогодні існує щонайменше чотири популярних графічних інтерфейси - DirectX, OpenGL, Vulkan, Metal - кожен з яких охоплює свою нішу серед плафторм. `),
                sentence(`В першу чергу це сімейство інтерфейсів `, link(`DirectX`, dx), note(sentence(`Варто зазначити, що саме графічним API в першу чергу варто вважати не сам DirectX, а лише його підмножину - `, link(`Direct3D`, d3d), `. `)), `, серед версій котрих можна виділити 10-у, 11-у, 12-у та 12 Ultimate. `),
                sentence(`Ці графічні інтерфейси розробляються Microsoft і в першу чергу призначені для їх же продуктів: ОС Windows та ігрової консолі XBox. `),
                sentence(`DirectX немає на Linux чи Android, а також він не є зворотно-сумісним, тобто кожна наступна версія згрубша потребує переписування коду під нову бібліотеку. `),
                sentence(`Також, DirectX 12 сумісний лише з Windows 10. `),
            ]),
            paragraph(...[
                sentence(`На противагу DirectX, сімейство графічних інтерфейсів OpenGL здебільшого є кросплатформовим, зворотно-сумісним та підтримується некомерційною організацією Khronos Group. `),
                sentence(`Сам OpenGL має декілька відгалужень з окремою версійністю, що покривають різні платформи і які, все ж, дуже схожі одне на одного. `),
                sentence(`Зокрема це сам `, link(`OpenGL`, ogl), `, призначений для Windows, Linux та MacOS, `, link(`OpenGL ES`, gles), note(`OpenGL for Embedded Systems - OpenGL для вбудованих систем. `), ` для Android та деяких консолей, `, link(`OpenGL SC`, glsc), note(`OpenGL for Safety Critical applications - OpenGL для систем з високими вимогами безпеки. `), ` для військової, промислової та медичної техніки і `, link(`WebGL`, webgl), ` для браузерів. `),
                sentence(``),
            ]),
            paragraph(...[
                sentence(`Останні два GAPI - Vulkan та Metal - разом з DirectX 12 можна назвати відносно прогресивними. `),
                sentence(`Усі вони в певній мірі є нащадками графічного інтерфейсу Mantle від AMD, який поклав початок нової ери в комп'ютерній графіці, суттєво змінивши підходи до її розробки і піднявши поріг входження в неї. `),
                sentence(link(`Vulkan`, vk), ` є наступником OpenGL і підтримується тією ж Khronos Group. `),
                sentence(`Як і OpenGL він є крос-платформовим та працює на Windows, Linux та Android. `),
                sentence(`Metal, як і DirectX, є розробкою Apple для власних продуктів - MacOS та iOS - та працює лише на них. `),
            ]),
            paragraph(...[
                sentence(`Отож, графічні інтерфейси є абстракцією, проміжним рівнем між залізом та програмістом графіки. `),
                sentence(`Вони дозволяють суттєво скоротити кількість того коду, який потрібно переписати при переході від однієї платформи до іншої. `),
                sentence(`Але вони не позбавлені недоліків. `),
                sentence(`Навіть сьогодні не існує єдиного графічного інтерфейсу і всеможливі платформи розподілені поміж декількох найпопулярніших GAPI, їх відгалужень та навіть окремих версій. `),
                sentence(`І може здаватись, що за такої кількості існуючих рішень нівелюється сама ідея інтерфейсів - проміжна абстракція. `),
                sentence(`Що ж, частково це так. `),
                sentence(`Але ситуацію рятує той факт, що майже всі графічні інтерфейси дуже схожі між собою. `),
                sentence(`Більшість з них користується одними і тими ж абстракціями, які сформувались на протязі довгих років спроб і помилок. `),
                sentence(`Ці абстракції можна умовно назвати конвеєрами, а конвеєр з якого ми почнемо вивчення комп'ютерної графіки називається графічним конвеєром. `),
            ]),
        ]),
        section(`Графічний конвеєр.`, ...[
            paragraph(...[
                sentence(`Графічний конвеєр - це стандартизований підхід до виводу графічних примітивів на екран. `),
                sentence(`В тій чи іншій мірі він підтримується усіма відеокартами та графічними інтерфейсами. `),
                sentence(`Конвеєр розбитий на окремі етапи, які можна умовно розділити на дві категорії: фіксовані та програмовані. `),
                sentence(`В той час як фіксовані етапи закриті від розробника і дозволяють налаштовувати лише дуже обмежений набір параметрів, програмовані етапи в прямому розумінні потребують написання спеціальних програм для їх роботи. `),
            ]),
            paragraph(...[
                sentence(`Графічний конвеєр пройшов довгий шлях аби стати таким, яким він є сьогодні. `),
                sentence(`По мірі еволюції додавались нові етапи, а деякі фіксовані етапи ставали програмованими. `),
                sentence(`З рештою, з'явились нові завдання, для яких добре підходила архітектура GPU, але погано підходила структура графічного конвеєра. `),
                sentence(`Це призвело до появи нових конвеєрів, зокрема обчислювального, трасувального та mesh shading pipeline. `),
            ]),
            paragraph(...[
                sentence(`Основними складовими графічного конвеєра сьогодні є буфери, текстури та шейдери. `),
                sentence(`Буфери слугують контейнерами для неструктурованих даних, до яких можна звертатись у різний спосіб та на різних етапах виконання конвеєра. `),
                sentence(`Текстури - це спеціальні контейнери, призначені для зберігання дуже особливих даних - зображень. `),
                sentence(`Шейдери - це програми, які виконуються на програмованих етапах графічного конвеєра та обробляють графічні примітиви. `),
                sentence(`Разом, вони вказують GPU що саме, як саме і куди саме потрібно виводити. `),
            ]),
        ]),
        section(`Підсумки.`, ...[
            paragraph(...[
                sentence(`Отож, що такого особливо в комп'ютерній графіці? `),
                sentence(`По-перше, програмування в цій сфері пов'язане з вирішенням досить специфічних завдань. `),
                sentence(`Ці завдання настільки специфічні, що для їх розв'язку доцільно використовувати спеціальне апаратне забезпечення - графічні прискорювачі. `),
                sentence(`По-друге, графіка потрібна на різних платформах, які часто дуже сильно відрізняються за усіма можливими характеристиками. `),
                sentence(`А тому, з точки зору повторного використання коду, є сенс працювати не з відеоприскорювачами напряму, а з посередниками - графічними інтерфейсами. `),
                sentence(`По-третє, графічних інтерфейсів хоч і значно менше ніж платформ, але вони мають низку версій, та і покривають платформи зовсім не рівномірно. `),
                sentence(`Але, на щастя для нас, більшість графічних інтерфейсів має багато спільного. `),
                sentence(`Усі вони в тій чи іншій мірі опираються на графічний конвеєр під капотом відеокарти. `),
                sentence(`Тому, якщо знати як влаштований графічний конвеєр можна доволі легко передбачити чого чекати від будь якого графічного інтерфейсу. `),
            ]),
        ]),
    ),
});
