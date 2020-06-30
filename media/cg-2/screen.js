const svg = document.currentScript.parentNode;
// const vector = svg.querySelector(`svg[name="vector"]`);
// const raster = svg.querySelector(`svg[name="raster"]`);

const stencils = [
    [ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0 ],
    [ 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0 ],
    [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
    [ 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ],
];

for (const y in stencils) {
    const row = stencils[y];

    for (const x in row) {
        const stencil = row[x];
        const element = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

        element.classList.add(`hp-class-point`);
        element.setAttribute(`x`, x / row.length * 300);
        element.setAttribute(`y`, y / stencils.length * 200);
        element.setAttribute(`width`, 1 / row.length * 300);
        element.setAttribute(`height`, 1 / stencils.length * 200);
        element.setAttribute(`style`, `fill: ${stencil ? `yellow` : `black`}; stroke: red; stroke-width: 1`);

        svg.appendChild(element);
    }
}
