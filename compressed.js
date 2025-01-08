function StringChallenge(str) {
    let compressed = '';
    let count = 1;
    
    for (let i = 0; i < str.length; i++) {
        // If current character matches next character, increment counter
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Add count and current character to result
            compressed += count + str[i];
            // Reset counter
            count = 1;
        }
    }
    
    return compressed;
}

// Test cases
console.log(StringChallenge("wwwgggoop")); // "3w3g2o2p"
console.log(StringChallenge("aabbcc")); // "2a2b2c"
console.log(StringChallenge("wwwwww")); // "6w"