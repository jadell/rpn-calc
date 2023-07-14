const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');

class QuitCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = 'q';
    static helpString = '      quit'

    execute() {
        return new CommandResult(false, { haltProcessing: true, isExit: true });
    }
}

module.exports = QuitCommand;
