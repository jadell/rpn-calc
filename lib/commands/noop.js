const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { fromLineMatch } = require('./from-line-match');

class NoopCommand extends BaseCommand {
    static fromLine = fromLineMatch('', this);

    execute() {
        return new CommandResult(false, { haltProcessing: true });
    }
}

module.exports = NoopCommand;
