import Person from "./person"

export default class ArticleDetails {
    readonly created : Date
    readonly author : Person

    public constructor({
        created = null,
        author,
    } : {
        created? : Date | null,
        author   : Person,
    }) {
        if (created === null) created = new Date

        this.created = created
        this.author  = author
    }
}
