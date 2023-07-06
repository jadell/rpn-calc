const { toLower } = require('lodash');
const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class ClearStackCommand extends BaseCommand {
    static fromLine(line) {
        return toLower(line) === 'c' ? [new this(line)] : [];
    }

    execute({ stack }) {
        const prior = stack.clear();
        return new CommandResult(`Calculator stack cleared. Stack was: ${JSON.stringify(prior)}`, { haltProcessing: true });
    }
}

module.exports = ClearStackCommand;
