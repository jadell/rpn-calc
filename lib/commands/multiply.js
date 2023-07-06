const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { fromLineMatch } = require('./from-line-match.js');

class MultiplyCommand extends BaseCommand {
    static fromLine = fromLineMatch('*', this);

    execute = executeWithOperands('Multiply', (a, b) => b * a);
}

module.exports = MultiplyCommand;
