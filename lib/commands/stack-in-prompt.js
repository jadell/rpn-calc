const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { fromLineMatch } = require('./from-line-match.js');

class StackInPromptCommand extends BaseCommand {
    static fromLine = fromLineMatch('prompt', this);

    execute({ options }) {
        options.stackInPrompt = !options.stackInPrompt;
        return new CommandResult(false);
    }
}

module.exports = StackInPromptCommand;
