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
?       show this help message
q       quit
c       clear current calculator stack
p       print current calculator stack
prompt  toggle displaying the calculator stack in the prompt
```

Calculations
```
> 5
5
> 8
8
> +
13
```

```
> 5 5 5 8 + + -
-13
> 13 +
0
```

Clearing calculator stack between operations
```
> 5 5 5 8 + + -
-13
> 123
123
> p
[-13,123]
> c
Calculator stack cleared. Stack was: [-13,123]
> 10 20 30 +
50
> p
[10,50]
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
npm run test <test name>
```


## Architecture
The core process is based off a Command Processor pattern. Each line of input is tokenized and each token becomes a command. Commands are processed in order until none are left (the entire input line is consumed) or a specific command token halts processing of remaining tokens (e. g. an unknown token will prevent further processing of the line.)

Some commands consume the entire line of input (e. g. the help command), while others break the line into multiple commands (e. g. the calculator line command.)

Each command execution is passed the calculator stack as well as any auxilliary data it might need to execute. This includes flow and application controls, like turning the stack promp on/off.

This design was chosen because it allows easy addition of new commands/operations/tokens without interfering with existing functionality. It also allows for testing each new operation in isolation.