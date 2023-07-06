const QuitCommand = require('../../lib/commands/quit.js');
const CommandResult = require('../../lib/commands/result.js');

test('does not match random junk', () => {
    expect(QuitCommand.fromLine('foobar')).toEqual([]);
});

test('matches "q"', () => {
    const cmds = QuitCommand.fromLine('q');
    expect(cmds).toHaveLength(1);
    expect(cmds[0]).toBeInstanceOf(QuitCommand);
    expect(cmds[0].token).toEqual('q');
});

test('returns exit message', () => {
    const cmd = new QuitCommand('?');
    const result = cmd.execute();
    expect(result).toBeInstanceOf(CommandResult);
    expect(result.display).toBeFalsy();
    expect(result.haltProcessing).toBeTruthy();
    expect(result.isExit).toBeTruthy();
});
