var join = function(arr1, arr2) {
    const map = new Map();

    // Step 1: Insert arr1 objects
    for (let obj of arr1) {
        map.set(obj.id, obj);
    }

    // Step 2: Merge or insert arr2 objects
    for (let obj of arr2) {
        if (map.has(obj.id)) {
            // Merge (arr2 overrides arr1)
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, obj);
        }
    }

    // Step 3: Convert to array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
