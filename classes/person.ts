export default class Person {
    readonly firstName : string | null
    readonly lastName  : string | null
    readonly nickname  : string | null
    readonly mail      : string | null

    public constructor({
        firstName = null,
        lastName  = null,
        nickname  = null,
        mail      = null,
    } : {
        firstName? : string,
        lastName?  : string,
        nickname?  : string,
        mail?      : string,
    } = {
    }) {
        this.firstName = firstName
        this.lastName  = lastName
        this.nickname  = nickname
        this.mail      = mail
    }
}
