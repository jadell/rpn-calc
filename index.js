const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');
const { toLower, negate, isEmpty, toNumber } = require('lodash');
const Stack = require('./lib/stack.js');
const NoopCommand = require('./lib/commands/noop.js');
const HelpCommand = require('./lib/commands/help.js');
const QuitCommand = require('./lib/commands/quit.js');
const ClearStackCommand = require('./lib/commands/clear-stack.js');
const PrintStackCommand = require('./lib/commands/print-stack.js');
const CalcLineCommand = require('./lib/commands/calc-line.js');

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
    NoopCommand,
    HelpCommand,
    QuitCommand,
    ClearStackCommand,
    PrintStackCommand,
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
            commands.push(...CalcLineCommand.fromLine(line));
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

