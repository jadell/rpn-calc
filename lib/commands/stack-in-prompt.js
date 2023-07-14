const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match');
const HelpMessage = require('./mixins/help-message.js');

class StackInPromptCommand extends mix(BaseCommand, FromLine, HelpMessage) {
    static matchToken = 'prompt';
    static helpString = ' toggle displaying the calculator stack in the prompt'

    execute({ options }) {
        options.stackInPrompt = !options.stackInPrompt;
        return new CommandResult(false);
    }
}

module.exports = StackInPromptCommand;
