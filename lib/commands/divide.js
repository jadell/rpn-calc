const BaseCommand = require('./base.js');
const { executeWithOperands } = require('./execute-with-operands.js');
const { fromLineMatch } = require('./from-line-match.js');

class DivideCommand extends BaseCommand {
    static fromLine = fromLineMatch('/', this);

    execute = executeWithOperands('Divide', (a, b) => {
        if (a === 0) {
            throw new Error('Divide by zero');
        }
        return b / a
    });
}

module.exports = DivideCommand;
