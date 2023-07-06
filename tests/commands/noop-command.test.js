const NoopCommand = require('../../lib/commands/noop.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(NoopCommand.fromLine('foobar')).toEqual([]);
});

test.each(['', '    '])('matches "%s"', (line) => {
    const cmds = NoopCommand.fromLine(line);
    expect(cmds).toHaveLength(1);
    expect(cmds[0]).toBeInstanceOf(NoopCommand);
    expect(cmds[0].token).toEqual(line);
});

test('performs no op', () => {
    const cmd = new NoopCommand('');
    const result = cmd.execute();
    expect(result).toBeInstanceOf(CommandResult);
    expect(result.display).toBeFalsy();
    expect(result.haltProcessing).toBeTruthy();
    expect(result.isExit).toBeFalsy();
});
