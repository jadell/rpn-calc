const { toLower } = require('lodash');
const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

class SumCommand extends BaseCommand {
    static fromLine(line) {
        return toLower(line) === '+' ? [new this(line)] : [];
    }

    execute({ stack }) {
        if (stack.length < 2) {
            return new CommandResult('Sum requires 2 operands', { haltProcessing: true });
        }

        const a = stack.pop();
        const b = stack.pop();
        const result = b + a;
        stack.push(result);
        return new CommandResult(JSON.stringify(stack.peek()));
    }
}

module.exports = SumCommand;
