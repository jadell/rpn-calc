const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { fromLineMatch } = require('./from-line-match.js');

class PrintStackCommand extends BaseCommand {
    static fromLine = fromLineMatch('p', this);

    execute({ stack }) {
        return new CommandResult(JSON.stringify(stack.show()), { haltProcessing: true });
    }
}

module.exports = PrintStackCommand;
