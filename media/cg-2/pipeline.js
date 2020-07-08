const svg = document.currentScript.parentNode;

const stages = [
    `Збирання вершин`,
    `Обробка вершин`,
    `Збірка контурів`,
    `Конфігурація розбиття`,
    `Розбиття`,
    `Обробка вершин`,
    `Попереднє збирання примітивів`,
    `Обробка примітивів`,
    `Обтинання примітивів`,
    `Нормалізація координат`,
    `Перетворення області виводу`,
    `Відбраковування примітивів`,
    `Кінцеве збирання примітивів`,
    `Растеризація`,
    `Обробка фрагментів`,
    `Ножичний тест`,
    `Тест трафарету`,
    `Тест глибини`,
    `Змішування`,
];

const X = 10;
const Y = 20;
const STAGE_WIDTH = 290;
const STAGE_HEIGHT = 20;
const STAGE_MARGIN = 4;

const arrow = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);

arrow.classList.add(`hp-class-arrow`)

const arrowBottom = Y + stages.length * (STAGE_HEIGHT) + (stages.length - 1) * STAGE_MARGIN + 10;

arrow.setAttribute(`d`,
    `M ${(X + STAGE_WIDTH / 2) - 20} ${Y - 10}` +
    `L ${(X + STAGE_WIDTH / 2) + 20} ${Y - 10}` +
    `L ${(X + STAGE_WIDTH / 2) + 20} ${arrowBottom}` +
    `L ${(X + STAGE_WIDTH / 2) + 20 + 10} ${arrowBottom}` +
    `L ${(X + STAGE_WIDTH / 2) } ${arrowBottom + 50}` +
    `L ${(X + STAGE_WIDTH / 2) - 20 - 10} ${arrowBottom}` +
    `L ${(X + STAGE_WIDTH / 2) - 20} ${arrowBottom}` +
    `Z`,
);

svg.appendChild(arrow);

stages.forEach((title, index) => {
    const rect = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

    rect.setAttribute(`x`,      X);
    rect.setAttribute(`y`,      Y + index * (STAGE_HEIGHT + STAGE_MARGIN));
    rect.setAttribute(`width`,  STAGE_WIDTH);
    rect.setAttribute(`height`, STAGE_HEIGHT);

    svg.appendChild(rect);

    const text = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

    text.appendChild(document.createTextNode(title));

    text.setAttribute(`x`, X + STAGE_WIDTH / 2);
    text.setAttribute(`y`, Y + index * (STAGE_HEIGHT + STAGE_MARGIN) + STAGE_HEIGHT * 0.5);

    svg.appendChild(text);
});
