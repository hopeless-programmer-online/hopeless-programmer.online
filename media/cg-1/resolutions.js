const svg = document.currentScript.parentNode;

window.addEventListener(`load`, main);

function aspect({ width, height }) {
    let d = 2;

    while (d < Math.min(width, height)) {
        if ((width % d !== 0) || (height % d !== 0)) {
            ++d;

            continue;
        }

        width /= d;
        height /= d;
    }

    return `${width}:${height}`;
}
function getRect({ x, y, width, height }) {
    return {
        x,
        y,
        width,
        height,
        left       : x,
        top        : y,
        right      : x + width,
        bottom     : y + height,
        vertical   : x + width / 2,
        horizontal : y + height / 2,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
}
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l) {
    let r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;

        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
function clamp(value, min = 0, max = 1) {
    return Math.min(Math.max(value, min), max);
}

function main() {
    const resolutions = [
        {
            name   : `8K UHD`,
            width  : 7680,
            height : 4320,
        },
        {
            name   : `5K`,
            width  : 5120,
            height : 2880,
        },
        {
            name   : `4K UHD`,
            width  : 3840,
            height : 2160,
        },
        {
            name   : `QHD`,
            width  : 2560,
            height : 1440,
        },
        {
            name   : `QHD+`,
            width  : 3200,
            height : 1800,
        },
        {
            name   : `Full HD`,
            width  : 1920,
            height : 1080,
        },
        {
            name   : `720p`,
            width  : 1280,
            height : 720,
        },
        // {
        //     name   : `480p`,
        //     width  : 720,
        //     height : 480,
        // },
        {
            name   : `VGA`,
            width  : 640,
            height : 480,
        },
        {
            name   : `QVGA`,
            width  : 320,
            height : 240,
        },
        {
            name   : `SVGA`,
            width  : 800,
            height : 600,
        },
        // {
        //     name   : `XGA`,
        //     width  : 1024,
        //     height : 768,
        // },
        // {
        //     name   : `WXGA`,
        //     width  : 1366,
        //     height : 768,
        // },
        {
            name   : `UGA`,
            width  : 1600,
            height : 1200,
        },
    ]
        .map(resolution => ({
            ...resolution,
            pixels : resolution.width * resolution.height,
            aspect : aspect(resolution),
        }))
        .sort((a, b) => b.height - a.height)
        ;

    const padding = 50;
    const viewBox = {
        x      : -padding,
        y      : -padding,
        width  : Math.max(...resolutions.map(({ width }) => width)) + padding * 2,
        height : Math.max(...resolutions.map(({ height }) => height)) + padding * 2,
    };

    let hue = 0;

    for (const { name, width, height, pixels, aspect } of resolutions) {
        const rect = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

        rect.classList.add(`hp-class-screen`);
        rect.setAttribute(`x`,      0);
        rect.setAttribute(`y`,      0);
        rect.setAttribute(`width`,  width);
        rect.setAttribute(`height`, height);
        rect.style.fill = `rgba(${hslToRgb(hue, 1, 0.5)}, 0.5)`;

        hue = (hue + 0.5678) % 1;

        svg.appendChild(rect);

        const size = rect.getBBox().height * 0.1;
        const border = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

        border.classList.add(`hp-class-border`);
        border.setAttribute(`x`,      -size*0.05);
        border.setAttribute(`y`,      -size*0.05);
        border.setAttribute(`width`,  width + size*0.05);
        border.setAttribute(`height`, height + size*0.05);
        border.style.strokeWidth = size * 0.1;
        // border.style.strokeDasharray = `${size * 0.1 * 2} ${size * 0.1}`;

        svg.appendChild(border);

        const caption = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

        caption.appendChild(document.createTextNode(name));
        caption.classList.add(`hp-class-caption`);
        caption.setAttribute(`x`, width - size * 0.1);
        caption.setAttribute(`y`, height);
        caption.style.fontSize = `${size}px`;

        svg.appendChild(caption);

        const c = getRect(caption.getBBox());
        const aspectText = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

        aspectText.appendChild(document.createTextNode(aspect));
        aspectText.classList.add(`hp-class-aspect`);
        aspectText.setAttribute(`x`, size * 0.1);
        aspectText.setAttribute(`y`, height);
        aspectText.style.fontSize = `${size}px`;

        svg.appendChild(aspectText);

        const megapixels = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

        megapixels.appendChild(document.createTextNode((pixels / 1e6).toFixed(2)));
        megapixels.classList.add(`hp-class-megapixels`);
        megapixels.setAttribute(`x`, width - size * 0.1);
        megapixels.setAttribute(`y`, 0);
        megapixels.style.fontSize = `${size}px`;

        svg.appendChild(megapixels);

        const m = getRect(megapixels.getBBox());
        const megapixelsText = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

        megapixelsText.appendChild(document.createTextNode(`megapixels`));
        megapixelsText.classList.add(`hp-class-megapixels`);
        megapixelsText.setAttribute(`x`, width - size * 0.1);
        megapixelsText.setAttribute(`y`, m.bottom);
        megapixelsText.style.fontSize = `${size}px`;

        svg.appendChild(megapixelsText);

        megapixelsText.style.fontSize = `${size / (megapixelsText.getBBox().width / m.width)}px`;

        const a = getRect(aspectText.getBBox());
        const widthText = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

        widthText.appendChild(document.createTextNode(width));
        widthText.classList.add(`hp-class-width`);
        widthText.setAttribute(`x`, width / 2);
        widthText.setAttribute(`y`, c.horizontal);
        widthText.style.fontSize = `${size / 2}px`;

        svg.appendChild(widthText);

        const d = size * 0.1;
        const w = getRect(widthText.getBBox());
        const rightArrow = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);

        rightArrow.setAttribute(`d`, `
            M ${w.right + d}    ${w.horizontal - d}
            L ${c.left - d * 4} ${w.horizontal - d}
            L ${c.left - d * 4} ${w.horizontal - d * 2}
            L ${c.left - d}     ${w.horizontal}
            L ${c.left - d * 4} ${w.horizontal + d * 2}
            L ${c.left - d * 4} ${w.horizontal + d}
            L ${w.right + d}    ${w.horizontal + d}
            Z`);

        svg.appendChild(rightArrow);

        const leftArrow = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);

        leftArrow.setAttribute(`d`, `
            M ${w.left - d}      ${w.horizontal - d}
            L ${a.right + d * 4} ${w.horizontal - d}
            L ${a.right + d * 4} ${w.horizontal - d * 2}
            L ${a.right + d}     ${w.horizontal}
            L ${a.right + d * 4} ${w.horizontal + d * 2}
            L ${a.right + d * 4} ${w.horizontal + d}
            L ${w.left - d}      ${w.horizontal + d}
            Z`);

        svg.appendChild(leftArrow);

        const heightText = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);

        heightText.appendChild(document.createTextNode(height));
        heightText.classList.add(`hp-class-height`);
        heightText.setAttribute(`x`, width);
        heightText.setAttribute(`y`, height / 2);
        heightText.style.fontSize = `${size / 2}px`;

        svg.appendChild(heightText);

        const h = getRect(heightText.getBBox());
        const bottomArrow = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);

        bottomArrow.setAttribute(`d`, `
            M ${h.vertical + d}     ${h.bottom + d}
            L ${h.vertical + d}     ${c.top - d * 4}
            L ${h.vertical + d * 2} ${c.top - d * 4}
            L ${h.vertical}         ${c.top - d}
            L ${h.vertical - d * 2} ${c.top - d * 4}
            L ${h.vertical - d}     ${c.top - d * 4}
            L ${h.vertical - d}     ${h.bottom + d}
            Z`);

        svg.appendChild(bottomArrow);

        const mt = getRect(megapixelsText.getBBox());
        const topArrow = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);

        topArrow.setAttribute(`d`, `
            M ${h.vertical + d}     ${h.top - d}
            L ${h.vertical + d}     ${mt.bottom + d * 4}
            L ${h.vertical + d * 2} ${mt.bottom + d * 4}
            L ${h.vertical}         ${mt.bottom + d}
            L ${h.vertical - d * 2} ${mt.bottom + d * 4}
            L ${h.vertical - d}     ${mt.bottom + d * 4}
            L ${h.vertical - d}     ${h.top - d}
            Z`);

        svg.appendChild(topArrow);
    }

    let time = new Date;
    let value = 0;

    const min = Math.min(...resolutions.map(({ height }) => height));
    const max = Math.max(...resolutions.map(({ height }) => height));

    function update() {
        const date = new Date;
        const delta = 10; // time - date;

        if (delta > 1) {
            time = date;

            const period = 20; // sec
            const wait = 2; // sec
            const transition = (period - wait * 2) / 2;

            value += (delta / 1000);

            const t = value % period;
            const a = wait;
            const b = transition;
            const zoom = Math.sin((1 - clamp((Math.abs(t - 1.5*a - b) - a / 2) / b)) * Math.PI / 2) ** 4;

            const height = min + (max - min) * zoom;
            const width = height / ((viewBox.height - padding * 2) / (viewBox.width - padding * 2));

            svg.setAttribute(`viewBox`, `
                ${viewBox.x}
                ${viewBox.y}
                ${padding * 2 + width}
                ${padding * 2 + height}
            `);
        }

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    svg.setAttribute(`viewBox`, `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
}
