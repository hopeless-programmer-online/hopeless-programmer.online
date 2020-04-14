class Elements extends Array {
    toString() {
        let string = ``;
        let isPreviousText  = false;
        let isFirst = true;

        for (const element of this) {
            const isText = element instanceof TextElement;

            if (!isText && !isPreviousText && !isFirst) {
                string += LINE_BREAK;
            }

            string += element.toString();

            isPreviousText = isText;
            isFirst = false;
        }

        return string;
    }
}


exports = module.exports = Elements;


const LINE_BREAK = `\r\n`;


const TextElement = require(`./text-element`);
