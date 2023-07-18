const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class UnknownCommand extends BaseCommand {
    execute() {
        return new CommandResult(`Unknown token ${this.token}`, { haltProcessing: true });
    }
}

module.exports = UnknownCommand;
