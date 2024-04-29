export default class NotFoundError extends Error {
    constructor(message = "Not found") {
        super(message)
        this.name = "NotFoundError"
    }
}
