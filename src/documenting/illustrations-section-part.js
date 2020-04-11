const SectionPart = require(`./section-part`);


class IllustrationsSectionPart extends SectionPart {
    constructor({ Illustrations }) {
        super();

        this.__illustrations = Illustrations;
    }

    get Illustrations() {
        return this.__illustrations;
    }
}


exports = module.exports = IllustrationsSectionPart;
