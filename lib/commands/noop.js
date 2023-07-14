const BaseCommand = require('./base.js');
const CommandResult = require('./result.js');
const { mix } = require('../mix.js');
const FromLine = require('./mixins/from-line-match');

class NoopCommand extends mix(BaseCommand, FromLine) {
    static matchToken = '';

    execute() {
        return new CommandResult(false, { haltProcessing: true });
    }
}

module.exports = NoopCommand;
