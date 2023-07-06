const ClearStackCommand = require('../../lib/commands/clear-stack.js');
const CommandResult = require('../../lib/commands/result.js');
const Stack = require('../../lib/stack.js');

test('does not match random junk', () => {
    expect(ClearStackCommand.fromLine('foobar')).toEqual([]);
});

test('matches "c"', () => {
    const cmds = ClearStackCommand.fromLine('c');
    expect(cmds).toHaveLength(1);
    expect(cmds[0]).toBeInstanceOf(ClearStackCommand);
    expect(cmds[0].token).toEqual('c');
});

test('returns stack cleared message', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(456);
    stack.push(789);

    const cmd = new ClearStackCommand('c');
    const result = cmd.execute({ stack });
    expect(result).toBeInstanceOf(CommandResult);
    expect(result.display).toMatch('stack cleared');
    expect(result.display).toMatch(JSON.stringify([123,456,789]));
    expect(result.haltProcessing).toBeTruthy();
    expect(result.isExit).toBeFalsy();

    expect(stack).toHaveLength(0);
});
