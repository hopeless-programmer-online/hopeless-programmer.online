import Paragraph from "./paragraph";
import Sentences from "./sentences";

type Title = Sentences
type Description = Paragraph

export default class Illustration {
    readonly title : Title
    readonly description : Description

    public constructor({ title, description } : { title : Title, description : Description }) {
        this.title = title
        this.description = description
    }
}
