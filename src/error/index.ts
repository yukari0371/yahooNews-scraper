export class YahooError extends Error {
    constructor (message: string) {
        super(message);
        this.name = "YahooError";
    }
};