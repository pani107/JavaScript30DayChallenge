Array.prototype.groupBy = function(fn) {
    const result = {};
    
    for (let item of this) {
        const key = fn(item);  // Get group key
        
        if (!result[key]) {
            result[key] = [];
        }
        
        result[key].push(item);
    }
    
    return result;
};
