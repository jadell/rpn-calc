const { toLower } = require('lodash');

function fromLineMatch(matchString, commandClass) {
    return (line) => {
        return toLower(line).trim() === matchString ? [new commandClass(line)] : [];
    }
}

module.exports = { fromLineMatch };