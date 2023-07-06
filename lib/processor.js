const { isEmpty } = require('lodash');
const NoopCommand = require('./commands/noop.js');
const HelpCommand = require('./commands/help.js');
const QuitCommand = require('./commands/quit.js');
const ClearStackCommand = require('./commands/clear-stack.js');
const PrintStackCommand = require('./commands/print-stack.js');
const StackInPromptCommand = require('./commands/stack-in-prompt.js');
const CalcLineCommand = require('./commands/calc-line.js');

const FLOW_COMMANDS = [
    NoopCommand,
    HelpCommand,
    QuitCommand,
    ClearStackCommand,
    PrintStackCommand,
    StackInPromptCommand,
];

class Processor {
    process(line, stack, options) {
        const commands = FLOW_COMMANDS.reduce((agg, curr) => {
            return agg.concat(curr.fromLine(line))
        }, []);

        if (isEmpty(commands)) {
            commands.push(...CalcLineCommand.fromLine(line));
         }

        let lastResult = null;
        for (const command of commands) {
            lastResult = command.execute({ stack, options });
            if (lastResult.haltProcessing) {
                break;
            }
        }

        return lastResult;
    }
}

module.exports = Processor;