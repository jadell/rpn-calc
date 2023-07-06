const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { fromLineMatch } = require('./from-line-match.js');

class SquareRootCommand extends BaseCommand {
    static fromLine = fromLineMatch('sqrt', this);

    execute = executeWithOperands('Square root', (a) => Math.sqrt(a));
}

module.exports = SquareRootCommand;
