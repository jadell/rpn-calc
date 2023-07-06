const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { fromLineMatch } = require('./from-line-match.js');

class DifferenceCommand extends BaseCommand {
    static fromLine = fromLineMatch('-', this);

    execute = executeWithOperands('Diff', (a, b) => b - a);
}

module.exports = DifferenceCommand;
