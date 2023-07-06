const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { fromLineMatch } = require('./from-line-match.js');

class SumCommand extends BaseCommand {
    static fromLine = fromLineMatch('+', this);

    execute = executeWithOperands('Sum', (a, b) => b + a);
}

module.exports = SumCommand;
