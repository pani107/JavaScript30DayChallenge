var compactObject = function(obj) {
    
    // Base case: if not object, return as it is
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // If it's an array
    if (Array.isArray(obj)) {
        let result = [];
        
        for (let value of obj) {
            if (Boolean(value)) {
                result.push(compactObject(value));
            }
        }
        
        return result;
    }

    // If it's an object
    let result = {};
    
    for (let key in obj) {
        if (Boolean(obj[key])) {
            result[key] = compactObject(obj[key]);
        }
    }

    return result;
};
