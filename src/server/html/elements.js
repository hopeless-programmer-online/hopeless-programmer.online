class Elements extends Array {
    toString() {
        let string = ``;
        let isPreviousText  = false;
        let isFirst = true;

        for (const element of this) {
            const isText = element instanceof TextElement;

            if (!isText && !isPreviousText && !isFirst) {
                string += COMMENT_BEGIN + LINE_BREAK + COMMENT_END;
            }

            string += element.toString();

            isPreviousText = isText;
            isFirst = false;
        }

        return string;
    }
}


exports = module.exports = Elements;


const COMMENT_BEGIN = `<!--`;
const COMMENT_END = `-->`;
const LINE_BREAK = `\r\n`;


const TextElement = require(`./text-element`);
