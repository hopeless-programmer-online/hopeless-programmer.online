const svg = document.currentScript.parentNode;

const stages = [
    `Збирання вершин`,
    `Обробка вершин`,
    [
        `Збірка контурів`,
        `Конфігурація розбиття`,
        `Розбиття`,
        `Обробка вершин`,
    ],
    `Попереднє збирання примітивів`,
    `Обробка примітивів`,
    [
        `Обтинання примітивів`,
        `Нормалізація координат`,
        `Перетворення області виводу`,
    ],
    `Відбраковування примітивів`,
    `Кінцеве збирання примітивів`,
    `Растеризація`,
    `Обробка фрагментів`,
    [
        `Ножичний тест`,
        `Тест трафарету`,
        `Тест глибини`,
        `Змішування`,
    ],
];

const X = 10;
const Y = 20;
const STAGE_WIDTH = 290;
const STAGE_HEIGHT = 20;
const STAGE_MARGIN = 6;

let y = Y;

function addStage(title) {
    const rect = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

    rect.classList.add(`hp-class-stage`);
    rect.setAttribute(`x`,      X);
    rect.setAttribute(`y`,      y);
    rect.setAttribute(`width`,  STAGE_WIDTH);
    rect.setAttribute(`height`, STAGE_HEIGHT);

    svg.appendChild(rect);

    const text = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

    text.appendChild(document.createTextNode(title));

    text.setAttribute(`x`, X + STAGE_WIDTH / 2);
    text.setAttribute(`y`, y + STAGE_HEIGHT * 0.5);

    svg.appendChild(text);

    y += STAGE_HEIGHT + STAGE_MARGIN;
}
function addGroup(stages) {
    const top = y;

    y += STAGE_MARGIN;

    for (const stage of stages) {
        addStage(stage);
    }

    const rect = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

    rect.classList.add(`hp-class-group`);
    rect.setAttribute(`x`,      X - STAGE_MARGIN);
    rect.setAttribute(`y`,      top);
    rect.setAttribute(`width`,  STAGE_WIDTH + STAGE_MARGIN * 2);
    rect.setAttribute(`height`, y - top);

    svg.appendChild(rect);

    y += STAGE_MARGIN;
}

for (const stage of stages) {
    if (typeof stage === `string`) {
        addStage(stage);
    }
    else if (Array.isArray(stage)) {
        addGroup(stage);
    }
}

const arrow = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);

arrow.classList.add(`hp-class-arrow`)

const arrowBottom = y;

arrow.setAttribute(`d`,
    `M ${(X + STAGE_WIDTH / 2) - 20} ${Y - 10}` +
    `L ${(X + STAGE_WIDTH / 2) + 20} ${Y - 10}` +
    `L ${(X + STAGE_WIDTH / 2) + 20} ${arrowBottom}` +
    `L ${(X + STAGE_WIDTH / 2) + 20 + 10} ${arrowBottom}` +
    `L ${(X + STAGE_WIDTH / 2) } ${arrowBottom + 20}` +
    `L ${(X + STAGE_WIDTH / 2) - 20 - 10} ${arrowBottom}` +
    `L ${(X + STAGE_WIDTH / 2) - 20} ${arrowBottom}` +
    `Z`,
);

svg.insertAdjacentElement(`afterbegin`, arrow);
