const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');

class PowerCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = '^';
    static helpString = '      raise one operand to the power of the next'

    execute = executeWithOperands('Power', (a, b) => b ** a);
}

module.exports = PowerCommand;
