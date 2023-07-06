const { toLower } = require('lodash');
const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class HelpCommand extends BaseCommand {
    static fromLine(line) {
        return toLower(line) === '?' ? [new this(line)] : [];
    }

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