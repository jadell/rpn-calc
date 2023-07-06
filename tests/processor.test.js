const Stack = require('../lib/stack.js');
const Processor = require('../lib/processor.js');
const CommandResult = require('../lib/commands/result.js');

const cases = [
    { lines: [
        { input: '5', expectedDisplay: '5', expectedStack: [5] },
        { input: '8', expectedDisplay: '8', expectedStack: [5, 8] },
        { input: '+', expectedDisplay: '13', expectedStack: [13] },
    ]},
    { lines: [
        { input: '5 5 5 8 + + -', expectedDisplay: '-13', expectedStack: [-13] },
        { input: '13 +', expectedDisplay: '0', expectedStack: [0] },
    ]},
    { lines: [
        { input: '-3', expectedDisplay: '-3', expectedStack: [-3] },
        { input: '-2', expectedDisplay: '-2', expectedStack: [-3, -2] },
        { input: '*', expectedDisplay: '6', expectedStack: [6] },
        { input: '5', expectedDisplay: '5', expectedStack: [6, 5] },
        { input: '+', expectedDisplay: '11', expectedStack: [11] },
    ]},
    { lines: [
        { input: '5', expectedDisplay: '5', expectedStack: [5] },
        { input: '9', expectedDisplay: '9', expectedStack: [5, 9] },
        { input: '1', expectedDisplay: '1', expectedStack: [5, 9, 1] },
        { input: '-', expectedDisplay: '8', expectedStack: [5, 8] },
        { input: '/', expectedDisplay: '0.625', expectedStack: [0.625] },
    ]},
];


describe.each(cases)('case $#', ({ lines }) => {
    const options = {};
    const stack = new Stack();
    const processor = new Processor();

    test.each(lines)('input "$input" displays value "$expectedDisplay"', ({ input, expectedDisplay, expectedStack }) => {
        const result = processor.process(input, stack, options);
        expect(result).toBeInstanceOf(CommandResult);
        expect(result.display).toEqual(expectedDisplay);
        expect(stack.show()).toEqual(expectedStack);
    });
});
