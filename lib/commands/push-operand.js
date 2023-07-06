const { toNumber } = require('lodash');
const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');

function transform(token) {
    return toNumber(token);
}

class PushOperandCommand extends BaseCommand {
    static fromLine(line) {
        const token = transform(line);
        return isNaN(token) ? [] : [new this(token)];
    }

    execute({ stack }) {
        stack.push(this.token);
        return new CommandResult(JSON.stringify(stack.peek()));
    }
}

module.exports = PushOperandCommand;
