const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class UnknownCommand extends BaseCommand {
    execute() {
        return new CommandResult(`Uknown token ${this.token}`, { haltProcessing: true });
    }
}

module.exports = UnknownCommand;
