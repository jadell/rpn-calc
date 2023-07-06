const PrintStackCommand = require('../../lib/commands/print-stack.js');
const CommandResult = require('../../lib/commands/result.js');
const Stack = require('../../lib/stack.js');

test('does not match random junk', () => {
    expect(PrintStackCommand.fromLine('foobar')).toEqual([]);
});

test('matches "c"', () => {
    const cmds = PrintStackCommand.fromLine('p');
    expect(cmds).toHaveLength(1);
    expect(cmds[0]).toBeInstanceOf(PrintStackCommand);
    expect(cmds[0].token).toEqual('p');
});

test('returns contents of stack as a string', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(456);
    stack.push(789);

    const cmd = new PrintStackCommand('p');
    const result = cmd.execute({ stack });
    expect(result).toBeInstanceOf(CommandResult);
    expect(result.display).toEqual(JSON.stringify([123,456,789]));
    expect(result.haltProcessing).toBeTruthy();
    expect(result.isExit).toBeFalsy();

    expect(stack).toHaveLength(3);
});
