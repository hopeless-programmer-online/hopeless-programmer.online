const svg = document.currentScript.parentNode;
const vector = svg.querySelector(`svg[name="vector"]`);
const raster = svg.querySelector(`svg[name="raster"]`);

function circle(x, y) {
    const element = document.createElementNS(`http://www.w3.org/2000/svg`, `circle`);

    element.classList.add(`hp-class-point`);
    element.setAttribute(`cx`, x);
    element.setAttribute(`cy`, y);
    element.setAttribute(`r`, 5);

    vector.appendChild(element);

    return element;
}
function line(x1, y1, x2, y2) {
    const element = document.createElementNS(`http://www.w3.org/2000/svg`, `line`);

    element.classList.add(`hp-class-line`);
    element.setAttribute(`x1`, x1);
    element.setAttribute(`y1`, y1);
    element.setAttribute(`x2`, x2);
    element.setAttribute(`y2`, y2);

    vector.appendChild(element);

    return element;
}

class Subscription {
    constructor() {
        this.__subscribers = [];
    }

    Subscribe(subscriber) {
        this.__subscribers.push(subscriber);
    }
    Unsubscribe(subscriber) {
        const subscribers = this.__subscribers;
        const index = subscribers.indexOf(subscriber);

        if (index === -1) throw new Error; // @todo

        subscribers.splice(index, 1);
    }
    Notify(...values) {
        for (const subscriber of this.__subscribers) subscriber(...values);
    }
}
class Point {
    constructor({ X = 0, Y = 0 } = {}) {
        this.X = X;
        this.Y = Y;

        const element = circle(X, Y);

        this.element = element;
        this.Move = new Subscription;

        this.onMouseDown = this.OnMouseDown.bind(this);
        this.onMouseUp   = this.OnMouseUp.bind(this);
        this.onMouseMove = this.OnMouseMove.bind(this);

        element.addEventListener(`mousedown`, this.onMouseDown);
    }

    OnMouseDown() {
        this.element.removeEventListener(`mousedown`, this.onMouseDown);
        document.addEventListener(`mouseup`, this.onMouseUp);
        document.addEventListener(`mousemove`, this.onMouseMove);
    }
    OnMouseUp() {
        document.removeEventListener(`mouseup`, this.onMouseUp);
        document.removeEventListener(`mousemove`, this.onMouseMove);
        this.element.addEventListener(`mousedown`, this.onMouseDown);
    }
    OnMouseMove({ clientX, clientY }) {
        this.X = clientX;
        this.Y = clientY;

        const rect = vector.getBoundingClientRect();

        this.element.attributes.cx.value = clientX - rect.left;
        this.element.attributes.cy.value = clientY - rect.top;

        this.Move.Notify(this);
    }
}
class Line {
    constructor({ X1 = 0, Y1 = 0, X2 = 0, Y2 = 0 } = {}) {
        const l = line(X1, Y1, X2, Y2);
        const a = new Point({ X : X1, Y : Y1 });
        const b = new Point({ X : X2, Y : Y2 });
        const change = new Subscription;

        this.a = a;
        this.b = b;
        this.l = l;
        this.begin = { X : X1, Y : Y1 };
        this.end = { X : X2, Y : Y2 };
        this.Change = change;

        a.Move.Subscribe(({ X, Y }) => {
            this.begin = { X, Y };

            l.setAttribute(`x1`, X);
            l.setAttribute(`y1`, Y);
            change.Notify(this);
        });
        b.Move.Subscribe(({ X, Y }) => {
            this.end = { X, Y };

            l.setAttribute(`x2`, X);
            l.setAttribute(`y2`, Y);
            change.Notify(this);
        });
    }
}
class Triangle {
    constructor({ X1 = 0, Y1 = 0, X2 = 0, Y2 = 0, X3 = 0, Y3 = 0 } = {}) {
        const ab = line(X1, Y1, X2, Y2);
        const bc = line(X2, Y2, X3, Y3);
        const ca = line(X3, Y3, X1, Y1);
        const a = new Point({ X : X1, Y : Y1 });
        const b = new Point({ X : X2, Y : Y2 });
        const c = new Point({ X : X3, Y : Y3 });
        const change = new Subscription;

        this.a = a;
        this.b = b;
        this.c = c;
        this.ab = ab;
        this.bc = bc;
        this.ca = ca;
        this.A = { X : X1, Y : Y1 };
        this.B = { X : X2, Y : Y2 };
        this.C = { X : X3, Y : Y3 };
        this.Change = change;

        a.Move.Subscribe(({ X, Y }) => {
            this.A = { X, Y };

            ab.setAttribute(`x1`, X);
            ab.setAttribute(`y1`, Y);
            ca.setAttribute(`x2`, X);
            ca.setAttribute(`y2`, Y);
            change.Notify(this);
        });
        b.Move.Subscribe(({ X, Y }) => {
            this.B = { X, Y };

            bc.setAttribute(`x1`, X);
            bc.setAttribute(`y1`, Y);
            ab.setAttribute(`x2`, X);
            ab.setAttribute(`y2`, Y);
            change.Notify(this);
        });
        c.Move.Subscribe(({ X, Y }) => {
            this.C = { X, Y };

            ca.setAttribute(`x1`, X);
            ca.setAttribute(`y1`, Y);
            bc.setAttribute(`x2`, X);
            bc.setAttribute(`y2`, Y);
            change.Notify(this);
        });
    }

    In(t) {
        function distance(a, b) {
            return Math.sqrt(Math.pow(a.X - b.X, 2) + Math.pow(a.Y - b.Y, 2));
        }
        function square(a, b, c) {
            // Herone's formula
            const s = (a + b + c) / 2;

            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }

        const a = distance(this.B, this.C);
        const b = distance(this.A, this.C);
        const c = distance(this.A, this.B);
        const s = square(a, b, c);
        const at = distance(this.A, t);
        const bt = distance(this.B, t);
        const ct = distance(this.C, t);
        const q = square(a, bt, ct) + square(at, b, ct) + square(at, bt, c);

        return Math.abs(s - q) < 0.001;
    }
}

const points = [
    new Point({ X : 50, Y : 50 }),
    new Point({ X : 100, Y : 140 }),
];
const lines = [
    new Line({ X1 : 255, Y1 : 45, X2 : 255, Y2 : 195 }),
    new Line({ X1 : 195, Y1 : 45, X2 : 165, Y2 : 165 }),
];
const triangles = [
    new Triangle({ X1 : 45, Y1 : 150, X2 : 45, Y2 : 255, X3 : 225, Y3 : 255 }),
];

for (const point of points) point.Move.Subscribe(rasterize);
for (const line of lines) line.Change.Subscribe(rasterize);
for (const triangle of triangles) triangle.Change.Subscribe(rasterize);

// console.log(...points);

const pixels = [];
const pixelsX = 10;
const pixelsY = 10;
const sizeX = 300;
const sizeY = 300;
const pixelX = sizeX / pixelsX;
const pixelY = sizeY / pixelsY;

for (let x = 1; x < pixelsX; ++x) {
    const element = document.createElementNS(`http://www.w3.org/2000/svg`, `line`);

    element.classList.add(`hp-class-delimiter`);
    element.setAttribute(`x1`, `${x / pixelsX * 100}%`);
    element.setAttribute(`y1`, `0%`);
    element.setAttribute(`x2`, `${x / pixelsX * 100}%`);
    element.setAttribute(`y2`, `100%`);

    vector.appendChild(element);
}
for (let y = 1; y < pixelsY; ++y) {
    const element = document.createElementNS(`http://www.w3.org/2000/svg`, `line`);

    element.classList.add(`hp-class-delimiter`);
    element.setAttribute(`x1`, `0%`);
    element.setAttribute(`y1`, `${y / pixelsY * 100}%`);
    element.setAttribute(`x2`, `100%`);
    element.setAttribute(`y2`, `${y / pixelsY * 100}%`);

    vector.appendChild(element);
}
for (let x = 0; x < pixelsX; ++x) {
    pixels[x] = [];

    for (let y = 0; y < pixelsY; ++y) {
        const pixel = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);

        pixel.classList.add(`hp-class-pixel`);
        pixel.setAttribute(`x`, (x / pixelsX) * sizeX);
        pixel.setAttribute(`y`, (y / pixelsY) * sizeY);
        pixel.setAttribute(`width`, sizeX / pixelsX);
        pixel.setAttribute(`height`, sizeY / pixelsY);

        raster.appendChild(pixel);

        pixels[x][y] = pixel;
    }
}

function rasterize() {
    for (const row of pixels)
    for (const pixel of row) {
        pixel.setAttribute(`style`, ``);
    }

    for (const point of points) {
        const x = point.X;
        const y = point.Y;

        if (x >= 0 && x < sizeX)
        if (y >= 0 && y < sizeY) {
            const ix = Math.floor(x / (sizeX / pixelsX));
            const iy = Math.floor(y / (sizeY / pixelsY));

            pixels[ix][iy].setAttribute(`style`, `fill: white`);
        }
    }
    for (const line of lines) {
        const a = {
            X : Math.floor(line.begin.X / pixelX),
            Y : Math.floor(line.begin.Y / pixelY),
        };
        const b = {
            X : Math.floor(line.end.X / pixelX),
            Y : Math.floor(line.end.Y / pixelY),
        };
        const steps = Math.max(
            Math.abs(a.X - b.X),
            Math.abs(a.Y - b.Y),
        );

        for (let i = 0; i <= steps; ++i) {
            const t = i / Math.max(steps, 1);
            const x = line.begin.X + (line.end.X - line.begin.X) * t;
            const y = line.begin.Y + (line.end.Y - line.begin.Y) * t;
            const ix = Math.floor(x / pixelX);
            const iy = Math.floor(y / pixelY);

            if (ix >= 0 && ix < pixelsX)
            if (iy >= 0 && iy < pixelsY) {
                pixels[ix][iy].setAttribute(`style`, `fill: white`);
            }
        }
    }
    for (const triangle of triangles) {
        const { min, max, floor, ceil } = Math;
        const { A, B, C } = triangle;
        const left   = floor(min(A.X, B.X, C.X) / pixelX);
        const right  = ceil(max(A.X, B.X, C.X) / pixelX);
        const top    = floor(min(A.Y, B.Y, C.Y) / pixelY);
        const bottom = ceil(max(A.Y, B.Y, C.Y) / pixelY);

        for (let x = left; x < right; ++x)
        for (let y = top; y < bottom; ++y) {
            if (x >= 0 && x < pixelsX)
            if (y >= 0 && y < pixelsY)
            if (triangle.In({ X : (x + 0.5) * pixelX, Y : (y + 0.5) * pixelY })) {
                pixels[x][y].setAttribute(`style`, `fill: white`);
            }
        }
    }
}

rasterize();
