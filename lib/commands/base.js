class BaseCommand {
    #token;

    constructor(token) {
        this.#token = token;
    }

    get token() {
        return this.#token;
    }

    execute() {
        throw new Error('Command execution not defined');
    }
}

module.exports = BaseCommand;