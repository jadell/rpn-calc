const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { fromLineMatch } = require('./from-line-match.js');

class PowerCommand extends BaseCommand {
    static fromLine = fromLineMatch('^', this);

    execute = executeWithOperands('Power', (a, b) => b ** a);
}

module.exports = PowerCommand;
