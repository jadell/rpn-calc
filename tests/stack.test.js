const Stack = require('../lib/stack.js');

describe('empty stack', () => {
    const stack = new Stack();

    test('has zero length', () => {
        expect(stack).toHaveLength(0);
    });

    test('has null next operand', () => {
        expect(stack.peek()).toBeNull();
    });

    test('has null pop operand', () => {
        expect(stack.pop()).toBeNull();
    });

    test('shows empty array', () => {
        expect(stack.show()).toEqual([]);
    });
});

describe('pushing onto empty stack', () => {
    const stack = new Stack();
    const newLength = stack.push(123);

    test('returns new stack length', () => {
        expect(newLength).toEqual(1);
    });

    test('updates stack length', () => {
        expect(stack.length).toEqual(1);
    });

    test('shows pushed element when peeking', () => {
        expect(stack.peek()).toEqual(123);
    });

    test('shows array of elements', () => {
        expect(stack.show()).toEqual([123]);
    });

    test('returns pushed element when popped and empties stack', () => {
        expect(stack.pop()).toEqual(123);
        expect(stack.peek()).toBeNull();
        expect(stack).toHaveLength(0);
    });
});


describe('last element is 0', () => {
    const stack = new Stack();
    const newLength = stack.push(0);

    test('returns new stack length', () => {
        expect(newLength).toEqual(1);
    });

    test('updates stack length', () => {
        expect(stack.length).toEqual(1);
    });

    test('shows pushed element when peeking', () => {
        expect(stack.peek()).toEqual(0);
    });

    test('shows array of elements', () => {
        expect(stack.show()).toEqual([0]);
    });

    test('returns pushed element when popped and empties stack', () => {
        expect(stack.pop()).toEqual(0);
        expect(stack.peek()).toBeNull();
        expect(stack).toHaveLength(0);
    });
});

describe('pushing onto stack with existing elements', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(456);
    const newLength = stack.push(789);

    test('returns new stack length', () => {
        expect(newLength).toEqual(3);
    });

    test('updates stack length', () => {
        expect(stack.length).toEqual(3);
    });

    test('shows last pushed element when peeking', () => {
        expect(stack.peek()).toEqual(789);
    });

    test('shows array of elements', () => {
        expect(stack.show()).toEqual([123, 456, 789]);
    });

    test('returns last pushed element when popped and is set to new last element', () => {
        expect(stack.pop()).toEqual(789);
        expect(stack.peek()).toEqual(456);
        expect(stack).toHaveLength(2);
    });
});

test('clear stack', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(456);
    stack.push(789);
    const priorOperands = stack.clear();
    expect(priorOperands).toEqual([123, 456, 789]);
    expect(stack).toHaveLength(0);
    expect(stack.peek()).toBeNull();
    expect(stack.show()).toEqual([]);
});
