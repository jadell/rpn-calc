const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { fromLineMatch } = require('./from-line-match.js');

class ClearStackCommand extends BaseCommand {
    static fromLine = fromLineMatch('c', this);

    execute({ stack }) {
        const prior = stack.clear();
        return new CommandResult(`Calculator stack cleared. Stack was: ${JSON.stringify(prior)}`, { haltProcessing: true });
    }
}

module.exports = ClearStackCommand;
