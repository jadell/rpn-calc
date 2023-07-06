const HelpCommand = require('../../lib/commands/help.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(HelpCommand.fromLine('foobar')).toEqual([]);
});

test('matches "?"', () => {
    const cmds = HelpCommand.fromLine('?');
    expect(cmds).toHaveLength(1);
    expect(cmds[0]).toBeInstanceOf(HelpCommand);
    expect(cmds[0].token).toEqual('?');
});

test('returns help message', () => {
    const cmd = new HelpCommand('?');
    const result = cmd.execute();
    expect(result).toBeInstanceOf(CommandResult);
    expect(result.display).toMatch('Reverse Polish notation calculator');
    expect(result.haltProcessing).toBeTruthy();
    expect(result.isExit).toBeFalsy();
});
