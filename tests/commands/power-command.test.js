const Stack = require('../../lib/stack.js');
const PowerCommand = require('../../lib/commands/power.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(PowerCommand.fromLine('foobar')).toEqual([]);
});

describe('matches "^"', () => {
    const cmds = PowerCommand.fromLine('^');

    test('returns one command', () => {
        expect(cmds).toHaveLength(1);
    });

    test('returns power command', () => {
        expect(cmds[0]).toBeInstanceOf(PowerCommand);
    });

    test('command initialized with correct token', () => {
        expect(cmds[0].token).toEqual('^');
    });
});

describe('execute power command with enough operands', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(2);

    const cmd = new PowerCommand('^');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays correct value', () => {
        expect(result.display).toEqual('16');
    });

    test('does not halt processing', () => {
        expect(result.haltProcessing).toBeFalsy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('removes two operands from stack and pushes new operand onto stack', () => {
        expect(stack.show()).toEqual([3, 16]);
    });
});

describe('execute power command without enough operands', () => {
    const stack = new Stack();
    stack.push(3);

    const cmd = new PowerCommand('^');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays error value', () => {
        expect(result.display).toMatch('Power requires 2');
    });

    test('does halt processing', () => {
        expect(result.haltProcessing).toBeTruthy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('stack remains unchanged', () => {
        expect(stack.show()).toEqual([3]);
    });
});
