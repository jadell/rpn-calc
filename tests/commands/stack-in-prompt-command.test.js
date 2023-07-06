const StackInPromptCommand = require('../../lib/commands/stack-in-prompt.js');
const CommandResult = require('../../lib/commands/result.js');
const Stack = require('../../lib/stack.js');

test('does not match random junk', () => {
    expect(StackInPromptCommand.fromLine('foobar')).toEqual([]);
});

test('matches "prompt"', () => {
    const cmds = StackInPromptCommand.fromLine('prompt');
    expect(cmds).toHaveLength(1);
    expect(cmds[0]).toBeInstanceOf(StackInPromptCommand);
    expect(cmds[0].token).toEqual('prompt');
});

test.each([
    { init: true, expected: false },
    { init: false, expected: true },
])('toggle prompt option $expected if $init', ({ init, expected }) => {
    const options = { stackInPrompt: init };

    const cmd = new StackInPromptCommand('prompt');
    const result = cmd.execute({ options });
    expect(result).toBeInstanceOf(CommandResult);
    expect(result.display).toBeFalsy();
    expect(result.haltProcessing).toBeFalsy();
    expect(result.isExit).toBeFalsy();

    expect(options.stackInPrompt).toEqual(expected);
});
