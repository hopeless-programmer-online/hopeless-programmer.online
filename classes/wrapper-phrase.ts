import Phrase from "./phrase";
import Phrases from "./phrases";

export default abstract class WrapperPhrase extends Phrase {
    readonly phrases : Phrases

    public constructor({ phrases } : { phrases : Phrases }) {
        super()

        this.phrases = phrases
    }
}
