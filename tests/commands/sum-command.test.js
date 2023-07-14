const Stack = require('../../lib/stack.js');
const SumCommand = require('../../lib/commands/sum.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(SumCommand.fromLine('foobar')).toEqual([]);
});

describe('matches "+"', () => {
    const cmds = SumCommand.fromLine('+');

    test('returns one command', () => {
        expect(cmds).toHaveLength(1);
    });

    test('returns sum command', () => {
        expect(cmds[0]).toBeInstanceOf(SumCommand);
    });

    test('command initialized with correct token', () => {
        expect(cmds[0].token).toEqual('+');
    });
});

describe('execute sum command with enough operands', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(5);

    const cmd = new SumCommand('+');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays correct value', () => {
        expect(result.display).toEqual('9');
    });

    test('does not halt processing', () => {
        expect(result.haltProcessing).toBeFalsy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('removes two operands from stack and pushes new operand onto stack', () => {
        expect(stack.show()).toEqual([3, 9]);
    });
});

describe('execute sum command without enough operands', () => {
    const stack = new Stack();
    stack.push(5);

    const cmd = new SumCommand('+');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays error value', () => {
        expect(result.display).toMatch('+ requires 2');
    });

    test('does halt processing', () => {
        expect(result.haltProcessing).toBeTruthy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('stack remains unchanged', () => {
        expect(stack.show()).toEqual([5]);
    });
});
