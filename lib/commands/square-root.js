const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');

class SquareRootCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = 'sqrt';
    static helpString = '   square root of one operand'

    execute = executeWithOperands('Square root', (a) => Math.sqrt(a));
}

module.exports = SquareRootCommand;
