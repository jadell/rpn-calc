# rpn-calc
Reverse Polish notation calculator

## Install
Clone from github:
```
git clone git@github.com:jadell/rpn-calc.git
```

Install dependencies:
```
npm install
```

## Run
```
node index.js
```

## Usage
While running the calculator, entering `?` will display a help message.

```
q = quit
c = clear
p = print stack
? = print help
```

## Run Tests
Install test dependencies:
```
npm install --dev
```

Run all tests:
```
npm run test
```

Run specific tests:
```
npm run test stack
```


## Architecture
The core process is based off a Command Processor pattern. Each line of input is tokenized and each token becomes a command. Commands are processed in order until none are left (the entire input line is consumed) or a specific command token halts processing of remaining tokens (e. g. an unknown token will prevent further processing of the line.)

Each command execution is passed the calculator stack aw well as any auxilliary data it might need to execute.

This design was chosen because it allows easy addition of new commands/operations/tokens without interfering with existing functionality. It also allows for testing each new operation in isolation.