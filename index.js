const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');
const Stack = require('./lib/stack.js');
const Processor = require('./lib/processor.js');

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

const options = {
    stackInPrompt: false,
};

const stack = new Stack();
const processor = new Processor();

(async () => {
    let cmdExit = false;
    while (!cmdExit) {
        const prompt = (options.stackInPrompt ? JSON.stringify(stack.show()) : '') + '> ';
        const line = await rl.question(prompt);
        const result = processor.process(line, stack, options);

        if (result.display) {
            console.log(result.display);
        }

        if (result.isExit) {
            cmdExit = true;
        }
    };

    exit();
})();

