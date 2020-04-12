const Elements = require(`./elements`);
const TextElement = require(`./text-element`);
const VoidElement = require(`./void-element`);
const StandardElement = require(`./standard-element`);
const Attributes = require(`./attributes`);
const StringAttribute = require(`./string-attribute`);


// see https://html.spec.whatwg.org/multipage/syntax.html#elements-2
const VOID_ELEMENTS = [
    `area`,
    `base`,
    `br`,
    `col`,
    `embed`,
    `hr`,
    `img`,
    `input`,
    `link`,
    `meta`,
    `param`,
    `source`,
    `track`,
    `wbr`,
];


function createElement(name, attributes, ...elements) {
    const elementAttributes = new Attributes;

    if (attributes !== null) {
        for (const [ name, value ] of Object.entries(attributes)) {
            if (typeof value === `string`) {
                elementAttributes.set(name, new StringAttribute({
                    String : value,
                }));
            }
            else {
                throw new Error(); // @todo
            }
        }
    }

    if (VOID_ELEMENTS.includes(name)) {
        return new VoidElement({
            Name : name,
            Attributes : elementAttributes,
        });
    }

    const elementElements = new Elements;

    for (const element of elements) {
        if (typeof element === `string`) {
            elementElements.push(new TextElement({
                Text : element,
            }));
        }
        else if (element instanceof Array) {
            element.forEach(x => elementElements.push(x));
        }
        else {
            elementElements.push(element);
        }
    }

    return new StandardElement({
        Name : name,
        Attributes : elementAttributes,
        Elements : elementElements,
    });
}


exports = module.exports = createElement;
