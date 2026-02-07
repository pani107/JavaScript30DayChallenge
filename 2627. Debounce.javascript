/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerId = null;

    return function(...args) {
        // Cancel the previous scheduled execution
        if (timerId !== null) {
            clearTimeout(timerId);
        }

        // Schedule a new execution
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
