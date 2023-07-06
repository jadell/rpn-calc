class Stack {
    #operands = [];

    get length() {
        return this.#operands.length;
    }

    push(a) {
        this.#operands.push(a);
        return this.length;
    }

    pop() {
        return this.length > 0 ? this.#operands.pop() : null;
    }

    peek() {
        return this.length > 0 ? this.#operands[this.length-1] : null;
    }

    show() {
        return [...this.#operands];
    }

    clear() {
        const prior = this.#operands;
        this.#operands = [];
        return prior;
    }
}

module.exports = Stack;