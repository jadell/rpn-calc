const { toLower } = require('lodash');
const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');

class DifferenceCommand extends BaseCommand {
    static fromLine(line) {
        return toLower(line) === '-' ? [new this(line)] : [];
    }

    execute = executeWithOperands('Diff', (a, b) => b - a);
}

module.exports = DifferenceCommand;
