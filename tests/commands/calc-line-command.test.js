const Stack = require('../../lib/stack.js');
const CalcLineCommand = require('../../lib/commands/calc-line.js');
const PushOperandCommand = require('../../lib/commands/push-operand.js');
const SumCommand = require('../../lib/commands/sum.js');
const DifferenceCommand = require('../../lib/commands/difference.js');
const MultiplyCommand = require('../../lib/commands/multiply.js');
const DivideCommand = require('../../lib/commands/divide.js');
const UnknownCommand = require('../../lib/commands/unknown.js');

const matchCases = [
    { line: '', expectedCommands: [] },
    { line: '123', expectedCommands: [{ type: PushOperandCommand, token: 123 }] },
    { line: '+', expectedCommands: [{ type: SumCommand, token: '+' }] },
    { line: '-', expectedCommands: [{ type: DifferenceCommand, token: '-' }] },
    { line: '*', expectedCommands: [{ type: MultiplyCommand, token: '*' }] },
    { line: '/', expectedCommands: [{ type: DivideCommand, token: '/' }] },
    { line: 'foo', expectedCommands: [{ type: UnknownCommand, token: 'foo' }] },

    { line: '123 456 + 789 *', expectedCommands: [
        { type: PushOperandCommand, token: 123 },
        { type: PushOperandCommand, token: 456 },
        { type: SumCommand, token: '+' },
        { type: PushOperandCommand, token: 789 },
        { type: MultiplyCommand, token: '*' },
    ]},

    { line: '/ 0.45 - 0 * foobar 456 789', expectedCommands: [
        { type: DivideCommand, token: '/' },
        { type: PushOperandCommand, token: 0.45 },
        { type: DifferenceCommand, token: '-' },
        { type: PushOperandCommand, token: 0 },
        { type: MultiplyCommand, token: '*' },
        { type: UnknownCommand, token: 'foobar' },
        { type: PushOperandCommand, token: 456 },
        { type: PushOperandCommand, token: 789 },
    ]},
];

describe.each(matchCases)('matches calculator line "$line"', ({ line, expectedCommands }) => {
    const cmds = CalcLineCommand.fromLine(line);

    test(`returns ${expectedCommands.length} commands`, () => {
        expect(cmds).toHaveLength(expectedCommands.length);
    });

    if (expectedCommands.length > 0) {
        for (let i = 0; i < expectedCommands.length; i++) {
            const { type, token } = expectedCommands[i];
            test(`command at ${i} matches ${type.name} initialized with ${token}`, () => {
                expect(cmds[i]).toBeInstanceOf(type);
                expect(cmds[i].token).toEqual(token);
            });
        }
    }
});
