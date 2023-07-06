const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { fromLineMatch } = require('./from-line-match.js');

class HelpCommand extends BaseCommand {
    static fromLine = fromLineMatch('?', this);

    execute() {
        return new CommandResult(`Reverse Polish notation calculator
    ?    show this help message
    q    quit
    c    clear current calculator stack
    p    print current calculator stack
`, { haltProcessing: true });
    }
}

module.exports = HelpCommand;