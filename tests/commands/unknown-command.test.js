const UknownCommand = require('../../lib/commands/unknown.js');

test('returns unknown token message', () => {
    const cmd = new UknownCommand();
    const result = cmd.execute();
    expect(result.display).toMatch('Uknown token');
    expect(result.haltProcessing).toBeTruthy();
    expect(result.isExit).toBeFalsy();
});
