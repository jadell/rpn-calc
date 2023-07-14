const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match');
const HelpMessage = require('./mixins/help-message.js');

class ClearStackCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = 'c';
    static helpString = '      clear current calculator stack'

    execute({ stack }) {
        const prior = stack.clear();
        return new CommandResult(`Calculator stack cleared. Stack was: ${JSON.stringify(prior)}`, { haltProcessing: true });
    }
}

module.exports = ClearStackCommand;
