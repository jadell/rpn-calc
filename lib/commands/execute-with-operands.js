const CommandResult = require('./result.js');

function executeWithOperands(opName, op) {
    const operandCount = op.length;

    return ({ stack }) => {
        if (stack.length < operandCount) {
            return new CommandResult(`${opName} requires ${operandCount} operands`, { haltProcessing: true });
        }

        const operands = Array.from({ length: operandCount }, () => stack.pop());
        const opResult = op(...operands);
        stack.push(opResult);
        return new CommandResult(JSON.stringify(stack.peek()));
    };
}

module.exports = { executeWithOperands };