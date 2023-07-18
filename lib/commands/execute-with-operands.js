const CommandResult = require('./result.js');

function executeWithOperands(opName, op) {
    const operandCount = op.length;

    return ({ stack }) => {
        if (stack.length < operandCount) {
            return new CommandResult(`${opName} requires ${operandCount} operands`, { haltProcessing: true });
        }

        const operands = Array.from({ length: operandCount }, () => stack.pop());
        try {
            const opResult = op(...operands);
            stack.push(opResult);
            return new CommandResult(JSON.stringify(stack.peek()));
        } catch (err) {
            return new CommandResult(err.message, { haltProcessing: true });
        }
    };
}

module.exports = { executeWithOperands };