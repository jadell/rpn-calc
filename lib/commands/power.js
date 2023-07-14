const BaseCommand = require('./base.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');
const ExecuteWithOperands = require('./mixins/execute-with-operands.js');

class PowerCommand extends mix(BaseCommand, FromLine, HelpMessage, ExecuteWithOperands) {
    static matchToken = '^';
    static helpString = '      raise one operand to the power of the next'

    op = (a, b) => b ** a;
}

module.exports = PowerCommand;
