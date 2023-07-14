function HelpMessage(superclass) {
    return class extends superclass {
        static matchToken;
        static helpString;

        static get helpMessage() {
            return `${this.matchToken} ${this.helpString}`;
        }
    }
}

module.exports = HelpMessage;