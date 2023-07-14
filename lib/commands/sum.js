const BaseCommand = require('./base.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');
const ExecuteWithOperands = require('./mixins/execute-with-operands.js');

class SumCommand extends mix(BaseCommand, FromLine, HelpMessage, ExecuteWithOperands) {
    static matchToken = '+';
    static helpString = '      sum two operands'

    op = (a, b) => b + a;
}

module.exports = SumCommand;
