const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');
const { toLower, negate, isEmpty, toNumber } = require('lodash');
const Stack = require('./lib/stack.js');
const UnknownCommand = require('./lib/commands/unknown.js');
const HelpCommand = require('./lib/commands/help.js');
const QuitCommand = require('./lib/commands/quit.js');
const ClearStackCommand = require('./lib/commands/clear-stack.js');
const PrintStackCommand = require('./lib/commands/print-stack.js');
const PushOperandCommand = require('./lib/commands/push-operand.js');
const SumCommand = require('./lib/commands/sum.js');
const DifferenceCommand = require('./lib/commands/difference.js');
const MultiplyCommand = require('./lib/commands/multiply.js');
const DivideCommand = require('./lib/commands/divide.js');

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
    terminal: false,
});

const exit = () => {
    rl.close();
}

process.on('SIGINT', () => {
    exit();
});

const FLOW_COMMANDS = [
    HelpCommand,
    QuitCommand,
    ClearStackCommand,
    PrintStackCommand,
    PushOperandCommand,
    SumCommand,
    DifferenceCommand,
    MultiplyCommand,
    DivideCommand,
];

(async () => {
    const stack = new Stack();
    let cmdExit = false;
    while (!cmdExit) {
        const line = toLower(await rl.question('> '));

        const commands = FLOW_COMMANDS.reduce((agg, curr) => {
            return agg.concat(curr.fromLine(line))
        }, []);

        if (isEmpty(commands)) {
            commands.push(...[new UnknownCommand(line)]);
         }

        let lastResult = null;
        for (const command of commands) {
            lastResult = command.execute({ stack });
            if (lastResult.haltProcessing) {
                break;
            }
        }

        if (lastResult.display) {
            console.log(lastResult.display);
        }

        if (lastResult.isExit) {
            cmdExit = true;
        }
    };

    exit();
})();

