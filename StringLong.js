const findString = (str) => {
    let words = str.replace(/[^\w\s]/g,'');
    words = words.split(" ");
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;

};

console.log(findString("fun&!! time"));
console.log(findString("I love dogs"));