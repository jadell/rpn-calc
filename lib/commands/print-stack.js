const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match');
const HelpMessage = require('./mixins/help-message.js');

class PrintStackCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = 'p';
    static helpString = '      print current calculator stack'

    execute({ stack }) {
        return new CommandResult(JSON.stringify(stack.show()), { haltProcessing: true });
    }
}

module.exports = PrintStackCommand;
