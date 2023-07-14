const { toLower } = require('lodash');

function FromLine(superclass) {
    return class extends superclass {
        static matchToken;

        static fromLine(line) {
            return toLower(line).trim() === this.matchToken ? [new this(line)] : [];
        }
    }
}

module.exports = FromLine;