const Stack = require('../../lib/stack.js');
const SquareRootCommand = require('../../lib/commands/square-root.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(SquareRootCommand.fromLine('foobar')).toEqual([]);
});

describe('matches "sqrt"', () => {
    const cmds = SquareRootCommand.fromLine('sqrt');

    test('returns one command', () => {
        expect(cmds).toHaveLength(1);
    });

    test('returns square root command', () => {
        expect(cmds[0]).toBeInstanceOf(SquareRootCommand);
    });

    test('command initialized with correct token', () => {
        expect(cmds[0].token).toEqual('sqrt');
    });
});

describe('execute square root command with enough operands', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);

    const cmd = new SquareRootCommand('sqrt');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays correct value', () => {
        expect(result.display).toEqual('2');
    });

    test('does not halt processing', () => {
        expect(result.haltProcessing).toBeFalsy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('removes one operand from stack and pushes new operand onto stack', () => {
        expect(stack.show()).toEqual([3, 2]);
    });
});

describe('execute sqaure root command without enough operands', () => {
    const stack = new Stack();

    const cmd = new SquareRootCommand('sqrt');
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays error value', () => {
        expect(result.display).toMatch('sqrt requires 1');
    });

    test('does halt processing', () => {
        expect(result.haltProcessing).toBeTruthy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('stack remains unchanged', () => {
        expect(stack.show()).toEqual([]);
    });
});
