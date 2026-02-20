class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this; // for method chaining
    }

    subtract(value) {
        this.result -= value;
        return this; // for method chaining
    }

    multiply(value) {
        this.result *= value;
        return this; // for method chaining
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this; // for method chaining
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this; // for method chaining
    }

    getResult() {
        return this.result;
    }
}
