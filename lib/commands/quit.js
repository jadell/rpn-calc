const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { fromLineMatch } = require('./from-line-match.js');

class QuitCommand extends BaseCommand {
    static fromLine = fromLineMatch('q', this);

    execute() {
        return new CommandResult(false, { haltProcessing: true, isExit: true });
    }
}

module.exports = QuitCommand;
