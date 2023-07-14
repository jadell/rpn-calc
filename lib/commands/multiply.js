const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');

class MultiplyCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = '*';
    static helpString = '      multiply two operands'

    execute = executeWithOperands('Multiply', (a, b) => b * a);
}

module.exports = MultiplyCommand;
