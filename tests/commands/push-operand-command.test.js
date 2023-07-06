const Stack = require('../../lib/stack.js');
const PushOperandCommand = require('../../lib/commands/push-operand.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(PushOperandCommand.fromLine('foobar')).toEqual([]);
});

const matchCases = [
    { token: 123, expectedToken: 123 },
    { token: '456', expectedToken: 456 },
    { token: 0.123, expectedToken: 0.123 },
    { token: '-789', expectedToken: -789 },
];

describe.each(matchCases)('matches number token $token', ({ token, expectedToken }) => {
    const cmds = PushOperandCommand.fromLine(token);

    test('returns one command', () => {
        expect(cmds).toHaveLength(1);
    });

    test('returns push command', () => {
        expect(cmds[0]).toBeInstanceOf(PushOperandCommand);
    });

    test('command initialized with correct token', () => {
        expect(cmds[0].token).toEqual(expectedToken);
    });

});


describe('execute push command', () => {
    const stack = new Stack();
    const cmd = new PushOperandCommand(-34);
    const result = cmd.execute({ stack });

    test('returns command result', () => {
        expect(result).toBeInstanceOf(CommandResult);
    });

    test('result displays correct value', () => {
        expect(result.display).toEqual('-34');
    });

    test('does not halt processing', () => {
        expect(result.haltProcessing).toBeFalsy();
    });

    test('does not exit app', () => {
        expect(result.isExit).toBeFalsy();
    });

    test('pushes new operand onto stack', () => {
        expect(stack.peek()).toEqual(-34);
    });

});
