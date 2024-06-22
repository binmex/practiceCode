/**
*me indica cuantos caracteres unicos hay en la palabra
 */
function maxUniqueCharsBetweenPairs(str) {
    let characters = [];
    str.split("").forEach((char, index) => {
        if (characters.indexOf(char) === -1) {
            characters.push(char);
        }
    });
    
    return characters.length;
}

// Test cases
console.log(maxUniqueCharsBetweenPairs("ahyjakh"));
console.log(maxUniqueCharsBetweenPairs("gheecgkaem"));
console.log(maxUniqueCharsBetweenPairs("mmmerme"));
console.log(maxUniqueCharsBetweenPairs("abcdefgh"));




function maxUniqueCharsBetweenPairs2(str) {
    let maxUniqueCount = 0;
    const n = str.length;
    
    // Object to store the indices of each character
    const charIndices = {};
    
    for (let i = 0; i < n; i++) {
        if (!charIndices[str[i]]) {
            charIndices[str[i]] = [];
        }
        charIndices[str[i]].push(i);
    }
    console.log(charIndices);
    
    // Iterate over each character's indices
    for (const indices of Object.values(charIndices)) {
        if (indices.length > 1) {
            for (let i = 0; i < indices.length - 1; i++) {
                for (let j = i + 1; j < indices.length; j++) {
                    const start = indices[i] + 1;
                    const end = indices[j];
                    if (end > start) {
                        const uniqueChars = new Set(str.substring(start, end));
                        maxUniqueCount = Math.max(maxUniqueCount, uniqueChars.size);
                    }
                }
            }
        }
    }
    
    return maxUniqueCount;
}

// Test cases
console.log(maxUniqueCharsBetweenPairs2("ahyjakh"));  // Output: 4
console.log(maxUniqueCharsBetweenPairs2("gheecgkaem"));  // Output: 5
console.log(maxUniqueCharsBetweenPairs2("mmmerme"));  // Output: 3
console.log(maxUniqueCharsBetweenPairs2("abcdefgh"));  // Output: 0