const BaseCommand = require('./base.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');
const ExecuteWithOperands = require('./mixins/execute-with-operands.js');

class SquareRootCommand extends mix(BaseCommand, FromLine, HelpMessage, ExecuteWithOperands) {
    static matchToken = 'sqrt';
    static helpString = '   square root of one operand'

    op = (a) => Math.sqrt(a);
}

module.exports = SquareRootCommand;
