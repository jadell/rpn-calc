const { toLower } = require('lodash');
const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class PrintStackCommand extends BaseCommand {
    static fromLine(line) {
        return toLower(line) === 'p' ? [new this(line)] : [];
    }

    execute({ stack }) {
        return new CommandResult(JSON.stringify(stack.show()), { haltProcessing: true });
    }
}

module.exports = PrintStackCommand;
