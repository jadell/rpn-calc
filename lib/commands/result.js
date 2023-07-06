class CommandResult {
    #display;
    #haltProcessing;
    #isExit;

    constructor(display, {
        haltProcessing = false,
        isExit = false,
    }) {
        this.#display = display;
        this.#haltProcessing = !!haltProcessing;
        this.#isExit = !!isExit;
    }

    get display() {
        return this.#display;
    }

    get haltProcessing() {
        return this.#haltProcessing;
    }

    get isExit() {
        return this.#isExit;
    }
}

module.exports = CommandResult;