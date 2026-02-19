class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    // For addition using +
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    // For String(obj)
    toString() {
        return `[${this.nums.join(",")}]`;
    }
}
