class Element {
    /**
     * Checks if the passed variable is html element or recursive array of elements.
     *
     * @param   {any}     something
     * @returns {boolean}
     */
    static IsLike(something) {
        if (something instanceof Element) {
            return true;
        }
        if (Array.isArray(something)) {
            return something.every(Element.IsLike);
        }

        return false;
    }
}


exports = module.exports = Element;
