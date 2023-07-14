const BaseCommand = require('./base.js');
const QuitCommand = require('./quit.js');
const ClearStackCommand = require('./clear-stack.js');
const PrintStackCommand = require('./print-stack.js');
const StackInPromptCommand = require('./stack-in-prompt.js');
const CalcLineCommand = require('./calc-line.js');
const CommandResult = require('./result.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match.js');
const HelpMessage = require('./mixins/help-message.js');

class HelpCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = '?';
    static helpString = '      show this help message'

    execute() {
        const helpMessage = `
Reverse Polish notation calculator
    ${this.constructor.helpMessage}
    ${QuitCommand.helpMessage}
    ${ClearStackCommand.helpMessage}
    ${PrintStackCommand.helpMessage}
    ${StackInPromptCommand.helpMessage}

${CalcLineCommand.helpMessage}
`.trim();
        return new CommandResult(helpMessage, { haltProcessing: true });
    }
}

module.exports = HelpCommand;