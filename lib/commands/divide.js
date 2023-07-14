const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');

class DivideCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = '/';
    static helpString = '      multiply two operands'

    execute = executeWithOperands('Divide', (a, b) => b / a);
}

module.exports = DivideCommand;
