const TextPhrase = require(`./text-phrase`);


function toTextPhrase(something) {
    if (typeof something === `string`) {
        return new TextPhrase({
            String : something,
        });
    }

    throw new Error(); // @todo
}


exports.toTextPhrase = toTextPhrase;
