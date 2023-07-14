const { negate, isEmpty } = require('lodash');
const BaseCommand = require('./base.js');
const UnknownCommand = require('./unknown.js');
const PushOperandCommand = require('./push-operand.js');
const SumCommand = require('./sum.js');
const DifferenceCommand = require('./difference.js');
const MultiplyCommand = require('./multiply.js');
const DivideCommand = require('./divide.js');
const SquareRootCommand = require('./square-root.js');
const PowerCommand = require('./power.js');

const CALC_COMMANDS = [
    PushOperandCommand,
    SumCommand,
    DifferenceCommand,
    MultiplyCommand,
    DivideCommand,
    SquareRootCommand,
    PowerCommand,
];

const isNotEmpty = negate(isEmpty);

class CalcLineCommand extends BaseCommand {
    static fromLine(line) {
        const tokens = line
            .trim()
            .split(/\s+/)
            .filter(isNotEmpty);

        return tokens.reduce((cmds, token) => {
            for (const type of CALC_COMMANDS) {
                const foundCmds = type.fromLine(token);
                if (isNotEmpty(foundCmds)) {
                    return cmds.concat(foundCmds);
                }
            }
            return cmds.concat(new UnknownCommand(token));
        }, []);
    };

    static get helpMessage() {
        const operationHelp = CALC_COMMANDS
            .map(c => c.helpMessage ? '    ' + c.helpMessage : null)
            .filter(s => s)
            .join("\n");
        return `
  Calculator operations
${operationHelp}
`.trim();
    }
}

module.exports = CalcLineCommand;
