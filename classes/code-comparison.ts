import Code from "./code";

export default class CodeComparison {
    public readonly left : Code
    public readonly right : Code

    public constructor({ left, right } : { left : Code, right : Code }) {
        this.left = left
        this.right = right
    }
}
