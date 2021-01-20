import React from 'react'
import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts";

const i = fig(`i`)
const p = fig(`p`)

class ScreenResolutions extends React.Component {
    public render() {
        class Resolution {
            readonly name : string
            readonly width : number
            readonly height : number

            public constructor({ name, width, height } : { name : string, width : number, height : number }) {
                this.name   = name
                this.width  = width
                this.height = height
            }

            public get pixels() {
                return this.width * this.height
            }
        }

        const resolutions = [
            {
                name   : 'VGA',
                width  : 640,
                height : 480,
            },
            {
                name   : 'FullHD',
                width  : 1920,
                height : 1080,
            },
            {
                name   : `QHD`,
                width  : 2560,
                height : 1440,
            },
        ].map(x => new Resolution(x))

        const max_width = Math.max(...resolutions.map(({ width }) => width))
        const max_height = Math.max(...resolutions.map(({ height }) => height))
        const border = Math.min(max_width, max_height) * 0.01
        const width = max_width
        const height = max_height

        return (
            <svg width='600px' viewBox={`${-border} ${-border} ${width + border*2} ${height + border*2}`} style={{ backgroundColor : `blue` }}>
                {
                    resolutions
                        .sort((a, b) => b.pixels - a.pixels)
                        .map(({ name, width, height }, index) =>
                            <>
                                <rect
                                    key={index}
                                    x={-border/2}
                                    y={-border/2}
                                    width={width + border}
                                    height={height + border}
                                    style={{
                                        fill : 'red',
                                        stroke : 'black',
                                        strokeWidth : border,
                                    }}
                                />
                                <text
                                    x={width}
                                    y={height}
                                    style={{
                                        dominantBaseline : 'text-after-edge',
                                        textAnchor : 'end',
                                        fontSize : '100pt',
                                    }}
                                >
                                    {name}
                                </text>
                                <text
                                    x={width/2}
                                    y={height}
                                    style={{
                                        dominantBaseline : 'text-after-edge',
                                        textAnchor : 'middle',
                                        fontSize : '50pt',
                                    }}
                                >
                                    {width}
                                </text>
                            </>
                        )
                }
            </svg>
        )
    }
}

export default article([ `Програмування комп'ютерної графіки. `, `Екран, пікселі та колір. ` ], {}, ...[
    section(`Екран. `, ...[
        paragraph(...[
            sentence(`Після того як зображення побудоване настає час вивести його на екран. `),
            sentence(`Варто зауважити, що ті екрани з якими ми зіштовхуємось в повсякденному житті не повністю відповідають тим абстракціям, з якими працюють при програмуванні графіки. `),
            sentence(`Ці відмінності не дуже суттєві, але все ж деколи варто про них пам'ятати. `),
            sentence(`І щоб не заплутатись в цій статті ми будемо розділяти екрани на `, fig(`реальні`), `, які існують в нашому з вами світі та `, fig(`віртуальні`), `, які є лише певною абстракцією з якою зручно працювати в графіці. `),
        ]),
        paragraph(...[
            sentence(`Віртуальний екран є прямокутною регулярною сіткою, що складається з квадратних пікселів. `),
            sentence(`Хоча бувають і квадратні екрани, все ж зазвичай відношення їх сторін складає 16:9 або, хоча б 4:3. `),
            sentence(`Воно не випадкове і частково пов'язане з відношеннями сторін, які використовують в кіно, яке, в свою чергу, частково опирається на особливості людського зору. `),
            sentence(`Всі пікселі на сітці екрану однаково вирівняні, їх кількість по горизонталі, вертикалі і в сумі завжди є цілою і всі вони займають однакову площу. `),
            sentence(`В цьому плані найкращою характеристикою екрану є його роздільна здатність, яка зазвичай вимірюється в мегапікселях (мільйонах пікселів) і рівна загальній кількості пікселів. `),
        ]),
        paragraph(...[
            sentence(`Багато популярних роздільних здатностей мають свої власні назви. `),
            sentence(`Наприклад, роздільна здатність VGA становить 640 пікселів по горизонталі та 480 по вертикалі. `),
            sentence(`Ще одним прикладом є найпопулярніша сьогодні роздільна здатність FullHD, сторони якої складаються з 1920 і 1080 пікселів відповідно. `),
            sentence(`Деколи говорячи про FullHD її можуть називати 1080p або 1080i, а, наприклад, QHD зі сторонами 2560 і 1440 пікселів - 1440p. `),
            sentence(`Це частково пов'язано зі стандартами роздільних здатностей для телевізійних сигналів, де закінчення `, i, ` та `, p, ` вказують на характер передачі даних про окремий кадр. `),
            // @todo: перевірити
            sentence(`У випадку, якщо кадр передається двома порціями, кожна з яких містить рядки що попарно чергуються, використовується закінчення `, i, ` - interlaced (англ. "переплетений", чергування рядків), а у випадку повної передачі за один раз - `, p, ` - progressive (англ. передовий, без чергування рядків). `),
            sentence(`Для віртуальних екранів зазвичай це немає жодного значення, оскільки в більшості випадків при виводі на віртуальний екран передається уся інформація про кадр. `),
        ]),
        // illustration(``, ScreenResolutions)
    ]),
    section(`Пікселі. `, ...[
        paragraph(...[
            sentence(`На відміну від `, fig(`віртуальних`), ` пікселів, `, fig(`реальні`), ` не завжди можуть бути розташовані регулярною сіткою, однаково вирівняні, мати квадратну форму чи навіть бути заповнені суцільним кольором. `),
            sentence(`Їх кількість теж може відрізнятись від кількості віртуальних пікселів і це сильно залежить від того, які принципи лежать в основі випромінювання світла конкретним монітором. `),
            sentence(`Тому, говорячи про роздільну здатність її можна трактувати як певну міру зернистості зображення, яку в середньому буде спостерігати людина на робочій для конкретного монітора відстані. `),
            sentence(``),
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
    ]),
    section(``, ...[
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
    ]),
])
