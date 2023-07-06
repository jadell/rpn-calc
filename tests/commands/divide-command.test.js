const Stack = require('../../lib/stack.js');
const DivideCommand = require('../../lib/commands/divide.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(DivideCommand.fromLine('foobar')).toEqual([]);
});

describe('matches "/"', () => {
    const cmds = DivideCommand.fromLine('/');

    test('returns one command', () => {
        expect(cmds).toHaveLength(1);
    });

    test('returns divide command', () => {
        expect(cmds[0]).toBeInstanceOf(DivideCommand);
    });

    test('command initialized with correct token', () => {
        expect(cmds[0].token).toEqual('/');
    });
});

describe('execute divide command with enough operands', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(5);

    const cmd = new DivideCommand('/');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays correct value', () => {
        expect(result.display).toEqual('0.8');
    });

    test('does not halt processing', () => {
        expect(result.haltProcessing).toBeFalsy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('removes two operands from stack and pushes new operand onto stack', () => {
        expect(stack.show()).toEqual([3, 0.8]);
    });
});

describe('execute divide command without enough operands', () => {
    const stack = new Stack();
    stack.push(5);

    const cmd = new DivideCommand('/');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays error value', () => {
        expect(result.display).toMatch('Divide requires 2');
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
