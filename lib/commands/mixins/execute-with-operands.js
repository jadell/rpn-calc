const CommandResult = require('../result.js');

function ExecuteWithOperands(superclass) {
    return class extends superclass {
        op() {
            throw new Error('Operation execution not defined');
        }

        execute({ stack }) {
            const operandCount = this.op.length;

            if (stack.length < operandCount) {
                const pref = this.constructor.matchToken ? `${this.constructor.matchToken} requires` : 'Requires';
                return new CommandResult(`${pref} ${operandCount} operands`, { haltProcessing: true });
            }

            const operands = Array.from({ length: operandCount }, () => stack.pop());
            const opResult = this.op(...operands);
            stack.push(opResult);
            return new CommandResult(JSON.stringify(stack.peek()));
        }
    }
}

module.exports = ExecuteWithOperands;
