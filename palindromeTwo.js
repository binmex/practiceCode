/**
 * Have the function PalindromeTwo(str) take the str parameter being passed
 * and return the string true if the parameter is a palindrome,
 * (the string is the same forward as it is backward) otherwise return the string false.
 * The parameter entered may have punctuation and symbols but they should not affect whether
 * the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna"
 * should return true.
 */

//"racecar"

const palindrome = (str)=>{
    let cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    console.log(cleanStr.split("").reverse().join(""));
    let reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //true