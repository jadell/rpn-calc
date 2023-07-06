const { toLower } = require('lodash');
const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class QuitCommand extends BaseCommand {
    static fromLine(line) {
        return toLower(line) === 'q' ? [new this(line)] : [];
    }

    execute() {
        return new CommandResult(false, { haltProcessing: true, isExit: true });
    }
}

module.exports = QuitCommand;
